import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="card">
        <div>
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
            <div className="content" >
              <button>
                <Link to="/dash">Login</Link>
              </button>
              <button>
                <Link to="/signup">New user</Link>
              </button>
            </div>
            <div className="content"></div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
