import logo from './logo.svg';
import './App.css';
import Ex01useState from './ex06-hooks/Ex01useState';
import Ex02useEffect from './ex06-hooks/Ex02useEffect';
import ParentComponent from './ex06-hooks/ParentComponent';
import Ex03useRef from './ex06-hooks/Ex03useRefVariable';
import Ex03useRefDOM from './ex06-hooks/Ex03useRefDOM';

function App() {
  return (
    <div className="App">
      {/* <Ex01useState /> */}
      {/* <Ex02useEffect /> */}
      {/* <ParentComponent /> */}
      <Ex03useRef />
      <Ex03useRefDOM />
    </div>
  );
}

export default App;

