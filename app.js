let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.net', '.com', '.es', '.io', '.us'];

function domainGenerator(arr, arr2, arr3, arr4){
    for (var i = 0;  i < arr.length; i++){
        for (var j = 0; j < arr2.length; j++){
           for (var k = 0; k < arr3.length; k++){
                for (var n = 0; n < arr4.length; n++){
                    console.log(arr[i] + arr2[j] + arr3[k]+ arr4[n]);
                }
           }
        }
    }
}
console.log(domainGenerator(pronoun, adj, noun, extension));

