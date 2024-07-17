import logo from './logo.svg';
import './App.css';
import Ex01Hello from './ex01-jsx/Ex01Hello';
import Ex02Hello from './ex01-jsx/Ex02Hello';
import Ex03Hello from './ex01-jsx/Ex03Hello';
import Ex04Hello from './ex01-jsx/Ex04Hello';

function App() {
  return (
    <div className="App">
      <Ex01Hello who="01 홍길동" />
      <Ex02Hello who="02 홍길동" />
      <Ex03Hello who="03 이순신" />
      <Ex04Hello who="04 이순신" />
    </div>
  );
}

export default App;
