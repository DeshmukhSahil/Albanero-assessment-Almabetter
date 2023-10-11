// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34


function findKthLargest(nums,k){
    
    function partition(start,end){
        const pivot=nums[end];
        let i=start-1;
        
        for(let j=start; j<end; j++){
            if (nums[j]>=pivot){
                i++;
                [nums[i],nums[j]]=[nums[j],nums[i]];
            }
        }
        [nums[i+1],nums[end]]=[nums[end],nums[i+1]];
        return i+1;
    }
    function quickSelect(start,end,k){
        if(start<=end){
            const partitionIndex=partition(start,end);
            
            if(partitionIndex===k){
                return nums[partitionIndex];
            }else if(partitionIndex<k){
                return quickSelect(partitionIndex+1,end,k);
            }else{
                return quickSelect(start,partitionIndex-1,k);
            }
        }
    }
    k==nums.length-k;
    
    return quickSelect(0,nums.length-1,k);
}

const result= findKthLargest([10,4,12,9,87,34], K = 2)
console.log(result)//12