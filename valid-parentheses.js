/**
 * @Question :-
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
        * Open brackets must be closed by the same type of brackets.
        * Open brackets must be closed in the correct order.
* Example 1:
        Input: s = "()"
        Output: true
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [], ch, i;
    for (i = 0; i < s.length; i++) {
        ch = s.charAt(i);

        /*
        Check push conditions
        */
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        }
        else {
            switch (ch) {
                /*
                Check pop conditions 
                */
                case ')':
                    /*
                    notEqual to '('
                    */
                    if (stack.pop() != '(') {
                        return false;
                    }
                    break;
                /*
                notEqual to '['
                */
                case ']':
                    if (stack.pop() != '[') {
                        return false;
                    }
                    break;
                /*
                notEqual to '}'
                */
                case '}':
                    if (stack.pop() != '{') {
                        return false;
                    }
                    break;
            }
        }
    }

    /*
    check the whether is empty or not
    */
    return stack.length > 0 ? false : true;
}

console.log(isValid('{[}{}]}'))