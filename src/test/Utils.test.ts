import { toUpperCase, maxInArray, getStringInfo, StringUtils } from "../app/Utils"











describe('Utils test suite', () => {



describe('StringUtils tests',(()=>{

    let sut: StringUtils;

beforeEach(()=>{
    sut = new StringUtils();

})


afterEach(()=>{
    // clearing mocks
    console.log('hi')
})

    it('Should return correct uppercase',()=>{

        const actual = sut.toUpperCase('abc');

        expect(actual).toBe("ABC")
    })
    
    
    
    it('Should return error invalid argument',()=>{
        
        expect(()=>{
            sut.toUpperCase('')
        }).toThrowError('Invalid arg!')
    })
    it('Should return error invalid argument',()=>{
        try{
            sut.toUpperCase('');
            fail('GetStringInfo should throw error for invalid arg!')
        }catch(err){
            expect(err).toBeInstanceOf(Error);
            expect(err).toHaveProperty('message','Invalid arg!');
        }
    })
    
    
}))













    it.each([
        { input: 'klsakjlf', expected: "KLSAKJLF"},
        { input: 'ka;lasjflkjs', expected: "KA;LASJFLKJS" },
        { input: 'ksoofpaD', expected: "KSOOFPAD" },
        { input: 'UPPERCAsE', expected: "UPPERCASE" },


    ])('should return uppercase of $expected', ({input, expected}) => {

        //arrange;
        // const expected = "ABC";
        const sut = toUpperCase;

        //act:
        const actual = sut(input);



        //assert:
        expect(actual).toBe(expected);
    })



    it('should return the largest number in the array(33)', () => {

        //arrange
        const arr: Array<number> = [3, 1, -4, 0, 33]
        const sut = maxInArray

        //act
        const actual = sut(arr);


        //assert
        expect(actual).toBe(33)
    })





    it('should return info for a valid string', () => {

        //arrange
        const string = "Hello everyone";
        const sut = getStringInfo


        //act
        const actual = sut(string);



        //assert

        expect(actual.lowerCase).toBe('hello everyone');
        expect(actual.upperCase).toBe('HELLO EVERYONE');
        expect(actual.extraInfo).toEqual({});
        expect(actual.characters.length).toBe(14);
        expect(actual.characters).toHaveLength(14);
        expect(actual.characters).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']);
        expect(actual.characters).toEqual(
            expect.arrayContaining(['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e'])

        )
        expect(actual.characters).toContain<string>('H')
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy()









    })

})








