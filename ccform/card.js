document.addEventListener("DOMContentLoaded", function (){

});

const form = document.getElementById("credit-card");
const cardNumber = document.getElementById("card-number");
const cardHolder = document.getElementById("card-holder");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCVV = document.getElementById("card-cvv");
const submitButton = document.getElementById("card-button");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        number: cardNumber.value.trim(),
        holder: cardHolder.value.trim(),
        month: cardMonth.value.trim(),
        year: cardYear.value.trim(),
        cvv: cardCVV.value.trim()
    };

    const errors = validateCardData(data);

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Valid card details:", data);
});

function validateCardData(data) {
    const errors = [];

    // Card Number: 16 digits
    if (data.number.length !== 16 || isNaN(data.number)) {
        errors.push("Card number must be exactly 16 digits.");
    }

    // Card Holder: not empty
    if (data.holder.length === 0) {
        errors.push("Card holder name cannot be empty.");
    }

    // Expiration Month: MM (01–12)
    const month = parseInt(data.month, 10);
    if (isNaN(month) || month < 1 || month > 12 || data.month.length !== 2) {
        errors.push("Expiration month must be between 01 and 12.");
    }

    // Expiration Year: must be >= current year
    const currentYear = new Date().getFullYear() % 100; // 2-digit year
    const year = parseInt(data.year, 10);
    if (isNaN(year) || year < currentYear) {
        errors.push("Expiration year is invalid or expired.");
    }

    // CVV: 3 digits
    if (data.cvv.length !== 3 || isNaN(data.cvv)) {
        errors.push("CVV must be exactly 3 digits.");
    }

    return errors;
}



// If all validations pass, submit the form
console.log("Card details are valid. Submitting form...", {
    number: cardNumber.value,
    holder: cardHolder.value,
    month: cardMonth.value,
    year: cardYear.value,
    cvv: cardCVV.value
});