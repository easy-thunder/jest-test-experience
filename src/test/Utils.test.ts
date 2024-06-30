import { toUpperCase, maxInArray, getStringInfo } from "../app/Utils"





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





    it('should return info for a valid string',()=>{

        //arrange
        const string = "Hello everyone";
        const sut= getStringInfo;


        //act
        const actual = sut(string);



        //assert

        expect(actual.lowerCase).toBe('hello everyone');
        expect(actual.upperCase).toBe('HELLO EVERYONE');
        expect(actual.extraInfo).toEqual({});
        expect(actual.characters.length).toBe(14);
        expect(actual.characters).toHaveLength(14);
        expect(actual.characters).toEqual(['H','e','l','l','o',' ','e','v','e','r','y','o','n','e' ]);
        expect(actual.characters).toEqual(
            expect.arrayContaining(['H','e','l','l','o',' ','e','v','e','r','y','o','n','e'])

        )
        expect(actual.characters).toContain<string>('H')
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy()









    })

})








