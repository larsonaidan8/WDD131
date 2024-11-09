let participantCount = 1;  // Initial participant count is 1

// Template function to generate HTML for new participants
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>

            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>

            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>
        </section>
    `;
}

// Function to create HTML element from string
function createHTMLFromString(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstChild;
}

// Add participant button functionality
document.getElementById('addParticipantButton').addEventListener('click', function () {
    participantCount++;

    // Generate new participant HTML
    const newParticipantHTML = participantTemplate(participantCount);

    // Insert the new participant section before the add button
    const participantSection = document.querySelector('.participants');
    const addButton = document.getElementById('addParticipantButton');
    participantSection.insertBefore(
        createHTMLFromString(newParticipantHTML),
        addButton
    );
});

// Function to calculate the total fee
function totalFees() {
    const feeElements = document.querySelectorAll('[id^="fee"]');
    let total = 0;
    feeElements.forEach(feeElement => {
        total += parseFloat(feeElement.value) || 0;  // Add fee values
    });
    return total;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the adult's name
    const adultName = document.getElementById('adultName').value;

    // Calculate the total fees
    const totalFee = totalFees();

    // Show the summary message
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <p>Thank you, ${adultName}, for registering.</p>
        <p>You have registered ${participantCount} participants and owe $${totalFee.toFixed(2)} in fees.</p>
    `;

    // Hide the form and display the summary
    document.querySelector('form').style.display = 'none';
    summary.style.display = 'block';
}

// Add event listener to form submit
document.getElementById('registrationForm').addEventListener('submit', submitForm);
