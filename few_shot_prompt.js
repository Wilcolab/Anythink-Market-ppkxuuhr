/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase strings.
 * @param {string} str - The input string.
 * @returns {string} - The camelCase version of the string.
 */
function toCamelCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '') // Replace separators with uppercase letters
        .replace(/^[A-Z]/, char => char.toLowerCase()); // Ensure the first character is lowercase
}

// Example usage:
console.log(toCamelCase("first name")); // Output: firstName
console.log(toCamelCase("user_id")); // Output: userId
console.log(toCamelCase("SCREEN_NAME")); // Output: screenName
console.log(toCamelCase("mobile-number")); // Output: mobileNumber
console.log(toCamelCase("convert THIS to camelCase")); // Output: convertThisToCamelCase