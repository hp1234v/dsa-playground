function reverseString(str) {
    // Step 1. Use split() to create an array of characters
    const splitString = str.split("");
    // Step 2. Reverse the array
    const reverseArray = splitString.reverse();
    // Step 3. Join the reversed array back into a string
    const joinArray = reverseArray.join("");
    // Step 4. Return the reversed string
    return joinArray;
}

module.exports = reverseString
