import { toUpperCase, maxInArray } from "../app/Utils"





describe('Utils test suite',()=>{

    test('should return uppercase',()=>{
        const result = toUpperCase('abc');
        expect(result).toBe('ABC');
    })
    


    test('should return the largest number in the array(33)',()=>{
        const arr:Array<number> = [3,1,-4,0,33]
        const result = maxInArray(arr);
        expect(result).toBe(33)
    })

})




