/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans='';
    let controll=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            if(controll>0){
                ans+=s[i];
            }
            controll++;
        }else{
            controll--;
            if(controll>0){
                ans+=s[i];
            }
        }
    }
    return ans
};