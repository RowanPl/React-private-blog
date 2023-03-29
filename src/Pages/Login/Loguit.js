import {useNavigate} from "react-router-dom";
import "./Login.css"


function Loguit({toggleAuth}){
    const navigate = useNavigate();

    function userLogin(){
        toggleAuth(false)
        alert("Je bent nu uitgelogd!");
        navigate('/');

    }

    return(
        <><div className="outercontainer">
            <div className="container">
                <div className="innercontainer">
            <p>Wilt u uitloggen, Druk deze knop</p>
            <button onClick={userLogin}>Loguit</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Loguit;