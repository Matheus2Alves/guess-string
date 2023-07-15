function validarStrings(string1, string2) {
    const caracteres1 = Array.from(string1);
    const caracteres2 = Array.from(string2);
  
    const caracteresIncorretos = [];
    const caracteresForaOrdem = [];
    const caracteresCorretos = [];
  
    for (let i = 0; i < caracteres1.length; i++) {
      if (caracteres1[i] !== caracteres2[i]) {
        caracteresIncorretos.push(caracteres1[i]);
      } else {
        if (i !== string2.indexOf(caracteres1[i])) {
          caracteresForaOrdem.push(caracteres1[i]);
        } else {
          caracteresCorretos.push(caracteres1[i]);
        }
      }
    }
  
    console.log('Caracteres incorretos:', caracteresIncorretos);
    console.log('Caracteres fora de ordem:', caracteresForaOrdem);
    console.log('Caracteres corretos:', caracteresCorretos);
  }
  
  // Exemplo de uso
  const string1 = 'casa';
  const string2 = 'caso';
  validarStrings(string1, string2);
  