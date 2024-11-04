
import './App.css';

function App() {
  return (
    <div id="main">
      <header><h1>Form</h1></header>
      <form>
        <div className="content">
        <label for="name">Name:</label>
        <input type="text" id="name" required></input>
        <br></br>
        </div>
        <div className="content">
        <label for ="mail">Email:</label>
        <input type="email" id="mail" required></input>
       
         </div>
        <div className="content">
        <label for ="age">Age:</label>
        <input type="number" id="age" required></input>
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
