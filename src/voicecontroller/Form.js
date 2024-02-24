import React, { Fragment, useState } from 'react'
import './style.css'

export default function Form() {
  const [list,setList]=useState([])
  const [transcript,setTranscript]=useState("")
  const [medicament,setMedicament]=useState("")
  
let mytranscript=""
function record(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            console.log( "_______",e.results.SpeechRecognitionResultList)

        document.getElementById("convert_text").value = transcript;
        setTranscript(transcript);
        setMedicament(transcript)
        console.log(transcript);
    });
    
    if (speech == true) {
        recognition.start();
    }
}

 function add(){
  console.log(list,medicament)
  if (!list.find(m=>m===medicament)){
setList((list)=> [...list,transcript])
  }
  else{
    alert("medicament deja ajouté")
  }
    

 }
function vider(){
  setList((list)=>[])
  setMedicament("")
}

  return (
    <Fragment>
    <div class="voice_to_text">

		<h1> Voice Converter</h1>
    
    <input  id="convert_text" value={medicament}  onChange={(e)=>setMedicament(e.target.value)}></input>
    
    <button  onClick={record}  >Voice To Text</button>
    <button >Print this page</button>
    <button onClick={vider}>new ordonnace </button>
    <button onClick={add}>Add</button>
  </div>
  <div id='print'>
    <ul>
      {list.map((ls,index)=>{
        return(
          <li key={index}>{ls}</li>
        )
      })}
    </ul>
  </div>
  
  </Fragment>
  )
}
