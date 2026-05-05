class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // If s1 is longer than s2, it's impossible for s2 to contain a permutation of s1
        if (s1.length > s2.length) return false;

        // Step 1: Build a frequency map (hashMap1) for all characters in s1
        let hashMap1 = {};
        for (let s of s1) {
            hashMap1[s] = hashMap1[s] ? hashMap1[s] + 1 : 1;
        }
        console.log("hashMap1 (s1 frequency):", hashMap1);

        // Step 2: Slide over s2, checking substrings of length s1.length
        for (let i = 0; i < s2.length; i++) {
            let hashMap2 = {}; // temporary map for substring starting at i

            // Build hashMap2 for substring s2[i ... i+s1.length)
            for (let j = i; j < i + s1.length; j++) {
                if (s2[j] in hashMap1) {
                    // If the character exists in s1, count it
                    hashMap2[s2[j]] = hashMap2[s2[j]] ? hashMap2[s2[j]] + 1 : 1;

                    // If count exceeds what's in s1, no need to continue — break early
                    if (hashMap1[s2[j]] < hashMap2[s2[j]]) {
                        break;
                    }
                } else {
                    // If the character doesn’t exist in s1 at all, break early
                    break;
                }
            }

            console.log("hashMap2 (substring starting at index", i, "):", hashMap2);

            // Step 3: Compare hashMap1 and hashMap2
            let count = 0;
            for (let key in hashMap2) {
                if (hashMap2[key] !== hashMap1[key]) break;
                else count++;
            }

            console.log("Matched keys count =", count);

            // If all characters match, we've found a valid permutation
            if (Object.keys(hashMap1).length === count) return true;
        }

        // If we finish the loop without returning true, no permutation found
        return false;
    }
}
