import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Alyssa Mirra, is{" "}
            <a href="https://github.com/AlyssaM12/dictionary-project">
              {" "}
              open-sourced{" "}
            </a>{" "}
            and hosted on
            <a href="https://stunning-arithmetic-0516f0.netlify.app/">
              {" "}
              Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
