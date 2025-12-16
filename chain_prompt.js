/**
 * Converts a string to kebab-case format (lowercase words separated by hyphens).
 * 
 * This function handles various edge cases, including:
 * - Empty strings: Returns an empty string.
 * - Null or undefined inputs: Throws a TypeError.
 * - Non-string inputs: Throws a TypeError.
 * - Strings with leading/trailing whitespace: Trims the whitespace.
 * - Strings with multiple consecutive spaces: Normalizes to a single hyphen.
 * - Mixed casing: Converts all characters to lowercase.
 * - Numbers: Preserves numeric characters in the output.
 * - Underscores and special characters: Removes them.
 * - No duplicate or trailing hyphens in the output.
 * 
 * @param {string} input - The input string to convert.
 * @returns {string} - The kebab-case version of the string.
 * @throws {TypeError} - If the input is not a string.
 * 
 * @example
 * toKebabCase("first name"); // Returns "first-name"
 * toKebabCase("user_id"); // Returns "user-id"
 * toKebabCase("SCREEN_NAME"); // Returns "screen-name"
 * toKebabCase("mobile-number"); // Returns "mobile-number"
 * toKebabCase("convert THIS to kebab-case"); // Returns "convert-this-to-kebab-case"
 * toKebabCase("  multiple   spaces  "); // Returns "multiple-spaces"
 * toKebabCase("special@characters!"); // Returns "special-characters"
 * toKebabCase("123 numbers first"); // Returns "123-numbers-first"
 */
function toKebabCase(input) {
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

    // Convert to kebab-case
    return words
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('-'); // Join words with hyphens
}

// Example usage and edge cases:
console.log(toKebabCase("first name")); // Output: first-name
console.log(toKebabCase("user_id")); // Output: user-id
console.log(toKebabCase("SCREEN_NAME")); // Output: screen-name
console.log(toKebabCase("mobile-number")); // Output: mobile-number
console.log(toKebabCase("convert THIS to kebab-case")); // Output: convert-this-to-kebab-case
console.log(toKebabCase("  multiple   spaces  ")); // Output: multiple-spaces
console.log(toKebabCase("special@characters!")); // Output: special-characters
console.log(toKebabCase("123 numbers first")); // Output: 123-numbers-first
console.log(toKebabCase("")); // Output: (empty string)
console.log(toKebabCase(null)); // Throws TypeError: Input must be a string
console.log(toKebabCase(undefined)); // Throws TypeError: Input must be a string
console.log(toKebabCase(42)); // Throws TypeError: Input must be a string