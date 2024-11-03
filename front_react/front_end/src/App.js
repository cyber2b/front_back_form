
import './App.css';

function App() {
  return (
    <div id="main">
      <header><h1>Form</h1></header>
      <form>
        <div className="content">
        <label>Name:</label>
        <input type="text" required></input>
        <br></br>
        </div>
        <div className="content">
        <label>Email:</label>
        <input type="email" required></input>
       
         </div>
        <div className="content">
        <label>Age:</label>
        <input type="number" required></input>
        </div>
        <div className="content" id="sub">
        <button type="submit">Submit</button>
        </div>
        
      </form>
      <footer><h1>End</h1></footer>
      
    </div>

  );
}

export default App;
