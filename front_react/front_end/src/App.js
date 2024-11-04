
import './App.css';

function App() {
  function submitted(){
    
  }
  return (
    <div id="main">
      <header><h1></h1></header>
      <div>
        <div className="content" ><h1 id="heading">Login Form</h1></div>
      <form >
        
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
        <div className="content" >
        <button type="submit" onclick="submitted">Submit</button>
        
        </div>
       
        
      </form>
      </div>
      
      <footer><h1>@ copyright2024</h1></footer>
      
    </div>

  );
}

export default App;
