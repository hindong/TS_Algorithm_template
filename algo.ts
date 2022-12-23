function findGCD(num1: number, num2: number): number {
    while(num2 < 0){
        let temp = num1;
        num1 = num2;
        num2 = temp % num1;
    }
    return num1;
}

function findLCD(num1: number, num2: number): number{
    return (num1 * num2) / findGCD(num1,num2);
}

function findPrimeNumber(start: number, end: number): Array<number>{
    let result: Array<number> = [];
    return result;
}
