import './App.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "./components/store/user.js";
import LandingPage from "./components/LandingPage.js"
import Home from "./components/Home.js";
import LoginPage from "./components/login_signup/LoginPage.js"
import SignUpPage from "./components/login_signup/SignUpPage.js";
import Quiz from "./components/quiz/Quiz.js";
import SubmarineCables from './components/play/SubmarineCables';
import Viewport from './components/play/Viewport';

function App() {

  // const user = useSelector((state) => state.rootReducer.user.profile);
  
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
          res.json().then((res) => dispatch(setUser(res.user)))
        } else if (res.status === "401") {
          throw new Error("unauthorized request");
        }
      })

      .catch((err) => {
        console.error(err);
      });
    }
  }, [dispatch])

  return (
    // <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/cables" element={<SubmarineCables />} />
          <Route path="/travelpath" element={<Viewport />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;