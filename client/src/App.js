import './App.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "./store/user.js";
import SignUpPage from "./login_signup/SignUpPage.js";
import Home from "./Home.js";

function App() {

  // const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  useEffect(() => {

    let token = localStorage.getItem("token");
    if (token) {
      fetch("/api/v1/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === "401") {
          throw new Error("unauthorized request");
        }
      })
      .then(data => {
        console.log(data)
        dispatch(setUser(data))
      })
      .catch((err) => {
        console.error(err);
      });
    } else {
      return
    }

  }, [dispatch])

  return (
    // <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            path="/signup" 
            element={<SignUpPage />} />
          <Route 
            path="/"
            element={<Home />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;