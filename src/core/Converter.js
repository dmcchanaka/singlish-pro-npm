import { VOWELS, VOWEL_SIGNS, CONSONANTS, HAL } from './mapping';

export function transliterate(text, options = {}) {
    const { finalize = false } = options;
    let result = "";
    let i = 0;

    const matchLongest = (str, start, dict) => {
        let keys = Object.keys(dict).sort((a, b) => b.length - a.length);
        for (let key of keys) {
            if (str.substring(start, start + key.length) === key) return { value: dict[key], length: key.length };
        }
        for (let key of keys) {
            if (str.substring(start, start + key.length).toLowerCase() === key.toLowerCase()) return { value: dict[key], length: key.length };
        }
        return null;
    };

    while (i < text.length) {
        let match = null;

        // 1. Stand-alone Vowels
        if (i === 0) {
            match = matchLongest(text, i, VOWELS);
            if (match) {
                result += match.value;
                i += match.length;
                continue;
            }
        }

        // 2. Consonants
        match = matchLongest(text, i, CONSONANTS);
        if (match) {
            let consonantUnicode = match.value;
            let nextPos = i + match.length;
            
            // Look ahead for special combinations
            let vMatch = matchLongest(text, nextPos, VOWEL_SIGNS);
            
            // Rakaaransaya (C + r + V)
            if (!vMatch && nextPos < text.length && text[nextPos].toLowerCase() === 'r') {
                 let vMatchAfterR = matchLongest(text, nextPos + 1, VOWEL_SIGNS);
                 if (vMatchAfterR) {
                     result += consonantUnicode + HAL + 'ර' + vMatchAfterR.value;
                     i = nextPos + 1 + vMatchAfterR.length;
                     continue;
                 }
            }
            
            // Yansaya (C + y + V)
            if (!vMatch && nextPos < text.length && text[nextPos].toLowerCase() === 'y') {
                 let vMatchAfterY = matchLongest(text, nextPos + 1, VOWEL_SIGNS);
                 if (vMatchAfterY) {
                     result += consonantUnicode + HAL + 'ය' + vMatchAfterY.value;
                     i = nextPos + 1 + vMatchAfterY.length;
                     continue;
                 }
            }

            if (vMatch) {
                result += consonantUnicode + vMatch.value;
                i = nextPos + vMatch.length;
            } else {
                if (finalize || nextPos < text.length) {
                    if (consonantUnicode === 'ං') {
                        result += consonantUnicode;
                    } else {
                        result += consonantUnicode + HAL;
                    }
                } else {
                    result += consonantUnicode;
                }
                i = nextPos;
            }
            continue;
        }

        result += text[i];
        i++;
    }
    return result;
}
