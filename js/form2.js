// Function to save booking details to local storage
function saveBookingDetails() {
    const departureCity = document.getElementById('departure').value;
    const passengerName = document.querySelector('.passenger_name').value;
    const passengerTelephone = document.querySelector('.passenger_telephone').value;

    // Construct the booking object
    const bookingDetails = {
        departureCity: departureCity,
        passengerName: passengerName,
        passengerTelephone: passengerTelephone
        // Add other booking details here
    };

    // Save booking details to local storage
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
}

// Add event listener to the booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    saveBookingDetails();
    window.location.href = 'payment-page/card.html';
});
