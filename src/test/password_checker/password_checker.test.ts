
import { PasswordChecker, PasswordErrors } from "../../app/password_checker/password_checker";




describe('PasswordChecker test suite',()=>{
    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker
    })

    it('Should return false with reason that password is too short',()=>{
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })
    it('Should return false because there is no upper case',()=>{
        const actual = sut.checkPassword('llllllllllllllllll');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it('Should return false because there is no lower case',()=>{
        const actual = sut.checkPassword('LLLLLLLLLLLLLLLLLLLLLLLLLLL');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })


    it('should return false for not having a number',()=>{
        const actual = sut.checkAdminPassword('kosdkasfpakslf')
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBERS)
    })
    it('should return true for  having a number',()=>{
        const actual = sut.checkAdminPassword('kosdkasfEa3kslf')
        expect(actual.valid).toBe(true);
    })



    
    
    it('should check if password has at least 8 characters',()=>{
        const actual = sut.checkPassword('Akdfk39e39i2');
        expect(actual.valid).toBe(true)
    })
})


