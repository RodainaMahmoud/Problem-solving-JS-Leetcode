/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  //start from the last number in array from right 
  //check if number less than 9 -> increment by 1 and return array
  //if number = 9 -> return zero and add 1 to the begining of the array then return the array

for (let i = digits.length-1 ; i >= 0 ; i--){
    if (digits[i] < 9 ){
        digits[i]++ ;
        return digits;

    }
    digits[i] = 0;
}
  digits.unshift(1);
  return digits;



    
};