//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planeta_elegido = "earth", edad_segundos = 1000000000) => {
  let anios;
  let orbita_tierra = 31557600;
  let planeta_calculo = planeta_elegido.toLowerCase();
  let resultado = 0;

  switch (planeta_calculo) {
    case "mercury":
      anios = edad_segundos / (0.2408467 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "venus":
      anios = edad_segundos / (0.61519726 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "earth":
      anios = edad_segundos / orbita_tierra;
      resultado = Number(anios.toFixed(2));
      break;
    case "mars":
      anios = edad_segundos / (1.8808158 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "jupiter":
      anios = edad_segundos / (11.862615 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "saturn":
      anios = edad_segundos / (29.447498 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "uranus":
      anios = edad_segundos / (84.016846 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
      break;
    case "neptune":
      anios = edad_segundos / (164.79132 * orbita_tierra);
      resultado = Number(anios.toFixed(2));
  }

  return resultado;
};
