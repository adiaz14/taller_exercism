import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    describe ('black',()=>{
      test('Black LowerCase', () => {
        expect(colorCode('black')).toEqual(0);
      });
  
      test('Black UpperCase', () => {
        expect(colorCode('Black')).toEqual(0);
      });
    });
    describe('white',()=>{
      test('White LowerCase', () => {
        expect(colorCode('white')).toEqual(9);
      });
  
      test('White UpperCase', () => {
        expect(colorCode('White')).toEqual(9);
      });
    });
    describe('brown', ()=>{
      test('brown LowerCase', () => {
        expect(colorCode('brown')).toEqual(1);
      });
  
      test('brown UpperCase', () => {
        expect(colorCode('Brown')).toEqual(1);
      });

    });

    test('Orange LowerCase', () => {
      expect(colorCode('orange')).toEqual(3);
    });

    test('Orange UpperCase', () => {
      expect(colorCode('Orange')).toEqual(3);
    });
    
    test('Yellow LowerCase', () => {
      expect(colorCode('yellow')).toEqual(4);
    });
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
