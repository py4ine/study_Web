import logo from './logo.svg';
import './App.css';
import Ex01Counter from './ex04-state/Ex01Counter';
import Ex02LikeButton from './ex04-state/Ex02LikeButton';
import Ex03BadCounter from './ex04-state/Ex03BadCounter';
import Ex03BadCounter_re from './ex04-state/Ex03BadCounter_re';
import Ex03Counter from './ex04-state/Ex03Counter';


function App() {
  return (
    <div className="App">
      <Ex01Counter />
      <hr></hr>
      <Ex02LikeButton />
      <hr></hr>
      <Ex03BadCounter />
      <hr></hr>
      <Ex03BadCounter_re />
      <hr></hr>
      <Ex03Counter />
    </div>
  );
}

export default App;
