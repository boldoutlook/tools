    document.getElementById('generate').addEventListener('click', generatePassword);

    function generatePassword() {
        var length = parseInt(document.getElementById('passwordLength').value, 10);
        var includeUppercase = document.getElementById('includeUppercase').checked;
        var includeLowercase = document.getElementById('includeLowercase').checked;
        var includeNumbers = document.getElementById('includeNumbers').checked;
        var includeSpecialChars = document.getElementById('includeSpecialChars').checked;
        var includeWords = document.getElementById('includeWords').checked;

        var characterSet = '';
        var password = '';
        var word = '';

        if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) characterSet += '0123456789';
        if (includeSpecialChars) characterSet += '!@#$%^&*()_+{}:"<>?|[];\',./`~';

        if (includeWords) {
            // Placeholder for dictionary words. Use a more extensive list or a dictionary API in a real-world case.
            var words = ['apple', 'orange', 'banana', 'grape', 'peach'];
            word = words[Math.floor(Math.random() * words.length)];

            // Randomly capitalize the dictionary word
            if (Math.random() < 0.5) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }

            // Ensure the total length doesn't exceed the specified number of characters
            length -= word.length;
        }

        // Generate random characters for the portion of the password
        for (var i = 0; i < length; i++) {
            password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }

        // If a dictionary word is included, append or prepend the word to the password
        if (word) {
            if (Math.random() < 0.5) {
                password = word + password; // Prepend
            } else {
                password += word; // Append
            }
        }

        document.getElementById('generatedPassword').value = password;
    }
