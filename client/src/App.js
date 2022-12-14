import './App.css';
// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./login_signup/SignUpPage.js";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    // <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            path="/signup" 
            element={<SignUpPage />}>
          </Route>
          {/* <Route path="/">
            
          </Route> */}
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;