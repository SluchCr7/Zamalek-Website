import { registerAction } from "../apiSlice/registerSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';// Register API Call
import axios from "axios";

const register = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:3001/api/auth/register", user);
            dispatch(registerAction.register(data.message));
            toast.success("Register Success");
            window.location.href = "/Login"
        }
        catch (error) {
            toast.error("Register Failed");
        }
    }
}

export { register }