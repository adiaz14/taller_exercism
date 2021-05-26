//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {

  const LETRAS = "abcdefghijklmnopqrstuvwxyz".split("");
  const TEXTO = str.toLowerCase();
  return LETRAS.every((letra) => TEXTO.includes(letra));

};
