import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginBox(){
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState(null);
    const navigate = useNavigate();
    let messagecheck = "";

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                password,
            });
            setToken(response.data.access);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            navigate('/loggedin');
        } catch (error) {
            messagecheck = "Incorrect credentials";
        }
    };

    return(
        <form onSubmit={handleLogin}>
            <div className="flex justify-center items-center bg-slate-600 bg opacity-100 min-h-[815px] bg-opacity-30 ">
                    <div className="flex flex-col justify-center items-center h-[500px] w-[35%] bg-gradient-to-r from-indigo-950 via-cyan-950 to-violet-950 rounded-xl font-extrabold text-violet-300 text-2xl">
                            Enter login details here
                            <div className="flex flex-col justify-center items-center text-indigo-950 text-sm">
                            <label className="text-rose-100 p-3 " htmlFor="email">Username</label>
                            <input className="bg-gradient-to-r from-neutral-950 via-red-950 to-indigo-800 text-rose-100 p-2 rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)}type="email" placeholder="Enter username"></input>
                            <label className="text-rose-100 p-3" htmlFor="password">Password</label>
                            <input className="bg-gradient-to-r from-neutral-950 via-red-950 to-indigo-800 text-rose-100 p-2 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"></input>
                            </div>
                            <button className="text-lg p-2 m-4 bg-gradient-to-r from-violet-800 via-indigo-950 to-blue-950  rounded-xl">Login/Register</button>
                            <>
                                {messagecheck}
                            </>
                    </div>
            </div>
        </form>
    )
}


export default LoginBox


