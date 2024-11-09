import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="my-loader">
  <div className="rubiks-cube">
    <div className="face front">
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
    </div>
    <div className="face back">
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
    </div>
    <div className="face left">
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
    </div>
    <div className="face right">
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
    </div>
    <div className="face top">
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
    </div>
    <div className="face bottom">
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
      <div style={{background: '#ffeb3b'}} className="cube" />
      <div style={{background: '#4caf50'}} className="cube" />
      <div style={{background: '#2196f3'}} className="cube" />
      <div style={{background: '#ffffff'}} className="cube" />
      <div style={{background: '#ff3d00'}} className="cube" />
    </div>
  </div>
</div>
<div className="content">
              <Link to="/login">
                <button >Log OUT</button>
              </Link>

              
            </div>
    </>
  );
}
export default Dashboard;
