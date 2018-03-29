// string functions charAt(), charCodeAt(), concat(), endsWith(), includes()

var str = (s) => {
    var mystr = "Hello World";
console.log('prinit the character',s.charAt(3));
console.log('character at particular position',s.charCodeAt(0));
console.log('concatinates strings',s.concat(" Saboji"," Bangalore")); // output: Praveen Saboji Bangalore
console.log('concatinates strings',s.concat([" Saboji"," Bangalore"])); //output: Praveen Saboji, Bangalore
console.log('ends with', mystr.endsWith("World")); // takes string and position , returns true or false
console.log('string of charcode 65 is :',String.fromCharCode(65));


};


str("Praveen");
