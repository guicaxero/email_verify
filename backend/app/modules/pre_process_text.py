import re
import unicodedata

def process_text(text):
    stop_words = {
        "de", "a", "o", "que", "e", "do", "da", "em", "um", "para", 
        "com", "não", "uma", "os", "no", "se", "na", "por", "mais"
    }

    lemmas = {
        "vc": "você",
        "pq": "porque",
        "fui": "ir",
        "correndo": "correr",
        "estavam": "estar",
        "felizes": "feliz",
    }

    text = text.lower()
    text = ''.join(
        c for c in unicodedata.normalize('NFD', text)
        if unicodedata.category(c) != 'Mn'
    )

    text = re.sub(r'[^a-z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()

    words = text.split()

    words = [lemmas.get(word, word) for word in words]

    suffixes = ["mente", "ções", "ção", "s", "es", "ais", "eis", "is", "os", "as"]
    stemmed = []
    for word in words:
        for suf in suffixes:
            if word.endswith(suf) and len(word) > len(suf) + 2:
                word = word[:-len(suf)]
                break
        stemmed.append(word)

    clean_words = [
        w for w in stemmed if w not in stop_words and len(w) > 2 and not w.isdigit()
    ]

    return " ".join(clean_words)
