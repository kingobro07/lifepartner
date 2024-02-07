async function loadCountries() {
    // Your existing loadCountries function here
}

async function loadStates() {
    // Your existing loadStates function here
}

async function loadCities() {
    // Your existing loadCities function here
}

function generateCommonInitials() {
    // Common initials found in names
    const commonInitials = ['A', 'C', 'E', 'J', 'M', 'S'];

    // Randomly choose two common initials
    const randomIndex1 = Math.floor(Math.random() * commonInitials.length);
    const randomIndex2 = Math.floor(Math.random() * commonInitials.length);

    return commonInitials[randomIndex1] + commonInitials[randomIndex2];
}
function validateInput() {
    var fullName = document.getElementById("name").value.trim();
    var birthday = document.getElementById("birthday").value;
    var birthtime = document.getElementById("birthtime").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;

    var errorMessage = document.getElementById("errorMessage");

    // Reset error message
    errorMessage.innerHTML = "";

    var errorMessages = []; // Array to store error messages

    if (!/^[A-Z ]+$/.test(fullName)) {
        errorMessages.push("Please enter only uppercase alphabetic characters for the name.");
    }

    var nameParts = fullName.split(' ');
    if (nameParts.length > 1 && nameParts.join('').indexOf(' ') !== -1) {
        errorMessages.push("Please enter only one space between words in the name.");
    } else if (nameParts.some(part => part.length < 2)) {
        errorMessages.push("Each word of the name should contain at least 2 letters & only one space between two words of the name.");
    }
    var fullNameWithoutSpaces = fullName.replace(/\s/g, '');
    if (fullNameWithoutSpaces.length < 5) {
        errorMessages.push("Full name must contain at least 5 letters.");
    }
       // Check if both first name and surname are entered
    
    if (nameParts.length < 2) {
        openPopup("Please enter both first name and surname with a space in between.");
        return false;
    } 

    if (birthday === "") {
        errorMessages.push("Please enter your birthday.");
    }

    if (birthtime === "") {
        errorMessages.push("Please enter your birth time.");
    }

    // Check if country is selected
    if (country === "Country of Birth") {
        errorMessages.push("Please choose your Country of Birth.");
    }

    // Check if state is selected
    if (state === "(State/U.T.) Of Birth") {
        errorMessages.push("Please choose your (State/UT)of Birth.");
    }
    if (state === "") {
        errorMessages.push("Please choose your (State/UT)of Birth.");
    }

    // Check if city is selected
    if (city === "") {
        errorMessages.push("Please choose your City of Birth.");
    }
    
    if (city === "City of Birth") {
        errorMessages.push("Please choose your City of Birth.");
    }
    

    if (errorMessages.length > 0) {
        openPopup(errorMessages.join("<br><br>")); // Join error messages with line breaks
        return false;
    }

    return true;
}


// Load states dynamically based on the selected country
async function loadStates() {
    var country = document.getElementById("country").value;
    var stateSelect = document.getElementById("state");
    stateSelect.innerHTML = ""; // Clear existing options
    var citySelect = document.getElementById("city");
    citySelect.innerHTML = "";

    if (country === "India") {
        var states = ["(State/U.T.) Of Birth","Assam", "West Bengal", "Maharashtra"]; // Example states for India
        states.forEach(function(state) {
            var option = document.createElement("option");
            option.text = state;
            option.value = state;
            stateSelect.appendChild(option);
        });
    }
    // Add more conditions for other countries and their respective states
}

// Load cities dynamically based on the selected state
async function loadCities() {
    var state = document.getElementById("state").value;
    var citySelect = document.getElementById("city");
    citySelect.innerHTML = ""; // Clear existing options

    if (state === "Assam") {
        var cities = ["City of Birth","Jorhat", "Guwahati", "Dibrugarh"]; // Example cities for Assam
        cities.forEach(function(city) {
            var option = document.createElement("option");
            option.text = city;
            option.value = city;
            citySelect.appendChild(option);
        });
    } else if (state === "West Bengal") {
        var cities = ["City of Birth","Kolkata", "Howrah", "Durgapur"]; // Example cities for West Bengal
        cities.forEach(function(city) {
            var option = document.createElement("option");
            option.text = city;
            option.value = city;
            citySelect.appendChild(option);
        });
    } 
    // Add more conditions for other states and their respective cities
}

function openPopup(message) {
    var popupContainer = document.getElementById("customPopup");
    var popupMessage = document.getElementById("popupMessage");
    popupMessage.innerHTML = message;



    popupContainer.style.display = "block";
}


function togglePopup() {
    var popup = document.querySelector('.popup');
    var body = document.querySelector('body');
    popup.style.display = 'block'; // Show the popup
    body.classList.add('popup-open'); // Add class to enable scrolling
}

function closePopup() {
    var popup = document.querySelector('.popup');
    var body = document.querySelector('body');
    popup.style.display = 'none'; // Hide the popup
    body.classList.remove('popup-open'); // Remove class to disable scrolling
}


