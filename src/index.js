import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

// Captura de los elementos del DOM
const textArea = document.querySelector('textarea');
const resetBtn = document.getElementById('reset-button');
const wordCountElement = document.querySelector('li.metric:nth-child(1)');
const charCountElement = document.querySelector('li.metric:nth-child(2)');
const charCountNoSpacesElement = document.querySelector('li.metric:nth-child(3)');
const numbersCountElement = document.querySelector('li.metric:nth-child(4)');
const numberSumElement = document.querySelector('li.metric:nth-child(5)');
const averageWordLengthElement = document.querySelector('li.metric:nth-child(6)');



// Función para actualizar las métricas
function updateMetrics() {
    const text = textArea.value;

  //Invocación métodos del objeto Analyzer

   //Ejemplo: Input: "Hola, devs 0 12 de Laboratoria!" -> Palabras: 6  
    const words = analyzer.getWordCount(text);
    console.log(words)
    //wordCountElement.textContent = analyzer.getWordCount(text);
    wordCountElement.textContent = `Palabras: ${words}`;

   //Ejemplo: Input: "Hola, devs 0 12 de Laboratoria!" -> Caracteres: 31 
    const characters = analyzer.getCharacterCount(text);
    console.log(characters)
    charCountElement.innerHTML = `Caracteres: ${characters}`;

   //Ejemplo: Input: "Hola, devs 0 12 de Laboratoria!" -> Caracteres sin espacios ni signos de puntuación: 24
   const onlyCharCount = analyzer.getCharacterCountExcludingSpaces(text)
    //console.log(onlyCharacters)
    charCountNoSpacesElement.textContent = `Recuento caracteres sin espacios ni signos de puntuación: ${onlyCharCount}` 

    




}

//Evento input en el textArea
textArea.addEventListener('input', updateMetrics);

  
