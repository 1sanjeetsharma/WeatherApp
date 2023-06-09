import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { getDatabase, ref, remove, child } from "firebase/database";
import { PropTypes } from "prop-types";
// import Button from "react-bootstrap/Button";
import { myContext } from "./App";

import "./citycard.css";
function CityCard(props) {
    const [Data, setData] = useState({
        country: "",
        name: "",
        region: "",
        lat: "",
        log: "",
        tz: "",
        aqi: "",
        temp_c: "",
        f_temp_c: "",
        f_temp_f: "",
        temp_f: "",
        icon: "",
        ic_code: "",
        weather: "",
        humidity: "",
        last_updated: "",
        wind_kph: "",
    });
    const { Loguser, setLoguser } = useContext(myContext);
    const db = getDatabase();
    const r = ref(db, Loguser.id);
    const handleDel = () => {
        console.log("deleting: ", props.city);
        remove(child(r, props.i));
    };
    function LoadData(city) {
        const key = "7873095af4284c2298b162656232304";
        axios
            .get(
                `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`
            )
            .then((response) => {
                // console.log(response.data);
                setData({
                    ...Data,
                    country: response.data.location.country,
                    name: response.data.location.name,
                    region: response.data.location.region,
                    lat: response.data.location.lat,
                    log: response.data.location.lon,
                    tz: response.data.location.tz_id,
                    aqi: response.data.current.air_quality.pm10,
                    cloud: response.data.current.cloud,
                    temp_c: response.data.current.temp_c,
                    f_temp_c: response.data.current.feelslike_c,
                    f_temp_f: response.data.current.feelslike_f,
                    temp_f: response.data.current.temp_f,
                    icon: response.data.current.condition.icon,
                    ic_code: response.data.current.condition.code,
                    weather: response.data.current.condition.text,
                    humidity: response.data.current.humidity,
                    last_updated: response.data.current.last_updated,
                    wind_kph: response.data.current.wind_kph,
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
    useEffect(() => {
        LoadData(props.city);
        // console.log(Data);
    }, []);

    return (
        <>
            {/* <section className="vh-100" style={{ backgroundColor: "#4B515D" }}> */}
            {/* <div className="container py-5 h-100"> */}
            {/* <div className="row d-flex justify-content-center align-items-center h-100"> */}
            <div className="col-md-8 col-lg-6 col-xl-4">
                <div
                    className="card"
                    style={{ color: "#4B515D", borderRadius: "35px" }}
                >
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <h6 className="flex-grow-1">
                                {Data.name}, {Data.region}, {Data.country}
                            </h6>
                            <h6>Updated : {Data.last_updated}</h6>
                        </div>
                        <div className="d-flex flex-column text-center mt-5 mb-4">
                            <h6
                                className="display-4 mb-0 font-weight-bold"
                                style={{ color: "#1C2331" }}
                            >
                                {" "}
                                {Data.temp_c}°C{" "}
                            </h6>
                            <span
                                className="small"
                                style={{ color: "#868B94" }}
                            >
                                {Data.weather}
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div
                                className="flex-grow-1"
                                style={{ fontSize: "1rem" }}
                            >
                                <div>
                                    <i
                                        className="fas fa-wind fa-fw"
                                        style={{ color: "#868B94" }}
                                    />{" "}
                                    <span className="ms-1">
                                        {Data.wind_kph} km/h
                                    </span>
                                </div>
                                <div>
                                    <i
                                        className="fas fa-tint fa-fw"
                                        style={{ color: "#868B94" }}
                                    />{" "}
                                    <span className="ms-1">
                                        {Data.humidity}{" "}
                                    </span>
                                </div>
                                <div>
                                    <i
                                        className="fas fa-sun fa-fw"
                                        style={{ color: "#868B94" }}
                                    />{" "}
                                    <span className="ms-1"> {Data.cloud}</span>
                                </div>
                            </div>
                            <div>
                                <img src={Data.icon} width="100px" />
                            </div>
                        </div>
                        <div className="option">
                            {/* <div className="col-4 justify-content-center"> */}
                            <button
                                className="reload"
                                onClick={() => {
                                    LoadData(props.city);
                                }}
                            >
                                <i className="fa-sharp fa-solid fa-arrow-rotate-right"></i>
                            </button>
                            <button
                                className="delete"
                                onClick={() => {
                                    handleDel();
                                }}
                            >
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </button>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
CityCard.propTypes = {
    city: PropTypes.string,
    i: PropTypes.string,
};
export default CityCard;
