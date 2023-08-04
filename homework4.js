//  1. String includes

function strIncludes(str, item) {
    for (let i = 0; i < str.length; i++) {
        if (item === str[i]) {
            return true
        }
    }
    return false
}
strIncludes('Alex', 'x') // true
strIncludes('Alex', 'p') // false


// 2.Array includes 

function arrIncludes(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return true
        }
    }
    return false
}
arrIncludes([1, 2, 3, 4, 5, 6], 1) // true
arrIncludes([1, 2, 3, 4, 5, 6], 8)  // false


// 3. String indexOf 

function strIndexOF(str, index) {
    for (let i = 0; i < str.length; i++) {
        if (index === str[i]) {
            return i
        }
    }
    return -1
}
strIndexOF('Alex', 'e') // 2
strIndexOF('Alex', 'p') // -1


// 4. Array indexOf

function arrIndexOF(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (index === arr[i]) {
            return i
        }
    }
    return -1
}
arrIndexOF([1, 2, 3, 4, 5, 6], 5) // 4
arrIndexOF([1, 2, 3, 4, 5, 6], 10) // -1


// 5. Array splice 

function arrSplice(arr, start, end) {
    start = start || 0;
    end = end || arr.length;
    const newArrSplice = [];
    for (let i = start; i < end; i++) {
        newArrSplice.push(arr[i])
    }
    return newArrSplice
}
arrSplice([1, 2, 3, 4, 5, 6], 2, 4) // [3,4]
arrSplice([1, 2, 3, 4, 5, 6], 3) // [4,5,6]


// 6. replace 

function replaceStr(str, a, b) {
    return str.split(a).join(b);
  }
replaceStr('hello world' , 'hello' ,'hi')// (not matchs requirement)