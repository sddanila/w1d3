var result = {};
var letterCount = 0;

function countLetters(string){
    var workStr = string.toLowerCase().replace(/\s+/g, '');
    for (var i = 0; i < workStr.length; i++){
        var letter = workStr[i];
        if(!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter] += 1;
        }
    }
    console.log(result);
// convert string
// take out each letter
    // make sure each is taken out only once
// count instances of letter
// add to object

}
countLetters("lighthouse in the house");
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