const travelTimes = {
    "Sunyani-Accra": 6,
    "Accra-Sunyani": 6,
    "Kumasi-Accra": 4,
    "Accra-Kumasi": 4,
    "Takoradi-Accra": 5,
    "Accra-Takoradi": 5,
    "Cape Coast-Accra": 3,
    "Accra-Cape Coast": 3
    // Add more city pairs as needed
};

document.getElementById('departure').addEventListener('change', calculateArrivalTime);
document.getElementById('arrival').addEventListener('change', calculateArrivalTime);
document.getElementById('depart_time').addEventListener('change', calculateArrivalTime);

function calculateArrivalTime() {
    const departureCity = document.getElementById('departure').value;
    const arrivalCity = document.getElementById('arrival').value;
    const departureTime = document.getElementById('depart_time').value;
    
    if (departureCity && arrivalCity && departureTime) {
        const travelTimeKey = departureCity + "-" + arrivalCity;
        const travelTime = travelTimes[travelTimeKey];
        if (travelTime !== undefined) {
            const [hour, minute] = departureTime.split(':').map(Number);
            const departureDate = new Date();
            departureDate.setHours(hour, minute);
            const arrivalDate = new Date(departureDate.getTime() + (travelTime * 60 * 60 * 1000));
            const arrivalHour = arrivalDate.getHours();
            const arrivalMinute = arrivalDate.getMinutes();
            const arrivalTime = padZero(arrivalHour) + ':' + padZero(arrivalMinute);
            document.getElementById('arrival_time').value = arrivalTime;
        }
    }
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

document.getElementById('addPassengerBtn').addEventListener('click', function() {
    var passengerDetails = document.getElementById('passengerDetails');
    var passengerCount = passengerDetails.getElementsByClassName('passenger').length + 1;
    var newPassenger = document.createElement('div');
    newPassenger.classList.add('passenger');
    newPassenger.innerHTML = `
        <h3>Passenger ${passengerCount}</h3>
        <div class="booking__input">
            <label for="name">Name</label>
            <input type="text" class="passenger_name" name="name" placeholder="Your Name" required>
        </div>
        <div class="booking__input">
            <label for="telephone">Telephone</label>
            <input type="tel" class="passenger_telephone" name="telephone" placeholder="Your Telephone" required>
        </div>
    `;
    passengerDetails.appendChild(newPassenger);
});
