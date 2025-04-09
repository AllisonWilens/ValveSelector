// Selecting elements
const ballValveBtn = document.getElementById('ball-valve');
const gateValveBtn = document.getElementById('gate-valve');
const checkValveBtn = document.getElementById('check-valve');
const globeValveBtn = document.getElementById('globe-valve');
const systemTypeSection = document.getElementById('system-type-section');
const recommendationsSection = document.getElementById('recommendations');
const recommendedValveDiv = document.getElementById('recommended-valve');

// Button click event to show system type selection
ballValveBtn.addEventListener('click', () => showSystemSelection('Ball Valve'));
gateValveBtn.addEventListener('click', () => showSystemSelection('Gate Valve'));
checkValveBtn.addEventListener('click', () => showSystemSelection('Check Valve'));
globeValveBtn.addEventListener('click', () => showSystemSelection('Globe Valve'));

// Show system type section after valve type selection
function showSystemSelection(valveType) {
    // Hide current section and show system selection
    document.querySelector('.selector').style.display = 'none';
    systemTypeSection.style.display = 'block';

    // Store selected valve type
    window.selectedValveType = valveType;
}

// Handle system selection
const waterSystemBtn = document.getElementById('water-system');
const heatingSystemBtn = document.getElementById('heating-system');
const gasSystemBtn = document.getElementById('gas-system');

// Show valve recommendations based on system type
waterSystemBtn.addEventListener('click', () => showRecommendation('Water System'));
heatingSystemBtn.addEventListener('click', () => showRecommendation('Heating System'));
gasSystemBtn.addEventListener('click', () => showRecommendation('Gas System'));

function showRecommendation(systemType) {
    // Hide system selection and show recommendations
    systemTypeSection.style.display = 'none';
    recommendationsSection.style.display = 'block';

    // Display the recommendation
    recommendedValveDiv.innerHTML = `
        <h3>Your Recommended Valve</h3>
        <p>Valve Type: ${window.selectedValveType}</p>
        <p>System Type: ${systemType}</p>
        <p>Material: Brass (example material)</p>
        <p>Size: 3/4 inch (example size)</p>
    `;
}

