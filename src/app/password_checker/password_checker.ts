



export enum PasswordErrors{
    SHORT = "Password needs to be 8 characters or more.",
    NO_UPPER_CASE = "Password needs one upper_case letter.",
    NO_LOWER_CASE = "Password needs one lower_case letter"  
}

export interface CheckResult{
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker{
    public checkPassword(arg: string): CheckResult{

        const reasons: PasswordErrors[]=[];

        if(arg.length<8){
            reasons.push(PasswordErrors.SHORT)
        }
        if(arg.toLowerCase()===arg){
            reasons.push(PasswordErrors.NO_UPPER_CASE)
        }
        if(arg.toUpperCase()===arg){
            reasons.push(PasswordErrors.NO_LOWER_CASE)
        }

        return{
            valid: reasons.length > 0 ? false:true,
            reasons: reasons
        }
    }


}



