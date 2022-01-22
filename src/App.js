// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import QuestionBar from './components/QuestionBar';
import TodoContainer from './components/TodoContainer';
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    var video = document.getElementById("video");
    video.addEventListener('ended', e => {
      video.style.display = "none";
    });
  });
  return (
    <div>
      <video id="video" autoplay="autoplay" controls="controls" muted>
        <source src="gearup.mp4" type="video/mp4" />
      </video>
      <div className="App">
        <header className="App-header">
          <div className="qyun-answers">
            Qyun answers in:
            <a href="">हिन्दी</a>•
            <a href="">বাংলা</a>•
            <a href="">తెలుగు</a>•
            <a href="">मराठी</a>•
            <a href="">தமிழ்</a>•
            <a href="">ગુજરાતી</a>•
            <a href="">ಕನ್ನಡ</a>•
            <a href="">മലയാളം</a>•
            <a href="">ਪੰਜਾਬੀ</a> 
          </div>
        </header>
        <body className="app-body">
          <QuestionBar />
        </body>
        <Footer />
      </div>
    </div>
  );
}

export default App;
