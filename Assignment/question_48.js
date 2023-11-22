// Design a function that reverses a given string (e.g., "hello" becomes "olleh").
function reverseString(str) 
{
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
var result= reverseString("hello");
console.log(result)

