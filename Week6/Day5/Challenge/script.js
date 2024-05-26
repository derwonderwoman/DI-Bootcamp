function isAnagram(string1,string2){
    const str1 = string1.toLowerCase().split(" ").join("");
    const str2 = string2.toLowerCase().split(" ").join("");
    if(str1.length !== str2.length){
        return false;
    }
    const total1 = {};
    const total2 = {};
    for (const letter of str1){
        if(total1[letter] !== 0){
            total1[letter] = (total1[letter] || 0) + 1;
    }
}
    console.log(total1);

    for (const letter of str2){
        total2[letter] = (total2[letter] || 0) + 1;
    }
    console.log(total2);

    for(const key in total1){
        if(total1[key] !== total2[key]){
            return false;
        }
    }
    return true;
}

const result = isAnagram("Astronomer","Moon starer");
console.log(result);