// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false


function canBeSegmented(s, wordArray){
    const wordSet=new Set(wordArray);
    
    const isSegmentable=new Array(s.length+1).fill(false);
    
    isSegmentable[0]=true;
    
    for(let end=1; end<=s.length; end++){
        
        for(let start=0; start<end; start++){
            if (isSegmentable[start]&& wordSet.has(s.substring(start,end))){
                isSegmentable[end]=true;
                break;
            }
        }
    }
    return isSegmentable[s.length];
}

const result=canBeSegmented("leetcode", wordArray = ["leet","code"]);
console.log(result);//true

const result1=canBeSegmented("applepenapple", wordArray = ["apple","pen"]);
console.log(result1);//true

const result2=canBeSegmented("catsandog", wordArray = ["cats","dog","sand","and","cat"])
console.log(result2);//false