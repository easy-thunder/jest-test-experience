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




