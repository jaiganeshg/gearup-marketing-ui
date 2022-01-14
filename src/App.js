// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import QuestionBar from './components/QuestionBar';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="qyun-answers">
          Qyun answers in: हिन्दी •  বাংলা • తెలుగు •  मराठी • தமிழ் •  ગુજરાતી • ಕನ್ನಡ • മലയാളം •  ਪੰਜਾਬੀ
        </div>
          <video controls>
            <source src="globe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <QuestionBar />
        {/* <TodoContainer /> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
