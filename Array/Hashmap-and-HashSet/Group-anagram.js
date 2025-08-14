/**
 * 🟩 LeetCode 49: Group Anagrams
 *
 * 🎯 Problem:
 * Given an array of strings, group the anagrams together.
 *
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 * Constraints:
 * - 1 <= strs.length <= 10^4
 * - strs[i] consists of lowercase English letters
 */

/* --------------------------------------------------
   ✅ Optimized Approach #1: Sorted String as Key
   --------------------------------------------------
   Idea:
   - Sort each string alphabetically.
   - Use sorted string as the key in a HashMap.
   - Group all original words that share the same sorted key.
*/
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split("").sort().join(""); // sorted string
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
// ✅ Time: O(N * K log K)  | N = number of strings, K = max string length
// ✅ Space: O(N * K)

/* --------------------------------------------------
   ✅ Optimized Approach #2: Character Frequency as Key
   --------------------------------------------------
   Idea:
   - Avoid sorting (O(K log K)) by using a fixed-size frequency array for 'a' to 'z'.
   - Convert frequency array into a string key and group in a HashMap.
   - Faster for large K when alphabet size is small (like lowercase English).
*/
function groupAnagramsFreq(strs) {
    const map = new Map();

    for (let str of strs) {
        const freq = new Array(26).fill(0);
        for (let ch of str) {
            freq[ch.charCodeAt(0) - 97]++;
        }
        const key = freq.join("#"); // unique representation
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
// ✅ Time: O(N * K) | ✅ Space: O(N * K)

/* --------------------------------------------------
   🟡 Brute Force Approach: Compare Every Pair
   --------------------------------------------------
   Idea:
   - Compare each string with every other using char counts.
   - Group manually and mark visited strings.
   - ❌ Too slow for large inputs.
*/
function groupAnagramsBrute(strs) {
    const groups = [];
    const visited = new Array(strs.length).fill(false);

    function isAnagram(a, b) {
        if (a.length !== b.length) return false;
        const count = new Array(26).fill(0);
        for (let i = 0; i < a.length; i++) {
            count[a.charCodeAt(i) - 97]++;
            count[b.charCodeAt(i) - 97]--;
        }
        return count.every(c => c === 0);
    }

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;
        const group = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (!visited[j] && isAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }
        groups.push(group);
    }

    return groups;
}
// ❌ Time: O(N² * K) | ✅ Space: O(N)

/* --------------------------------------------------
   🔍 Test Cases
-------------------------------------------------- */
console.log("Sorted Key Map:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("Frequency Key Map:", groupAnagramsFreq(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("Brute Force:", groupAnagramsBrute(["eat", "tea", "tan", "ate", "nat", "bat"]));

/* --------------------------------------------------
   📌 Interview Summary
--------------------------------------------------
- Approach 1: Sort each string → use sorted version as key → group via HashMap.
- Approach 2: Count characters instead of sorting → O(N * K) → faster for fixed alphabet.
- Brute force: Compare each with all others → O(N² * K) → impractical for large N.

✅ Tip for FAANG:
- Mention both sorting and frequency-map methods.
- For extremely large datasets, prefer frequency counting (O(N*K)).
- Be ready to discuss trade-offs: sorting gives simpler code, frequency counting is faster.
*/

/* --------------------------------------------------
   ✅ Complexity Table
--------------------------------------------------
| Method                          | Time           | Space  | Notes                              |
|---------------------------------|----------------|--------|-------------------------------------|
| Sorted String as Key (Map)      | O(N * K log K) | O(N*K) | ✅ Easy to implement                |
| Char Frequency as Key (Map)     | O(N * K)       | O(N*K) | 🔥 Faster for fixed alphabets       |
| Brute Force Pairwise Comparison | O(N² * K)      | O(N)   | ❌ Very slow for large inputs       |
*/
