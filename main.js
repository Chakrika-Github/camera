var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content=="take my selfie"){
        console.log('taking selfie');
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var saythis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(saythis);
    console.log("speak");
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
}) ;

function takeSnapshot(){
    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML='<img id= "selfie" src="'+ data_uri + ' ">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image; 
    link.click();
    console.log("speak");
}