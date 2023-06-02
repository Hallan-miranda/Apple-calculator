import { useState } from 'react'
import {Box, Container} from '@mui/material';
import "../../styles/Calculadora.css"

export default function Calculadora() {

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState("");
  //Seta os valores e tipo de operação a ser realizada para passar a função result
  const calc = (e) => {
    const captureOperator = e.target.value
    if(captureOperator === "+"){
      setOldNum(num);
      setNum(0);
      setOperator("+");
    }else if(captureOperator ==="-") {
      setOldNum(num);
      setNum(0);
      setOperator("-");
    }else if(captureOperator ==="÷") {
      setOldNum(num);
      setNum(0);
      setOperator("÷");
    }else if(captureOperator ==="x") {
      setOldNum(num);
      setNum(0);
      setOperator( "x");
    }else if(captureOperator ==="%") {
      setNum(num / 100);
    }
  }
  // Alteraso valore positivo para negativo e negativo para positivo
  const changeValue = () =>{
    if(num > 0){
      setNum(-num)
    }else if(num < 0){
      setNum(-num)
    }else{
      setNum(0)
    }
  };
  //  limpa os valores da calculadora
  const clear = () =>{
    setNum(0)
  };
  // Insere os números, valores no dislplay da calculadora 
  const input = (e) =>{
    let numInputed = e.target.value 
    if(num===0){
      setNum(numInputed);
    }else{
      setNum(num + numInputed) ;
    }
  };
  // recebe os valores e tipo de operação e retorna o resultado 
  const result = () =>{
    if(operator === "+"){
      setNum(parseFloat(oldNum) + parseFloat(num));
    }else if(operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    }else if(operator === "÷") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    }else if(operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    };
  }; 
  
  
  return (
    <>
    <Box m={3}> 
    <Container maxWidth="xs">
    <h1 className='display'>{num}</h1>
    <button  className='greyButton' onClick={clear}>AC</button>
    <button value={"+/-"} className='greyButton' onClick={changeValue}>+/-</button>
     <button value={"%"} className='greyButton' onClick={calc}>%</button>
     <button value={"÷"} className='orangeButton' onClick={calc}>÷</button>
     <button value={7} className='normalButton' onClick={input}>7</button>
     <button value={8} className='normalButton' onClick={input}>8</button>
     <button value={9} className='normalButton' onClick={input}>9</button>
     <button value={"x"} className='orangeButton' onClick={calc}>x</button>
     <button value={4} className='normalButton' onClick={input}>4</button>
     <button value={5} className='normalButton' onClick={input}>5</button>
     <button value={6} className='normalButton' onClick={input}>6</button>
     <button value={"-"} className='orangeButton' onClick={calc}>-</button>
     <button value={1} className='normalButton' onClick={input}>1</button>
     <button value={2} className='normalButton' onClick={input}>2</button>
     <button value={3} className='normalButton' onClick={input}>3</button>
     <button value={"+"} className='orangeButton' onClick={calc}>+</button>
     <button value={0} className='zeroButton' onClick={input}>0</button>
     <button value={"."} className='normalButton' onClick={input}>.</button>
     <button value={"="} className='orangeButton' onClick={result}>=</button>
     </Container>
     </Box>
    </>
  )
}