import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

function App() {
  const [page, setPage] = useState("/")
  return (

    <>
    {/* <ItemForm/>
    <ShoppingList/> */}
    <BrowserRouter>
    <NavBar onChange={setPage}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/projects" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
)
}



ReactDOM.render(<App />, document.getElementById("root"));
// /src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// function Home() {
//   return (
//     <div>
//       <h1>Home!l</h1>
//     </div>
//   );
// }

// function App() {
  
//    return <Home />;
// }  
// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/about">
//         <About />
//       </Route>
//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/">
//         <Home />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
//  ReactDOM.render(<App />, document.getElementById("root"));
