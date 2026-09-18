/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //create 2 pointers p & q 
    //if x < 0 return false
    // while loop  : if p == q -> true else : false
    if (x < 0) return false;
    let p = 0;
    let str = x.toString();
    let q = str.length - 1;
   
    


    while (p < q) {

        if (str[p] !== str[q]){
            return false;
    }
    
        p++;
        q--;
}   
    return true;

}; 



