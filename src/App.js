import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-link">
          <li>
            <span>Github</span>
            <br/>
            <a href="https://github.com/akiorange/">akiorange</a>
          </li>
          <li>
            <span>卒業論文</span>
            <br/>
            <a href="./thesis.pdf">PDF</a>
          </li>
          <li>
            <span>卒論の実験用サイトのRuby on Railsアプリ</span>
            <br/>
            <a href="http://tesu.tk/">http://tesu.tk</a>
            <span> : </span>
            <a href="https://github.com/akiorange/first-rails-app/">Github repo</a>
          </li>
          <li>
            <span>練習用のReactアプリ</span>
            <br/>
            <a href="https://akiratest.tk/">https://akiratest.tk</a>
            <span> : </span>
            <a href="https://github.com/akiorange/first-react-app/">Github repo</a>
          </li>
          <li>
            <span>"Introduction to Computer Science" by Microsoft and Edx</span>
            <br/>
            <a href="https://credentials.edx.org/credentials/4a9d5ebc8e98494bb2e76fe7e5711381/">証明書</a>
          </li>
          <li>
            <span>"Building Prototypes with JavaScript and Node.js" by Microsoft and Edx</span>
            <br/>
            <a href="https://credentials.edx.org/credentials/5c33a8e738de45bfb7e55ad5f546f14c/">証明書</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
