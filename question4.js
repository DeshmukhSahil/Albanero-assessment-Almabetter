// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"


function largestNumber(nums){
    const numStrings=nums.map(String);
    
    numStrings.sort((a,b)=>{
        const order1=a+b;
        const order2=b+a;
        
        if(order1>order2)return -1;
        else return 0;
    })
    if(numStrings[0]==='0')return '0';
    
    return numStrings.join('');
}
const result=largestNumber([10,2])
console.log(result);//210
const result1=largestNumber([3,30,34,5,9]);
console.log(result1);//9534330