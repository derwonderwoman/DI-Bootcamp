function isAnagram(string1,string2){
    const str1 = string1.toLowerCase().split(" ").join("");
    const str2 = string2.toLowerCase().split(" ").join("");
    if(str1.length !== str2.length){
        return false;
    }
    const total1 = {};
    const total2 = {};
    for (const letter in string1){
        if(total1[letter] !== null){
            total1[letter] ++;
        }
        else {
            total1[letter] = 1;
        }
    }

    for (const letter in string2){
        if(total2[letter] !== null){
            total2[letter] ++;
        }
        else {
            total2[letter] = 1;
        }
    }

    for(const key in total1){
        if(total1[key] !== total2[key]){
            return false;
        }
    }
    return true;
}

const result = isAnagram("low","owl");
console.log(result);