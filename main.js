previ1="";
previ2="";

Webcam.set({ width:350, height:350, imageFormat:"png", pngQuality:90});
webcam=document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='imgresult'>";
    });
    console.log("ml5version:",ml5.version);
};

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/48rfAjz6L/model.json",modelloaded);
function modelloaded(){
    console.log("modelocarregado");
};

function speak(){
    var speech= window.speechSynthesis;
    var speechInfo="a primeira previsão é"+previ1+"a segunda previsão é"+previ2;
    var juntar= new SpeechSynthesisUtterance(speechInfo);
    speech.speak(juntar);
    console.log("speech");
};

function identify(){
    imgresut = document.getElementById("result");
    classifier.classify(imgresult,gotresult);
};

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("prev1").innerHTML=results[0].label;
        document.getElementById("prev2").innerHTML=results[1].label;
        previ1=results[0].label;
        previ2=results[1].label;
        speak();
    };
    if(results[0].label=="feliz :>"){
        document.getElementById("emoji1").innerHTML="&#128570;";
    };
    if(results[0].label=="triste :<"){
        document.getElementById("emoji1").innerHTML="&#128576;";
    };
    if(results[0].label=="chorando"){
        document.getElementById("emoji1").innerHTML="&#128575;";
    };
    if(results[0].label=="com raiva"){
        document.getElementById("emoji1").innerHTML="&#128574;";
    };

    if(results[1].label=="feliz :>"){
        document.getElementById("emoji2").innerHTML="&#128570;";
    };
    if(results[1].label=="triste :<"){
        document.getElementById("emoji2").innerHTML="&#128576;";
    };
    if(results[1].label=="chorando"){
        document.getElementById("emoji2").innerHTML="&#128575;";
    };
    if(results[1].label=="com raiva"){
        document.getElementById("emoji2").innerHTML="&#128574;";
    };
};