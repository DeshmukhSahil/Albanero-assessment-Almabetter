// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]
// Example 2:
// Input - 1500
// reversed Integre - 51
// prime factors of 51 are 3 and 17
// output - Yes - [3, 17]
// Example 3:
// Input - 1000
// reversed Integre - 1
// There are no prime factors for 1
// output - No




function reverseAndCheckPrimeFactors(input){
    function isPrime(num){
        if(num<=1)return false;
        if(num<=3)return true;
        
        if(num%2===0||num%3===0)return false;
        
        let i=5;
        while(i*i<=num){
            if(num%i===0||num%(i+2)===0)return false;
            i+=6;
        }
        return true;
    }
    let reversed=0;
    while(input>0){
        const digit=input%10;
        reversed=reversed*10+digit;
        input=(input-digit)/10;
    }
    // prime factors
    const factors=[];
    for (let i=2;i<=Math.sqrt(reversed);i++){
        while(reversed%i===0&& isPrime(i)){
            factors.push(i);
            reversed/=i;
        }
    }
    if(reversed>1&& isPrime(reversed)){
        factors.push(reversed);
    }
    if(factors.length>0){
        return `Yes-[${factors.join(',')}]`;
    }else{
        return `NO`;
    }
}

const result=reverseAndCheckPrimeFactors(123);
console.log(result);//Yes-[3,107] 

const result1=reverseAndCheckPrimeFactors(1500);
console.log(result1);//Yes-[3,17] 

const result2=reverseAndCheckPrimeFactors(1000);
console.log(result2);//NO


