export const buildErrorMessage = (error) => `${error.name}: ${error.message}`;

export const optionalChainingGet = (obj, path, defaultValue=null) => {
    const nodes = path.split(/(]\.|\[|\.)/);
    let result = obj;

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] === '.' || nodes[i] === '].' || nodes[i] === '[') continue;
        if (!result) return defaultValue;
        result = result[nodes[i]];
    }

    return result === undefined ? defaultValue : result;
};

export const labelize = (fieldName) => {
    try {
        const wordsAndFirstLetters = fieldName.split(/([A-Z0-9])/);
        const firstWord = wordsAndFirstLetters[0][0].toUpperCase() + wordsAndFirstLetters[0].substring(1);
        const labelWords = [firstWord];

        for (let i = 1; i < wordsAndFirstLetters.length; i++) {
            const item = wordsAndFirstLetters[i];

            if (i % 2) {
                // handle first letters or numbers
                labelWords.push(item);
            } else {
                // handle words
                labelWords[labelWords.length - 1] += item;
            }
        }

        return labelWords.join(' ');
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const deepCopy =(o) => JSON.parse(JSON.stringify(o));
