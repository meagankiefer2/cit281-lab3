/* 
    CIT 281: Lab 3 module
    Name: Meagan Kiefer
*/

// TODO Part 9: Add the reverseString function to the module.exports object
// for import using require()
// TODO Part 10: Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself
module.exports = {
    reverseString,
    concatenateString: function(string) {
        return string + string;
    }
};



// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827
/* function reverseString(str) {
    return str.split("").reverse().join("");
}
*/
function reverseString(str) {
    return [...str].reverse().join('');
}
