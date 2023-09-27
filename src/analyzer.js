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
  

};

export default analyzer;
