import logo from './logo.svg';
import './App.css';
import Ex01Lifecycle from "./ex05-lifecycle/Ex01Lifecycle"
import Ex02Lifecycle from "./ex05-lifecycle/Ex02Lifecycle"
import Ex02ParentComponent from './ex05-lifecycle/Ex02ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Ex01Lifecycle /> */}
      {/* <Ex02Lifecycle /> */}
      <Ex02ParentComponent />
    </div>
  );
}

export default App;

