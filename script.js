const list=[]
let mytranscript=""
click_to_record.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            console.log( "_______",e.results.SpeechRecognitionResultList)

        document.getElementById("convert_text").value = transcript;
        mytranscript=transcript
        console.log(transcript);
    });
    
    if (speech == true) {
        recognition.start();
    }
})

 function add(){
    list.push(mytranscript)

 }