/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      let stack=[];
    for(let i of s){
        if(i==="(" || i==="["|| i==="{" ){
            stack.push(i);
        }else{
            if(!stack.length ||(i===")"&&stack[stack.length-1]!=="(")||
                                (i==="]"&&stack[stack.length-1]!=="[")||
                                (i==="}"&&stack[stack.length-1]!=="{")){
                                    return false
                                }
                  stack.pop();               
        }
    }return !stack.length
};