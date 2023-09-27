const analyzer = {  

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    return words.length
  },
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characters = text.length
    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const onlyCharacters = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '');
    return onlyCharacters.length
  },
  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g);
    if (numbers) {
    return numbers.length;
    } else {
    return 0;
    }
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce((total, numbers) => total + parseInt(numbers, 10), 0);
      return sum;
    } else {
      return 0;
    }
  },
  
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
  },
  

};

export default analyzer;
