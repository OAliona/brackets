module.exports = function check(str, bracketsConfig) {
    const array = str.split("");
    const stack = [];

    function isBracket(element) {
        for (let index = 0; index < bracketsConfig.length; index++) {
            if (bracketsConfig[index].indexOf(element) > -1) {
                return true;
            }
        }
        return false;
    }

    function isClosingBracket(element) {
        for (let index = 0; index < bracketsConfig.length; index++) {
            if (bracketsConfig[index][1] === element) {
                return true;
            }
        }

        return false;
    }

    function isPairBracket(open, close) {
        for (let index = 0; index < bracketsConfig.length; index++) {
            if (open === bracketsConfig[index][0]) {
                if (close === bracketsConfig[index][1]) {
                    return true;
                }
            }
        }

        return false;
    }

    array.forEach(function(element) {
        if (isBracket(element)) {
            if (isClosingBracket(element)) {
                const lastBracket = stack[stack.length - 1];

                if (isPairBracket(lastBracket, element)) {
                    stack.pop();
                } else {
                    stack.push(element);
                }
            } else {
                stack.push(element);
            }
        }
    });

    return stack.length === 0;
};
