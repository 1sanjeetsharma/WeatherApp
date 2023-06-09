import Container from "react-bootstrap/Container";
import { myContext } from "./App";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useEffect } from "react";
import firebase from "./firebase";
import { Button } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function NavBarWithLogin() {
    const { Loguser, setLoguser } = useContext(myContext);
    // console.log(Loguser);
    const handleClick = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                setLoguser({
                    ...Loguser,
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                    logged: true,
                });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <h1>Weather Api</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
                <Button
                    variant="success"
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Login
                </Button>{" "}
            </Container>
        </Navbar>
    );
}

export default NavBarWithLogin;
