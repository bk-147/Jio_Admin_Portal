import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import logo from '../src_images/JioLiv@2x.png';
function Login() {
    const navigate = useNavigate();
    const [validPass,setValidPass] = useState(true);
    const [formData,setFormData] = useState({
        username:"",
        password:""
    });
    const handleClick =  async (e)=>{
        e.preventDefault();
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            })
        })
        if(res.ok){
            const data = await res.json();
            localStorage.setItem('token',data.token);   
            localStorage.setItem('user',JSON.stringify(data));
            setValidPass(true);
            navigate('/dashboard');
        }else{
            setFormData({
                username:"",
                password:""
            })
            setValidPass(false);
        }
        
    }
    const handleChange = (e)=>{
        const changedField = e.target.name;
        const newVal = e.target.value;
        setFormData(currData=>{
            return {...currData,
            [changedField]:newVal,
            };
        });
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleClick}>
                <div className="Auth-form-content">
                   
                    <img src={logo} alt={"logo"}/>
                    <h3 className="Auth-form-title">Admin Login</h3>
                    <div className="form-group mt-3">
                        <label>Username : </label>
                        <input
                            type="text"
                            id="Username"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                        // placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password : </label>
                        <input
                            type="password"
                            id="Password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        // placeholder="Password"
                        />
                        {!validPass && <p style={{color:'red'}}>Invalid username or password</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;