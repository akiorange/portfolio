import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link">
          <ul >
            <li>
              <span>履歴書</span>
              <br/>
              <a href="./resume-japanese-plain.pdf">PDF</a>
            </li>
            <li>
              <span>Github</span>
              <br/>
              <a href="https://github.com/akiorange/">akiorange</a>
            </li>
            <h2>学歴</h2>
            <li>
              <span>多摩大学グローバルスタディーズ学部 (04/2014–03/2019)</span>
              <br/>
              <a href="https://www.tama.ac.jp/">https://www.tama.ac.jp</a>
            </li>
            <li>
              <span>ILAC (カナダの語学学校) (04/2017 01/2018)</span>
              <br/>
              <a href="https://www.ilac.com/">https://www.ilac.com</a>
            </li>
            <h2>資格</h2>
            <li>
              <span>TOEIC IPテスト 865点 (04/2018)</span>
              <br/>
              <a href="./toeic.pdf">PDF</a>
            </li>
            <li>
              <span>"Introduction to Computer Science" by Microsoft and Edx (06/2019)</span>
              <br/>
              <a href="https://credentials.edx.org/credentials/4a9d5ebc8e98494bb2e76fe7e5711381/">Web証明書</a>
            </li>
            <li>
              <span>"Building Prototypes with JavaScript and Node.js" by Microsoft and Edx (09/2019)</span>
              <br/>
              <a href="https://credentials.edx.org/credentials/5c33a8e738de45bfb7e55ad5f546f14c/">Web証明書</a>
            </li>
            <h2>経験</h2>
            <li>
              <span>卒業論文 (02/2019)</span>
              <br/>
              <a href="./thesis.pdf">PDF</a>
            </li>
            <li>
              <span>卒論の実験用サイトのRuby on Railsアプリ (08/2018)</span>
              <br/>
              <a href="http://tesu.tk/">http://tesu.tk</a>
              <span> : </span>
              <a href="https://github.com/akiorange/first-rails-app/">Github repo</a>
            </li>
            <li>
              <span>練習用のReactアプリ (12/2019)</span>
              <br/>
              <a href="https://akiratest.tk/">https://akiratest.tk</a>
              <span> : </span>
              <a href="https://github.com/akiorange/first-react-app/">Github repo</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
