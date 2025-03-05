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

    const url = "https://sigma-blog-api.vercel.app";
        
    // "https://601ab995-8390-45cd-a054-4b77fa95b3f0-00-1fe784zceo76g.sisko.replit.dev";

    const navigate = useNavigate();
    const disableSignup = () => setSignupMode(false);
    const enableSignup = () => setSignupMode(true);

    useEffect(() => {
        if (authToken) 
            navigate("/profile");
    }, [authToken, navigate]);

    const handleVerification = (password, username) => {
        if (!username.trim().length || !password.trim().length) 
            return false;

        if (password !== confirmPassword)
            return false;

        return true;
    };

    const handleRegistraction = async (e) => {
        e.preventDefault();

        if (signupMode){
            if (!handleVerification(password, username))
                return console.log("Error");
        }
        

        try {
            const res = signupMode
                ? await axios.post(`${url}/auth/signup`, { username, password})
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
                        placeholder="Enter your username"
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
                    {signupMode ? "Sign up" : "Login"}
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
