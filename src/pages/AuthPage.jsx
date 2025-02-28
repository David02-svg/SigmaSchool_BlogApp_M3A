import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import axios from "axios";

const AuthPage = () => {
    const [signupMode, setSignupMode] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");

    const navigate = useNavigate();
    const disableSignup = () => setSignupMode(false);
    const enableSignup = () => setSignupMode(true);

    // useEffect(() => {
    //     if (authToken) navigate("/ProfilePage");
    // }, [authToken, navigate]);

    const handleVerification = ({ password, username }) => {
        if (!username.trim().length || !password.trim().length) 
            return;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.text(emailPattern)) 
            return;

        if (password !== confirmPassword)
            return;
    };

    const handleRegistraction = async (e) => {
        e.preventDefault();

        try {
            const res = signupMode
                ? await axios.post(`${url}/auth/signup`, { username, password })
                : await axios.post(`${url}/auth/login`, { username, password });

            if (
                !signupMode &&
                res.data &&
                res.data.auth === true &&
                res.data.token
            ) {
                setAuthToken(res.data.token);
                console.log("Login Succesfully, token saved");
            }

            console.log(res.data);
        } catch (error) {
            console.error("Handle Registraction Messag: ", error);
        }
    };

    return (
        <div style={{ width: "32rem", margin: "auto" }}>
            <h2 className="mb-3">
                {signupMode ? "Create your account" : "Login to your account"}
            </h2>
            <Form className="mb-3" onSubmit={handleRegistraction}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                { signupMode &&
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                }

                <Button type="submit">
                    {signupMode ? "Login" : "Sign up"}
                </Button>
            </Form>

            {signupMode ? (
                <p>
                    Already have an account?
                    <span className="link-primary" style={{ cursor: "pointer"}}  onClick={disableSignup}> Login</span>
                </p>
            ) : (
                <p>
                    Create your account?
                    <span className="link-primary" style={{ cursor: "pointer"}} onClick={enableSignup}> Signup</span>
                </p>
            )}
        </div>
    );
};

export default AuthPage;
