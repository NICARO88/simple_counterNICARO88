import './App.css';
import SecondCounter from './componentes/SecondCounter.js';



function App(props) {
  console.log (props)
  return (
    <div className="App">
     <SecondCounter seconds = {props.seconds}/>
    </div>
  );
}


export default App;
