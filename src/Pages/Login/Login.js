import {useNavigate} from "react-router-dom";
import "./Login.css"
import users from "../../data/Users.json"
import {useState} from "react";



function Login({toggleAuth}){
    const navigate = useNavigate();


    const [Username, setUserName] = useState('');
    const [Password, setPassword] = useState('');


    function userLogin() {
        const currentUser = users.find((user) => {
            return user.username === Username && user.password === Password;
        });

        if (currentUser) {
            toggleAuth(true)
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    }

    return(
        <>
            <div className="outercontainer">
            <div className="container">
                <div className="innercontainer">
                    <p>Voer hier uw gegevens in</p>
                    <form>
                        <label htmlFor={Username}>Username:</label>
                        <input
                            name={"Username"}
                            id={"Username"}
                            type={"text"}
                            value={Username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label htmlFor={Password}>Password:</label>
                        <input
                        name={"Password"}
                        id={"Password"}
                        type={"password"}
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </form>
                    <button onClick={userLogin}>Login</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;