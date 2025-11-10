function isAnagram(a, b) {
    // 🧹 Step 1: Normalize both strings
    // - Remove spaces using regex
    // - Convert to lowercase to ignore case sensitivity
    a = a.replace(/\s+/g, '').toLowerCase();
    b = b.replace(/\s+/g, '').toLowerCase();

    // ⚡ Step 2: Quick length check
    // If lengths differ, they can never be anagrams
    if (a.length !== b.length) return false;

    // 🧮 Step 3: Create a hash map (object) to store character frequencies
    const freq = {};

    // 🔁 Step 4: Count each character in the first string
    for (let ch of a) {
        // If the character exists, increment count
        // Otherwise, initialize it with 1
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // 🔁 Step 5: Loop through the second string and decrease counts
    for (let ch of b) {
        // If character not found or count already 0,
        // it means strings have mismatched characters
        if (!freq[ch]) return false;

        // Otherwise, decrement the count
        freq[ch]--;
    }

    // ✅ Step 6: If we never returned false,
    // all counts balanced out → strings are anagrams
    return true;
}

// 🧪 Test cases
console.log(isAnagram("listen", "silent"));     // ✅ true
console.log(isAnagram("triangle", "integral")); // ✅ true
console.log(isAnagram("apple", "papel"));       // ✅ true
console.log(isAnagram("rat", "car"));           // ❌ false
