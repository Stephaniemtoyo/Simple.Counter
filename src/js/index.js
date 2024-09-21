//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType  from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return(<div className="BigCounter">
        <div className="Contador">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
    </div>
        <div className="seis">{props.digitSeis % 10}</div>
        <div className="cinco">{props.digitCinco % 10}</div>
        <div className="cuatro">{props.digitCuatro % 10}</div>
        <div className="tres">{props.digitTres % 10}</div>
        <div className="dos">{props.digitDos % 10}</div>
        <div className="uno">{props.digitUno % 10}</div>
    </div>);
}

SimpleCounter.propTypes = {
    digitSeis: PropType.number,
    digitCinco: PropType.number,
    digitCuatro: PropType.number,
    digitTres: PropType.number,
    digitDos: PropType.number,
    digitUno: PropType.number
};

let Contador = 0;
setInterval(function(){
    const seis = Math.floor(Contador/100000);
    const cinco = Math.floor(Contador/10000);
    const cuatro = Math.floor(Contador/1000);
    const tres = Math.floor(Contador/100);
    const dos = Math.floor(Contador/10);
    const uno = Math.floor(Contador/1);
    console.log(seis, cinco, cuatro, tres, dos, uno);
    Contador++;
//render your react application
ReactDOM.render(<SimpleCounter digitUno={uno} digitDos={dos} digitTres={tres} digitCuatro={cuatro} digitCinco={cinco} digitSeis={seis} />, document.querySelector("#app")
);
},1000);