function calculateSurety() {
    if (!validateInput()) {
        return;
    }

    var fullName = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var birthtime = document.getElementById("birthtime").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;

    var userKey = `${fullName}_${birthday}_${birthtime}_${country}_${state}_${city}`;

    var storedResult = localStorage.getItem(userKey);

    if (storedResult) {
        document.getElementById("resultList").innerHTML = storedResult;
    } else {
        // Add conditions for all predetermined cases
        if (
            fullName === "DEEPALI PRADHAN" &&
            birthday === "2007-11-20" &&
            birthtime === "02:30" &&
            country === "India" &&
            state === "Assam" &&
            city === "Jorhat"
        ) {
            var predeterminedResults = [
                "<li>Initials: BM, Surety Percentage: 90%</li>",
                "<li>Initials: DP, Surety Percentage: 88%</li>",
                "<li>Initials: DP, Surety Percentage: 85%</li>",
                "<li>Initials: DP, Surety Percentage: 92%</li>",
                "<li>Initials: DP, Surety Percentage: 89%</li>",
                "<li>Initials: DP, Surety Percentage: 91%</li>",
                "<li>Initials: DP, Surety Percentage: 87%</li>",
                "<li>Initials: DP, Surety Percentage: 86%</li>",
                "<li>Initials: DP, Surety Percentage: 93%</li>",
                "<li>Initials: DP, Surety Percentage: 94%</li>"
            ];

            var predeterminedResult = predeterminedResults[Math.floor(Math.random() * predeterminedResults.length)];

            document.getElementById("resultList").innerHTML = predeterminedResult;

            localStorage.setItem(userKey, predeterminedResult);
        } else if (
            fullName === "john doe" &&
            birthday === "1990-05-15" &&
            birthtime === "12:45" &&
            country === "US" &&
            state === "CA" &&
            city === "Los Angeles"
        ) {
            var secondPredeterminedResult = [
                "<li>Initials: JD, Surety Percentage: 85%</li>",
                "<li>Initials: JD, Surety Percentage: 88%</li>",
                "<li>Initials: JD, Surety Percentage: 82%</li>",
                "<li>Initials: JD, Surety Percentage: 89%</li>"
            ];

            var secondResult = secondPredeterminedResult[Math.floor(Math.random() * secondPredeterminedResult.length)];

            document.getElementById("resultList").innerHTML = secondResult;

            localStorage.setItem(userKey, secondResult);
        } else if (
            fullName === "jane smith" &&
            birthday === "1985-08-22" &&
            birthtime === "08:15" &&
            country === "CA" &&
            state === "ON" &&
            city === "Toronto"
        ) {
            var thirdPredeterminedResult = [
                "<li>Initials: JS, Surety Percentage: 78%</li>",
                "<li>Initials: JS, Surety Percentage: 82%</li>",
                "<li>Initials: JS, Surety Percentage: 80%</li>",
                "<li>Initials: JS, Surety Percentage: 75%</li>"
            ];

            var thirdResult = thirdPredeterminedResult[Math.floor(Math.random() * thirdPredeterminedResult.length)];

            document.getElementById("resultList").innerHTML = thirdResult;

            localStorage.setItem(userKey, thirdResult);
        } else if (
            fullName === "alex miller" &&
            birthday === "1995-03-10" &&
            birthtime === "18:30" &&
            country === "UK" &&
            state === "ENG" &&
            city === "London"
        ) {
            var fourthPredeterminedResult = [
                "<li>Initials: AM, Surety Percentage: 92%</li>",
                "<li>Initials: AM, Surety Percentage: 89%</li>",
                "<li>Initials: AM, Surety Percentage: 93%</li>",
                "<li>Initials: AM, Surety Percentage: 90%</li>"
            ];

            var fourthResult = fourthPredeterminedResult[Math.floor(Math.random() * fourthPredeterminedResult.length)];

            document.getElementById("resultList").innerHTML = fourthResult;

            localStorage.setItem(userKey, fourthResult);
        } else {
            var results = [];
            for (var i = 0; i < 10; i++) {
                var spouseInitials = generateCommonInitials();
                var suretyPercentage = Math.floor(Math.random() * 31) + 40; // Random between 40 and 70

                results.push({ initials: spouseInitials, percentage: suretyPercentage });
            }

            results.sort((a, b) => b.percentage - a.percentage);

            var resultHtml = results.map(result => `<li>Initials: ${result.initials}, Surety Percentage: ${result.percentage}%</li>`).join('');
            document.getElementById("resultList").innerHTML = resultHtml;

            localStorage.setItem(userKey, resultHtml);
        }
    }
}


function convertTo24Hour(time) {
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var period = time.match(/\s(.*)$/)[1].toUpperCase(); // AM or PM

    if (period === "PM" && hours < 12) hours = hours + 12;
    if (period === "AM" && hours === 12) hours = hours - 12;

    var sHours = hours.toString();
    var sMinutes = minutes.toString();

    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return sHours + ":" + sMinutes;
}

// Add these functions to your existing JavaScript file



// JavaScript remains the same except for the openPopup function

