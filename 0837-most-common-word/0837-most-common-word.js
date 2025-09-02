/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

     let lower = paragraph.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/);             
    let bannedSet = new Set(banned.map(w => w.toLowerCase())); 
    let freq = new Map();

    for (let word of lower) {
        if (word && !bannedSet.has(word)) {
            freq.set(word, (freq.get(word) || 0) + 1);
        }
    }

    let mostRepWord = '';
    let max = 0;
    for (let [key, val] of freq) {
        if (val > max) {
            max = val;
            mostRepWord = key;
        }
    }
    return mostRepWord;

};