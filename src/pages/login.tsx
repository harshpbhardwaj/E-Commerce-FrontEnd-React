import { ChangeEvent, useState } from "react"

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };




  return (
    <div className="login">

        <form >
            <h2>Login</h2>

            <input type="text" placeholder="Email" name="email" value={loginInfo.email} onChange={changeHandler} required/>
            <input type="text" placeholder="Password" name="password" value={loginInfo.password} onChange={changeHandler} required/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login