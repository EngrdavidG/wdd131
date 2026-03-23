// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// WEATHER DATA (STATIC FOR NOW)
const temp = 8;
const wind = 10;


// FUNCTION (ONE LINE as required)
function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}


// APPLY CONDITIONS
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = calculateWindChill(temp, wind).toFixed(2) + " °C";
}

document.getElementById("chill").textContent = chill;