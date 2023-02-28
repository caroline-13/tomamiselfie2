var texto = document.getElementById("textbox");
var reconocerVoz = window.webkitSpeechRecognition;
var reconocimiento = new reconocerVoz();
reconocimiento.lang = "es-MX";
var camera = document.getElementById("camera")
function start() {
    texto.innerHTML = "";
    reconocimiento.start();

}
reconocimiento.onresult = function (evento) {
    console.log(evento);
    var textoDetectado = evento.results[0][0].transcript;
    texto.innerHTML = textoDetectado;
    hablar(textoDetectado);
    if (textoDetectado.toLowerCase() == "toma mi selfie") {
        Webcam.attach(camera);
        setTimeout(function () {
            hablar("tomando foto 1 ");
            num_foto = 1
            tomarFoto()
        }, 5000);
        setTimeout(function () {
            hablar("tomando foto 2 ");
            num_foto = 2
            tomarFoto()
        }, 10000);
        setTimeout(function () {
            hablar("tomando foto 3");
            num_foto = 3
            tomarFoto()
        }, 15000);



    }
}
function hablar(mensaje) {
    var leerEnvozAlta = window.speechSynthesis;
    var lectura = new SpeechSynthesisUtterance(mensaje);
    lectura.lang = "es-MX";
    leerEnvozAlta.speak(lectura);

}
Webcam.set({
    width: 360,
    height: 260,
    image_format: "jpeg",
    jpeg_quality: 90
});
function tomarFoto() {
    Webcam.snap(function (data_uri) {
        if( num_foto ==1){
            document.getElementById("result1").innerHTML = '<img id="foto" src="' + data_uri + '"/>'
        }
        if( num_foto ==2){
            document.getElementById("result2").innerHTML = '<img id="foto" src="' + data_uri + '"/>'
        }
        if( num_foto ==3){
            document.getElementById("result3").innerHTML = '<img id="foto" src="' + data_uri + '"/>'
        }
            
        
    })
}
function guardarFoto() {
    link = document.getElementById("link");
    foto = document.getElementById("foto").src;
    link.href = foto;
    link.click();
}
