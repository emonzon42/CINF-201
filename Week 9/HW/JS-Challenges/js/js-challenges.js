//1)
console.log(4 < 5);
console.log(6 > 3);
console.log(0 == 0);

//2)
for (let i = 1; i < 101; i++) {
    if (i % 5 == 0) {
        console.log('Multiple of 5');
    } else {
        console.log(i);
    }
    
}
//3)
j = 1
while (j < 101) {
    if (j % 5 == 0) {
        console.log('Multiple of 5');
    } else {
        console.log(j);
    }
    j++;
}

//4)
var myAge =21
var myName ='Eli'
alert('My name is ' + myName+ ' and I am '+ myAge +' years old')

//5)
var userAge = prompt('What is your age?', '');
while (userAge * 0 != 0) { //to make sure entry is a number
    var userAge = prompt('What is your age?', '');
}
if (userAge >= 21) {
    alert('You are old enough to drink.')
} else {
    alert('No alcohol for you')
}

//6)
var numberAdder = function(){
    var result = 0;
    for (let i = 1; i < 101; i++) {
        result += i;
    }

    console.log(result);
}
numberAdder();

//7)
var boxVolume = function(length, width, height){
    let volume = length*width*height;
    console.log('Volume of your box is ' + volume);
}
boxVolume(5,5,5);