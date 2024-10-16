import { authActions } from "../apiSlice/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';// Login API Call


export const login = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:3001/api/auth/login", user);
            dispatch(authActions.login(data));
            localStorage.setItem("user", JSON.stringify(data));
            toast.success("Login Success");
            window.location.href = "/"
            
        } catch (error) {
            toast.error("Login Failed");
        }
    };
}

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem("user");
        dispatch(authActions.logout());
        window.location.href = "/"
    };
}