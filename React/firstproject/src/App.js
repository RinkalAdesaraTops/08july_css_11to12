import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import { Fragment } from 'react/jsx-runtime';

function App() {
  let name="abc"
  var age=25
  const salary = 56000
  const disp = ()=>{
    alert("Hiii...........")
  }
  return (
    // jsx - javascript & xml
    // <React.Fragment>
    // <Fragment>
    <>
    <div>     
      <h3>My First React Project</h3>
      <h4>Name is -- {name}</h4>
      <h4>Age is -- {age}</h4>
      <h4>Salary is -- {salary}</h4>
      <button onClick={disp}>Add</button>
    </div>
    <div>
      <Firstcomponent />
    </div>
    </>
    // </Fragment>
    // {/* </React.Fragment> */}
    
  );
}

export default App;
