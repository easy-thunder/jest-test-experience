



export enum PasswordErrors{
    SHORT = "Password needs to be 8 characters or more.",
    NO_UPPER_CASE = "Password needs one upper_case letter.",
    NO_LOWER_CASE = "Password needs one lower_case letter",
    NO_NUMBERS = "At least one number required"
}

export interface CheckResult{
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker{
    public checkPassword(arg: string): CheckResult{

        const reasons: PasswordErrors[]=[];

        this.checkForLength(arg, reasons)
        this.checkForUpperCase(arg, reasons)
        this.checkForLowerCase(arg, reasons)



        return{
            valid: reasons.length > 0 ? false:true,
            reasons: reasons
        }
    }


    public checkAdminPassword(arg: string): CheckResult{
        const basicCheck = this.checkPassword(arg);
        this.checkForAdmin(arg, basicCheck.reasons)

        return {
            valid: basicCheck.reasons.length> 0 ? false : true,
            reasons: basicCheck.reasons}
    }
    
    private checkForLength(arg: string, reasons: PasswordErrors[]){
        if(arg.length<8){
            reasons.push(PasswordErrors.SHORT)
        }
    }
    private checkForUpperCase(arg: string, reasons: PasswordErrors[]){
        if(arg.toLowerCase()===arg){
            reasons.push(PasswordErrors.NO_UPPER_CASE)
        }
    }
    private checkForLowerCase(arg: string, reasons: PasswordErrors[]){
        if(arg.toUpperCase()===arg){
            reasons.push(PasswordErrors.NO_LOWER_CASE)
        }
    }

    private checkForAdmin(arg: string, reasons: PasswordErrors[]){
        const hasNumber = /\d/;
        if(!hasNumber.test(arg)){
            reasons.push(PasswordErrors.NO_NUMBERS)
        }
    }
}


