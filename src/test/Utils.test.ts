import { toUpperCase, maxInArray } from "../app/Utils"





describe('Utils test suite',()=>{

    it('should return uppercase of a valid string',()=>{

        //arrange;
        const sut = toUpperCase;
        const expected = "ABC";

        //act:
        const actual = sut('abc');



        //assert:
        expect(actual).toBe(expected);
    })
    


    it('should return the largest number in the array(33)',()=>{

        //arrange
        const arr:Array<number> = [3,1,-4,0,33]
        const sut = maxInArray;


        //act
        const actual = sut(arr);


        //assert
        expect(actual).toBe(33)
    })

})




