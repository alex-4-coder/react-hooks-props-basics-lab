import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


const user = {
  name: "Alex",
  city: "Nairobi",
  bio: "I love building web applications!",
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  color: "firebrick" 
};



function App() {
  return (
    <div>
      <NavBar />
     <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin}/>
    </div>
  );
}

export default App;
