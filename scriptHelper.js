// require('isomorphic-fetch');

// planetary data info for mission destination
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getByElementID("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}"> 
            `
}

// checks if input is empty or if it is not a number or is a number when necessary. May need to use true/false statements??
function validateInput(testInput) {
   if (testInput === "") {
    return ("Empty");
   } else if (isNaN(testInput)) {
   return "Not a Number";
   } else {
    return "Is a Number";
   }
}

// validates pilot and copilot names and updates list of shuttle info
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // let pilotStatus = document.getElementById

    if (validateInput(pilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        document.getByElementID("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    } else if (validateInput(pilot.value) === "Is a Number") {
        alert("Pilot name cannot contain a number. Please try again.");
        return;
    }

    if (validateInput(copilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        document.getByElementID("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch.`;
    } else if (validateInput(copilot.value) === "Is a Number") {
        alert("Copilot name cannot contain a number. Please try again.");
        return;
    }

// checks fuel and updates list
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        document.getByElementID("fuelStatus").innerHTML = "Fuel level too low for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    } else if (validateInput(fuelLevel.value) === "Not a Number") {
        alert("Invalid fuel level. Try again.");
    } else {
        list.style.visibility = "visible";
    }

// checks cargo and updates list
    if (cargoMass.value > 10000) {
    list.style.visibility = "visible";
    document.getByElementID("cargoStatus").innerHTML = "Cargo mass too high for launch.";
    h2.innerHTML = "Shuttle not ready for launch.";
    h2.style.color = "red";
    } else if (validateInput(fuelLevel.value) === "Not a Number") {
    alert("Invalid cargo mass. Try again.");
    } else {
    list.style.visibility = "visible";
    }

    if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle is ready for launch.";
        h2.style.color = "green";
    }
}

    
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
