class Math {
    static power(num, exponent) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= num;
        }
        return result;
    }

    static sqrt(number) {
        if (number < 0) return NaN; 
        let num2 = number / 2;
        for (let i = 0; i < 10; i++) {
            num2 = (num2 + number / num2) / 2;
        }
        return guess;
    }
}

console.log(Math.power(2, 3)); 
console.log(Math.sqrt(25)); 