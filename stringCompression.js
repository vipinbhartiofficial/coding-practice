const str = "aabcccccaaa";

let compressed = {};

for(let i = 0; i < str.length; i++){
    compressed[str[i]] = compressed[str[i]] + 1 || 1;
}

console.log(compressed);