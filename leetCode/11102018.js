var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let openClose = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let last = stack[stack.length - 1];
        if (Object.keys(openClose).includes(curr)) {
            stack.push(curr);
        } else if (openClose[last] === curr) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
};
