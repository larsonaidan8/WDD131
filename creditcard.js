document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVV = document.getElementById('card-cvv').value;

    // Check if all fields are filled
    if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
        alert('Please fill in all fields.'); // Alert for missing fields
        return;
    }

    // Confirmation message
    const confirmationMessage = `
        Thank you for your submission!
        
        Card Number: ${cardNumber}
        Name: ${cardName}
        Expiry: ${cardExpiry}
        CVV: ${cardCVV}
    `;
    
    // Display the confirmation message
    alert(confirmationMessage);
    
    // Optionally, you can reset the form after submission
    document.getElementById('card-number').value = '';
    document.getElementById('card-name').value = '';
    document.getElementById('card-expiry').value = '';
    document.getElementById('card-cvv').value = '';
});
