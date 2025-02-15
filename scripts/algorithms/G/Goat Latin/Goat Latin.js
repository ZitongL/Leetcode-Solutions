// Runtime: 123 ms (Top 5.75%) | Memory: 42 MB (Top 87.36%)

var toGoatLatin = function(sentence) {
    let arr = sentence.split(' ')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i=0; i< arr.length; i++) {
        if (vowels.includes(arr[i][0].toLowerCase())) {
            arr[i] = arr[i] + 'ma'
        } else {
            arr[i] = arr[i].substring(1) + arr[i].substring(0,1) + 'ma'
        }

        arr[i] = arr[i] + 'a'.repeat(i+1)
     }

    return arr.join(' ')
};