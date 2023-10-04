const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (!text || text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //const characters = text.length
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const onlyCharacters = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
    return onlyCharacters.length;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regexNumbers = /\b((\d+[.,]\d+)|\d+)\b/g;
    const numbers = text.match(regexNumbers);
    if (numbers === null) {
      return 0;
    }
    return numbers.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    const regexNumbers = /\b((\d+[.,]\d+)|\d+)\b/g; ///[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;
    const matches = text.match(regexNumbers);
    if (matches !== null) {
      const numberMatch = matches.length;
      for (let i = 0; i < numberMatch; i++) {
        const numbers = parseFloat(matches[i]);
        if (!isNaN(numbers)) {
          sum += numbers;
        }
      }
    }
    return sum;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    if (words.length === 0) {
      console.log(words.length);
      return 0;
    } else {
      const sumLength = words.reduce((total, word) => total + word.length, 0);
      console.log(sumLength);
      const averageLength = sumLength / words.length;
      return parseFloat(averageLength.toFixed(3));
    }
  },
};

export default analyzer;
