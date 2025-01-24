// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amor mío, faro que guía mi ser,", time: 10 },
  { text: "Tu risa es melodía que quiero siempre tener.", time: 18 },
  { text: "Tus ojos, dos estrellas que el cielo prestó,", time: 27 },
  { text: "En ellos me pierdo, en su luz, mi sol.", time: 30 },
  { text: "Tu piel, caricia de seda y miel,", time: 36 },
  { text: "Tacto divino que el alma enciende con él.", time: 41 },
  { text: "Eres mi primavera, flor que nunca marchita,", time: 47 },
  { text: "El aire que respiro, mi paz infinita.", time: 54 },
  { text: "Cada palabra tuya es dulce canción,", time: 59 },
  { text: "En cada susurro encuentro mi razón.", time: 67 },
  { text: "Tu voz, río sereno que calma mi tormenta,", time: 72 },
  { text: "Tu amor, refugio donde mi corazón se sustenta.", time: 78 },
  { text: "Tu sonrisa es un amanecer que no quiero olvidar,", time: 83 },
  { text: "En sus destellos encuentro motivos para soñar.", time: 91 },
  { text: "Eres el lienzo donde pinto mis días,", time: 97 },
  { text: "El sueño constante, mi mayor fantasía.", time: 104 },
  { text: "Tus manos, abrigo de un invierno perdido,", time: 108 },
  { text: "Tu abrazo, hogar al que siempre he querido.", time: 144 },
  { text: "Eres mi luna en la noche estrellada,", time: 148 },
  { text: "Mi razón para luchar, mi victoria soñada.", time: 153 },
  { text: "Amarte es un viaje sin miedo ni fin,", time: 158 },
  { text: "Es saber que contigo el mundo es más feliz.", time: 164 },
  { text: "Eres verso, eres rima, eres arte sin igual,", time: 169 },
  { text: "El poema perfecto que el universo quiso regalar.", time: 176 },
  { text: "Te amo, mi vida, con cada latido,", time: 183 },
  { text: "Gracias por existir, por estar conmigo.", time: 188 },
  { text: "ATTE: Tu amor eterno.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);