import React from "react"
import SignIn from "../../pages/signin"
import { Container } from "react-bootstrap"

function Authentication() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}
        >
            <div className="w-100" style={{maxWidth: "400px"}}>
                <SignIn />
            </div>
        </Container>
    )
}

export default Authentication