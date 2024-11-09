import "./login.css";
import { Link } from "react-router-dom";

function Signup() {
  function created(){
    alert("profile created!!!")
  }
  return (
    <>
      <div className="card">
        <div id="box">
          <div className="heading">
            <h1>Sign Up</h1>
          </div>
          <form>
            <div className="content">
              <label for="name">Name :</label>
              <input type="text" id="name"></input>
            </div>
            <div className="content">
              <label for="mail">Email :</label>
              <input type="email" id="mail"></input>
            </div>
            <div className="content">
              <label for="pass">Passw :</label>
              <input type="password" id="pass"></input>
            </div>
             <div className="content">
              <label for="pass">confirm :</label>
              <input type="password" id="pass"></input>
            </div>
            
            <div className="content">
              <Link to="/dash">
                <button onClick={created}>Create</button>
              </Link>

              
            </div>
            <div className="content"></div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
