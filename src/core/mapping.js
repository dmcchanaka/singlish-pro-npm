export const VOWELS = {
    'a': 'අ', 'A': 'අ',
    'aa': 'ආ', 'AA': 'ආ', 'Aa': 'ආ', 'aA': 'ආ',
    'ae': 'ඇ', 'Ae': 'ඇ', 'AE': 'ඇ',
    'aae': 'ඈ', 'AAe': 'ඈ', 'AAE': 'ඈ',
    'i': 'ඉ', 'I': 'ඉ',
    'ii': 'ඊ', 'II': 'ඊ',
    'u': 'උ', 'U': 'උ',
    'uu': 'ඌ', 'UU': 'ඌ',
    'e': 'එ', 'E': 'එ',
    'ee': 'ඒ', 'EE': 'ඒ',
    'o': 'ඔ', 'O': 'ඔ',
    'oo': 'ඕ', 'OO': 'ඕ',
    'ai': 'ඓ', 'AI': 'ඓ',
    'au': 'ඖ', 'AU': 'ඖ',
    'R': 'ඍ', 'Ruu': 'ඎ',
    'li': 'ඏ', 'lii': 'ඐ'
};

export const VOWEL_SIGNS = {
    'aae': 'ෑ', 'ae': 'ැ', 'aa': 'ා', 'a': '',
    'ii': 'ී', 'i': 'ි', 'uu': 'ූ', 'u': 'ු',
    'ee': 'ේ', 'e': 'ෙ', 'oo': 'ෝ', 'o': 'ො', 
    'ai': 'ෛ', 'au': 'ෞ',
    'ru': 'ෘ', 'ruu': 'ෲ',
    'li': 'ෟ', 'lii': 'ෳ'
};

export const CONSONANTS = {
    // Custom Hybrid Layout (User Preferred)
    'k': 'ක', 'g': 'ග', 'c': 'ච', 'ch': 'ච', 'j': 'ජ',
    't': 'ට', 'd': 'ද', 'n': 'න', 'p': 'ප',
    'b': 'බ', 'm': 'ම', 'y': 'ය', 'r': 'ර',
    'l': 'ල', 'v': 'ව', 'w': 'ව', 's': 'ස', 
    'h': 'හ', 'f': 'ෆ', 'z': 'ස', 'x': 'ෂ',
    
    // Retroflex Defaults
    'D': 'ඩ', 'N': 'ණ', 'L': 'ළ',
    
    // Mahaprana & Dental Mapping
    'th': 'ත', 'TH': 'ථ',
    'dh': 'ධ', 
    'T': 'ඨ',
    'Dh': 'ඪ',
    
    // Aspirated Variants
    'kh': 'ඛ', 'gh': 'ඝ', 'Ch': 'ඡ', 'jh': 'ඣ',
    'ph': 'ඵ', 'bh': 'භ',
    'sh': 'ශ', 'Sh': 'ෂ',
    
    // Standard Singlish Capitals for Mahaprana
    'K': 'ඛ', 'G': 'ඝ', 'C': 'ඡ', 'J': 'ඣ',
    'P': 'ඵ', 'B': 'භ', 'S': 'ශ',
    
    // Clusters & Sanyaka
    'nd': 'න්ද',
    'nt': 'න්ත',
    'mb': 'ම්බ',
    'mp': 'ම්ප',
    'nng': 'ඟ', 'nndh': 'ඳ', 
    'mmb': 'ඹ', 'ny': 'ඤ', 'gn': 'ඥ',
    'nnj': 'ඦ', 'nnd': 'ඬ', 'nG': 'ඞ',
    
    // Others
    'M': 'ං', 'o': 'ං', 'H': 'ඃ'
};

export const HAL = '්';
export const ZWJ = '\u200D';
