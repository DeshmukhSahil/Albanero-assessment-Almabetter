// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


function groupAnagrams(strs){
    const anagramGroups={};
    
    function sortString(str){
        return str.split('').sort().join('');
    }
    for(const word of strs){
        const sortedWord= sortString(word);
    
    if(anagramGroups.hasOwnProperty(sortedWord)){
        anagramGroups[sortedWord].push(word);
    }else{
        anagramGroups[sortedWord]=[word];
    }
    }
    
    const result=Object.values(anagramGroups);
    
    return result;
}

const example1=groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(example1);//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

const example2=groupAnagrams([""]);
console.log(example2);//[ [ '' ] ]

const example3=groupAnagrams(["a"])
console.log(example3);//[ [ 'a' ] ]