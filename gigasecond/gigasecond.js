//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  
  const gs = 1e9;  // 10^9 seconds
  return new Date(date.getTime() + gs * 1000);


};
