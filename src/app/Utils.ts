




export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}


export function getStringInfo(arg:string): stringInfo{
    return{
        lowerCase: arg.toLocaleLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo:{}
    }
}


export class StringUtils{
    public toUpperCase(arg: string){
        if(!arg){
            throw new Error('Invalid arg!')
        }
        return toUpperCase(arg)
    }
}










export function toUpperCase(arg: string){
    return arg.toUpperCase();
}

















export function maxInArray(arg: Array<number>){


    for(let i = 0; i<arg.length; i++){
        if(arg[0]<arg[i]){
            let temp = arg[0];
            arg[0]=arg[i]
            arg[i]= temp
        }
    }
    return arg[0];
}



// export function reverseArray(arg: Array)




