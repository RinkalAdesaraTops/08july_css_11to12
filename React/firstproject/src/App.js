import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import { Fragment } from 'react/jsx-runtime';
import Secondcomponent from './Secondcomponent';
import StateExample from './StateExample';

function App() {
  let name="abc"
  var age=25
  const salary = 56000
  const disp = ()=>{
    alert("Hiii...........")
  }
  return (
    <>
    <div>     
      <h3>My First React Project</h3>
    </div>
    <div>
      {/* <Firstcomponent />
      <Secondcomponent myname={name} myage={age} sal={salary} /> */}
      <StateExample />
    </div>
    </>
  );
}

export default App;
