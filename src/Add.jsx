// eslint-disable-next-line no-unused-vars
import firebase from "./firebase";
import { getDatabase, ref, push } from "firebase/database";
import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { myContext } from "./App.jsx";

const Add = () => {
    const [city, setCity] = useState("");
    const { Loguser, setLoguser } = useContext(myContext);
    const handleChange = (evt) => {
        setCity(evt.target.value);
    };
    //   const handleClick = () => {
    //     console.log("city is ", city);
    //   };
    const db = getDatabase();
    // let user = Loguser.email;
    // user.replace
    const r = ref(db, `${Loguser.id}`);
    const handleClick = () => {
        push(r, city);
        setCity("");
    };
    return (
        <Form className="d-flex">
            <Form.Control
                type="input"
                placeholder="Enter a City"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                value={city}
            />
            <Button
                variant="outline-success"
                onClick={() => {
                    handleClick();
                }}
            >
                Add
            </Button>
        </Form>
    );
};
export default Add;
