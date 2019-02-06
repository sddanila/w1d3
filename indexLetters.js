var result = {};

function countLetters(string){
    var workStr = string.toLowerCase().replace(/\s+/g, '');
    for (var i = 0; i < workStr.length; i++){
        var letter = workStr[i];
        if(!result[letter]) {
            result[letter] = [];
            result[letter][0] = i;
        } else {
            result[letter].push(i);
        }
    }
    return result;
}
console.log(countLetters("lighthouse in the house"));


// {
//     l: 1,
//     i: 2,
//     g: 1,
//     h: 4,
//     t: 2,
//     o: 2,
//     u: 2,
//     s: 2,
//     e: 3,
//     n: 1,
// }