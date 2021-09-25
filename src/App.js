import logo from './logo.svg';
import './App.css';
import C1 from './component/component1'
import C2 from './component/component2'
import C3 from './component/component3'
function App() {
  return (
    <>
    <C1/>
        <C2/>
        <div style={{marginTop:"10px"}}></div>
            <C3/>
            </>
  );
}

export default App;
