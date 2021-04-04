import React from "react"
import SignIn from "../pages/signin"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./AuthContext"

function Authentication() {
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}
            >
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <SignIn />
                </div>
            </Container>
        </AuthProvider>
    )
}
//
// export default Authentication