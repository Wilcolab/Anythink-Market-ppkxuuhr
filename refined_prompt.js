/**
 * Converts a string to camelCase format.
 * 
 * This function handles various edge cases, including:
 * - Empty strings: Returns an empty string.
 * - Null or undefined inputs: Throws a TypeError.
 * - Non-string inputs: Throws a TypeError.
 * - Strings with multiple spaces: Trims and normalizes spaces.
 * - Strings with punctuation or special characters: Removes them.
 * - Numeric characters: Preserves them in the output.
 * - Mixed casing: Normalizes to camelCase.
 * 
 * @param {string} input - The input string to convert.
 * @returns {string} - The camelCase version of the string.
 * @throws {TypeError} - If the input is not a string.
 * 
 * @example
 * toCamelCase("first name"); // Returns "firstName"
 * toCamelCase("user_id"); // Returns "userId"
 * toCamelCase("SCREEN_NAME"); // Returns "screenName"
 * toCamelCase("mobile-number"); // Returns "mobileNumber"
 * toCamelCase("convert THIS to camelCase"); // Returns "convertThisToCamelCase"
 */
function toCamelCase(input) {
    // Validate input: must be a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace and handle empty strings
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
        return ''; // Return an empty string for empty input
    }

    // Replace non-alphanumeric characters (except spaces) with a space
    const sanitizedInput = trimmedInput.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Split the string into words, removing extra spaces
    const words = sanitizedInput.split(/\s+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Convert the first word to lowercase, others to title case
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Join words without spaces
}

/**
 * Converts a string to dot.case format.
 * 
 * This function handles various edge cases, including:
 * - Empty strings: Returns an empty string.
 * - Null or undefined inputs: Throws a TypeError.
 * - Non-string inputs: Throws a TypeError.
 * - Strings with multiple spaces: Trims and normalizes spaces.
 * - Strings with punctuation or special characters: Removes them.
 * - Numeric characters: Preserves them in the output.
 * - Mixed casing: Normalizes to lowercase with dots separating words.
 * 
 * @param {string} input - The input string to convert.
 * @returns {string} - The dot.case version of the string.
 * @throws {TypeError} - If the input is not a string.
 * 
 * @example
 * toDotCase("first name"); // Returns "first.name"
 * toDotCase("user_id"); // Returns "user.id"
 * toDotCase("SCREEN_NAME"); // Returns "screen.name"
 * toDotCase("mobile-number"); // Returns "mobile.number"
 * toDotCase("convert THIS to dot.case"); // Returns "convert.this.to.dot.case"
 */
function toDotCase(input) {
    // Validate input: must be a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace and handle empty strings
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
        return ''; // Return an empty string for empty input
    }

    // Replace non-alphanumeric characters (except spaces) with a space
    const sanitizedInput = trimmedInput.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Split the string into words, removing extra spaces
    const words = sanitizedInput.split(/\s+/);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.'); // Join words with dots
}

// Example usage and edge cases:
console.log(toCamelCase("first name")); // Output: firstName
console.log(toCamelCase("user_id")); // Output: userId
console.log(toCamelCase("SCREEN_NAME")); // Output: screenName
console.log(toCamelCase("mobile-number")); // Output: mobileNumber
console.log(toCamelCase("convert THIS to camelCase")); // Output: convertThisToCamelCase
console.log(toCamelCase("  multiple   spaces  ")); // Output: multipleSpaces
console.log(toCamelCase("special@characters!")); // Output: specialCharacters
console.log(toCamelCase("123 numbers first")); // Output: 123NumbersFirst
console.log(toCamelCase("")); // Output: (empty string)
console.log(toCamelCase(null)); // Throws TypeError: Input must be a string
console.log(toCamelCase(undefined)); // Throws TypeError: Input must be a string
console.log(toCamelCase(42)); // Throws TypeError: Input must be a string

console.log(toDotCase("first name")); // Output: first.name
console.log(toDotCase("user_id")); // Output: user.id
console.log(toDotCase("SCREEN_NAME")); // Output: screen.name
console.log(toDotCase("mobile-number")); // Output: mobile.number
console.log(toDotCase("convert THIS to dot.case")); // Output: convert.this.to.dot.case
console.log(toDotCase("  multiple   spaces  ")); // Output: multiple.spaces
console.log(toDotCase("special@characters!")); // Output: special.characters
console.log(toDotCase("123 numbers first")); // Output: 123.numbers.first
console.log(toDotCase("")); // Output: (empty string)
console.log(toDotCase(null)); // Throws TypeError: Input must be a string
console.log(toDotCase(undefined)); // Throws TypeError: Input must be a string
console.log(toDotCase(42)); // Throws TypeError: Input must be a string
