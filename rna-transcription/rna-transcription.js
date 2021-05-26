//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nu = "") => {
  let cadenalimpia = nu.trim(); //Quitar espacios en blanco a la cadena
  let cadena = Array.from(cadenalimpia); //Convertir cadena en array
  let transc = ""; 
  for (let i = 0; i <= cadena.length; i++) {
    switch (cadena[i]) { //Evaluar cada elemento de la cadena de ADN
      case "G":
        transc = transc.concat("C");
        break;
      case "C":
        transc = transc.concat("G");
        break;
      case "T":
        transc = transc.concat("A");
        break;
      case "A":
        transc = transc.concat("U");
        break;
      default:
        transc = transc.concat("");
        break;
    }
  }
  return transc;
};
