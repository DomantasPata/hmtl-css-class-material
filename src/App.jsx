import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input';

function App() {
function handleClickButton1(){
  console.log("as esu pirmas mygtukas");
}


function handleClickButtonOther(){
  console.log("Paspaustas ne pirmas mygtukas");
}

  function handleChange(e){
    console.log(e.target.value);
  }

  return (
  <div>
    <Button text = {"mygtukas 1"} onClick={handleClickButton1}/>
    <Button text = {"mygtukas 2"} onClick={handleClickButtonOther}/>
    <Button text = {"mygtukas 3"} onClick={handleClickButtonOther}/>
    <Input id={"pirmasInput"} label={"name"} onChange={handleChange} type={"number"} bigFont={true}/>
    <Input id={"date"} label={"Data"} type={"date"} onChange={(e) => console.log(e.target.value)}/>
  </div>
  )
}

export default App
