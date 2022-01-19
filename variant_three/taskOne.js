/*Вариант 3*/

/*Реализовать функцию, которая принимает массив строк и удаляет все последовательные повторяющиеся буквы из каждой строки в массиве. 
Строки должны быть только строчными, без пробелов.*/


/*Пример*/ 

//dup(["abracadabra","allottee","assessee"]) 
// -> ["abracadabra","alote","asese"] 

//dup(["kelless","keenness"]) 
// -> ["keles","kenes"]


/*Дополнительные тесты*/ 

//dup([ "ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo" ]) 
// -> ['codewars','picaniny','hubububo'] 

//dup(["abracadabra","allottee","assessee"]) 
// -> ['abracadabra','alote','asese'] 

//dup(["kelless","keenness"]) 
// -> ['keles','kenes'] 

//dup(["adanac","soonness","toolless","ppellee"]) 
// -> ['adanac','sones','toles','pele'] 

//dup(["callalloo","feelless","heelless"]) 
// -> ['calalo','feles','heles'] 

//dup(["kelless","voorraaddoosspullen","achcha"]) 
// -> ['keles','voradospulen','achcha']


// Решение:

function removeDuplicates(s) {
    let n = s.length;
    let str = "";
    
    if (n == 0)
        return str;
  
    for (let i = 0; i < n - 1; i++) {       
        if (s[i] != s[i + 1]) {
            str += s[i];
        }
    }
         
    str += s[n-1];
    
    return str;
}

module.exports.dup = function dup(stringArray) {
    var newArray = [];
    
    // Loop through array values
    for(i = 0; i < stringArray.length; i++) {
        let str = removeDuplicates(stringArray[i]);
        newArray.push(str);
    }
    return newArray;
}