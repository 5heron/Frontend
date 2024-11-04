import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and registration
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for success messages
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            });

            // Assuming the response contains the access token
            localStorage.setItem('access_token', response.data.token); // Change according to your API response
            navigate('/loggedin'); // Navigate to the logged-in page
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage("Invalid username or password. Please try again.");
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
            console.log("Login error:", error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                password,
            });

            // Clear the input fields and show success message
            setUsername('');
            setPassword('');
            setIsLogin(true); // Switch to login form after registration
            setSuccessMessage("Registration successful! Please log in.");
            setErrorMessage(''); // Clear any previous error message
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.error || "Registration failed. Please try again.");
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
            console.log("Registration error:", error);
        }
    };

    return (
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
            <div className="flex justify-center items-center bg-slate-600 opacity-100 min-h-[815px] bg-opacity-30">
                <div className="flex flex-col justify-center items-center h-[500px] w-[35%] bg-gradient-to-r from-indigo-950 via-cyan-950 to-violet-950 rounded-xl font-semibold text-violet-300 text-2xl">
                    {isLogin ? "Login" : "Register"} {/* Change form title based on the state */}
                    <div className="flex flex-col justify-center items-center text-indigo-950 text-sm">
                        <label className="text-rose-100 p-3" htmlFor="username">Username</label>
                        <input
                            className="bg-gradient-to-r from-neutral-950 via-red-950 to-indigo-800 text-rose-100 p-2 rounded-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" // Change to "text" for username input
                            placeholder="Enter username"
                        />
                        <label className="text-rose-100 p-3" htmlFor="password">Password</label>
                        <input
                            className="bg-gradient-to-r from-neutral-950 via-red-950 to-indigo-800 text-rose-100 p-2 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Display error messages */}
                    {successMessage && <div className="text-green-500">{successMessage}</div>} {/* Display success messages */}
                    <button className="text-lg p-2 m-4 bg-gradient-to-r from-violet-800 via-indigo-950 to-blue-950 rounded-xl">
                        {isLogin ? "Login" : "Register"}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin); // Toggle between login and registration
                            setSuccessMessage(''); // Clear success message on toggle
                            setErrorMessage(''); // Clear error message on toggle
                        }}
                        className="text-sm text-blue-500 underline"
                    >
                        {isLogin ? "Create an account" : "Already have an account? Log in"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default LoginBox;
