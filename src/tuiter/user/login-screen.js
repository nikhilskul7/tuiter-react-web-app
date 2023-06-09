import React, {useState} from "react";
import {useNavigate} from "react-router"; // to navigate to profile after login
import {useDispatch} from "react-redux"; // to invoke thunks
import {loginThunk} from "../services/auth-thunks"; // to send login HTTP request to server

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            const response = await dispatch(loginThunk({username, password}));
            if (response.error) {
                alert("Invalid creds."); // display the error message in an alert
            } else {
                navigate("/tuiter/profile");
            }
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <div className={"mt-2"}>
                <label>Username</label>
                <input className={"form-control"} type={"text"} value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Password</label>
                <input className={"form-control"} type={"password"} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div>
                <a href={"/tuiter/register"}>Don't have an account?
                    Click
                    here to register!</a>
            </div>
            <div>
                <button className={"btn btn-primary mt-2"} onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginScreen;