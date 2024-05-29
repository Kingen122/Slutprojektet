// formValidation.js
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var errorMessages = [];

    // Enkel regex för e-postvalidering
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validera e-postadressen
    if (!emailPattern.test(email)) {
        errorMessages.push('Ange en giltig e-postadress.');
    }

    // Kontrollera att namn och meddelande inte är tomma
    if (!name.trim()) {
        errorMessages.push('Ärenderad får inte vara tom.');
    }
    if (!message.trim()) {
        errorMessages.push('Meddelande får inte vara tomt.');
    }

    // Visa felmeddelanden
    var errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(function(message) {
            errorContainer.innerHTML += '<p>' + message + '</p>';
        });
        return false; // Förhindra att formuläret skickas
    }

    return true; // Formuläret är giltigt och kan skickas
}


// map.js
function initMap() {
    var location = {lat: 59.4439, lng: 18.0687}; // Koordinater för Åva gymnasium
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}



