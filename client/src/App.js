import './App.css';
import { useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "./components/store/user.js";
// import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from "./components/LandingPage.js"
import Home from "./components/Home.js";
import LoginPage from "./components/login_signup/LoginPage.js"
import SignUpPage from "./components/login_signup/SignUpPage.js";
import Quiz from "./components/quiz/Quiz.js";
import SubmarineCables from './components/play/SubmarineCables';
import Viewport from './components/play/Viewport';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBackToLanding = useCallback(() => {
    navigate("/");
  }, [navigate])

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
          res.json().then((res) => (
            dispatch(setUser(res.user))
          ))
        } else if (res.status === "401") {
          throw new Error("unauthorized request");
        }
      })
      .then(
        checkQuizResults())
      .catch((err) => {
        console.error(err);
      });
    } else {
      goBackToLanding();
    }
  }, [dispatch])

  // debugger

  const quizResults = useSelector(state => state.rootReducer.user.profile.quiz_results)
  function checkQuizResults() {
     if (quizResults === "true" || "false" ) {
      // debugger
      console.log(quizResults)
      navigate("/home")
    } else {
      console.log(quizResults)
      navigate("/quiz")
    }
  }

  return (
      <div className="App">
        <div id="allContent">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />


            <Route path="/cables" element={<SubmarineCables />} />
            <Route path="/travelpath" element={<Viewport />} />
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;