// JavaScript functions

const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."
];

const loremIpsumSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

function generateAndDisplayIpsum() {
    const tag = document.getElementById('htmlTag').value;
    const numWords = parseInt(document.getElementById('numWords').value, 10);
    const numSentences = parseInt(document.getElementById('numSentences').value, 10);
    const htmlOutputElement = document.getElementById('htmlOutput');

    let ipsumText = '';

    // Determine whether to generate words or sentences
    if (!isNaN(numWords) && numWords > 0) {
        ipsumText = generateWords(numWords);
    } else if (!isNaN(numSentences) && numSentences > 0) {
        ipsumText = generateSentences(numSentences);
    }

    // Create the HTML string and place it in the textarea for HTML output
    htmlOutputElement.value = `<${tag}>${ipsumText}</${tag}>`;
}

function generateWords(numWords) {
    let words = [];
    while (words.length < numWords) {
        words = words.concat(loremIpsumWords);
    }
    return words.slice(0, numWords).join(' ') + '.';
}

function generateSentences(numSentences) {
    let sentences = [];
    while (sentences.length < numSentences) {
        sentences = sentences.concat(loremIpsumSentences);
    }
    return sentences.slice(0, numSentences).join(' ');
}
