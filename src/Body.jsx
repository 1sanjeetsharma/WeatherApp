import CityCard from "./CityCard";
import { useEffect, useState, useContext } from "react";
import firebase from "./firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { myContext } from "./App";
const Body = () => {
    const { Loguser, setLoguser } = useContext(myContext);
    const [Data, setData] = useState({});
    useEffect(() => {
        const db = getDatabase();
        const r = ref(db, Loguser.id);
        onValue(r, (snapshot) => {
            const newdata = snapshot.val();
            // console.log(data);
            setData({ ...Data, ...newdata });
        });
    }, []);
    return (
        <>
            <div className="row">
                {Object.keys(Data).map((city) => {
                    return <CityCard key={city} city={Data[city]} i={city} />;
                })}
            </div>
        </>
    );
};
export default Body;
