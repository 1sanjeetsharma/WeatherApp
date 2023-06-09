/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import NavBarWithLogin from "./NavBarWithLogin";
import Body from "./Body";
import { createContext, useState } from "react";
export const myContext = createContext();
function App() {
    const [Loguser, setLoguser] = useState({
        name: "",
        email: "",
        id: "",
        logged: false,
    });
    const ContextData = {
        Loguser: Loguser,
        setLoguser: setLoguser,
    };

    return (
        <myContext.Provider value={ContextData}>
            <Container>
                {Loguser.logged ? (
                    <>
                        <NavBar />
                        <Body />
                    </>
                ) : (
                    <>
                        <NavBarWithLogin />
                        <div>
                            <h2>Please Login to continue</h2>
                        </div>
                    </>
                )}
            </Container>
        </myContext.Provider>
    );
}

export default App;
