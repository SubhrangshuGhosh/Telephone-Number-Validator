const validPatterns = [
    /^1?\s?\d{3}-\d{3}-\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
    /^1?\s?\d{10}$/,
    /^1?\s?\d{3} \d{3} \d{4}$/
];

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", function() {
    const input = userInput.value.trim();

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const isValid = validPatterns.some(pattern => pattern.test(input));

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${input}`;
        resultsDiv.className = "valid";
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
        resultsDiv.className = "invalid";
    }
});

clearBtn.addEventListener("click", function() {
    resultsDiv.textContent = "";
    userInput.value = "";
});