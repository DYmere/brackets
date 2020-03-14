module.exports = function check(str, bracketsConfig) {
  let dict_brackets = {};
  let stack = [];
  let arr = str.split("");
  bracketsConfig.forEach(x => dict_brackets[x[0]]=x[1]);
  for (let i of arr) {
    if (i in dict_brackets && i != dict_brackets[i]) {
      stack.push(i);
    }
    else if (i == dict_brackets[i]) {
      if (i == stack[stack.length-1] && stack.length != 0) {
        stack.pop();
      }
      else {
        stack.push(i);  
      }
    }
    else {
      if (dict_brackets[stack[stack.length-1]] == i) {
        stack.pop();
      }
      else {
        return false; 
      };
    };
  };
  return stack.length ? false : true;
};
