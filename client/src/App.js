import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./login_signup/SignUpPage.js";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" element={<SignUpPage />}/>
          {/* <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;