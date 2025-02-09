ArvudeSummaArray

const numbers = [7, 2, 8, 4, 6, 7, 8, 9, 11];
answer = 0;

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    answer += numbers[i];
}

console.log("Numbers " + numbers + " added up = " + answer);