const { caesar } = require('../src/caesar.js');
const expect = require('chai').expect;

describe('Caesar Shift', () => {
    it(`(thinkful, 3) should be: wklqnixo`, () => {
      let actual = caesar("thinkful", 3)  
      let expected = 'wklqnixo'
      expect(actual).to.equal(expected)
    })

    it(`(thinkful, -3) should be: qefkhcri`, () => {
        let actual = caesar("thinkful", -3)
        let expected = `qefkhcri`
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, 3, false) should be: thinkful`, () => {
        let actual = caesar("wklqnixo", 3, false)
        let expected = 'thinkful'
        expect(actual).to.equal(expected)
    })

      it(`(This is a secret message!, 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
        let actual = caesar("This is a secret message!", 8);
        let expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    })

    it(`(thinkful) should be: false`, () => {
        let actual = caesar("thinkful")
        let expected = false 
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, 99) should be: false`, () => {
        let actual = caesar("thinkful", 99)
        let expected = false
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, -26) should be: false`, () => {
        let actual = caesar("thinkful", -26)
        let expected = false
        expect(actual).to.equal(expected)
    })
    
    it("should compensate for a negative shift value by shifting left through the alphabet", () => {
      const expected = "qefkhcri"
      const actual = caesar("thinkful", -3);
      expect(actual).to.equal(expected);
    })
    
    it("should compensate for a negative shift value by shifting left through the alphabet", () => {
        const actual = caesar("qefkhcri", -3, false);
        const expected = "thinkful";
      expect(actual).to.equal(expected);
    })
    
    it("should be able to compensate for letters at the end of the alphabet", () => {
       const actual = caesar("cheud pdjdclqh", 3, false);
       const expected = "zebra magazine";
       expect(actual).to.equal(expected);
    });  
          
})





// //it(`should handle all letters at the end of the alphabet`, () => {
//     let actual = caesar("122ebra maga122ine")
//     let expected = 'zebra magazine'
//     expect(actual).to.equal(expected)
//   })