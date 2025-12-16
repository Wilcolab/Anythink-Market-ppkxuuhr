/**
 * Converts a string to camelCase.
 * @param {string} str - The input string.
 * @returns {string} - The camelCase version of the string.
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Example usage:
console.log(toCamelCase("Prompt Engineering")); // Output: promptEngineering
console.log(toCamelCase("hello world")); // Output: helloWorld
console.log(toCamelCase("convert THIS to camelCase")); // Output: convertThisToCamelCase