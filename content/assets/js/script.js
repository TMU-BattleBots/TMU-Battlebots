// Bot filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categorySections = document.querySelectorAll('.category-section');
  
  // Add event listeners to filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      
      // Show/hide categories based on selection
      if (category === 'all') {
        categorySections.forEach(section => {
          section.style.display = 'block';
        });
      } else {
        categorySections.forEach(section => {
          if (section.id === category) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      }
    });
  });
  
  // Calculator functionality
  const calculatorForm = document.getElementById('calculator-form');
  if (calculatorForm) {
    calculatorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      calculateSpecs();
    });
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});

// Calculator function
function calculateSpecs() {
  const weight = parseFloat(document.getElementById('robot-weight').value) || 0;
  const weaponType = document.getElementById('weapon-type').value;
  const motorKv = parseFloat(document.getElementById('motor-kv').value) || 0;
  const batteryCells = parseInt(document.getElementById('battery-cells').value) || 2;
  
  // Calculate battery voltage (3.7V per cell)
  const batteryVoltage = batteryCells * 3.7;
  
  // Calculate motor RPM
  const motorRpm = motorKv * batteryVoltage;
  
  // Calculate weapon parameters based on type
  let weaponInertia, tipSpeed, spinupTime;
  
  switch(weaponType) {
    case 'spinner':
      weaponInertia = weight * 0.25;
      tipSpeed = (motorRpm * Math.PI * (weight * 0.1)) / 60;
      spinupTime = 1.2;
      break;
    case 'hammer':
      weaponInertia = weight * 0.3;
      tipSpeed = (motorRpm * Math.PI * (weight * 0.12)) / 60;
      spinupTime = 1.5;
      break;
    case 'flipper':
      weaponInertia = weight * 0.2;
      tipSpeed = (motorRpm * Math.PI * (weight * 0.08)) / 60;
      spinupTime = 0.8;
      break;
    case 'crusher':
      weaponInertia = weight * 0.35;
      tipSpeed = (motorRpm * Math.PI * (weight * 0.06)) / 60;
      spinupTime = 1.8;
      break;
    default:
      weaponInertia = weight * 0.25;
      tipSpeed = (motorRpm * Math.PI * (weight * 0.1)) / 60;
      spinupTime = 1.2;
  }
  
  // Calculate energy
  const energyJoules = 0.5 * weaponInertia * (motorRpm * Math.PI / 30) * (motorRpm * Math.PI / 30);
  
  // Display results
  const resultContent = document.getElementById('result-content');
  const calculatorResult = document.getElementById('calculator-result');
  
  if (resultContent && calculatorResult) {
    resultContent.innerHTML = `
      <p><strong>Maximum RPM:</strong> ${motorRpm.toFixed(0)} RPM</p>
      <p><strong>Stored Energy:</strong> ${energyJoules.toFixed(1)} J</p>
      <p><strong>Tip Speed:</strong> ${tipSpeed.toFixed(1)} m/s</p>
      <p><strong>Spinup Time:</strong> ${spinupTime.toFixed(2)} sec</p>
      <p><strong>Recommended Motor:</strong> ${weight <= 3 ? 'Brushless 22XX series' : 'Brushless 52XX series'}</p>
      <p><strong>Recommended Battery:</strong> ${batteryCells}S LiPo, ${weight <= 3 ? '450-850mAh' : '3000-5500mAh'}</p>
    `;
    
    calculatorResult.style.display = 'block';
  }
}
