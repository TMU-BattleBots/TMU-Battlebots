// Bot data
const bots = [
    {
      id: 'crusher',
      name: 'Crusher',
      category: '1lb',
      description: 'Our flagship 1lb bot with a powerful vertical spinner.',
      image: 'images/crusher.jpg',
      specs: {
        weight: '1lb (453g)',
        dimensions: '4" x 4" x 2"',
        weapon: 'Vertical spinner',
        motor: 'Brushless 1204 4800KV',
        batteryType: '2S LiPo 450mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/crusher-bot',
      cadFiles: ['crusher_frame.stl', 'crusher_weapon.stl']
    },
    {
      id: 'hammer',
      name: 'Hammer',
      category: '3lb',
      description: 'A 3lb bot with a pneumatic hammer for crushing opponents.',
      image: 'images/hammer.jpg',
      specs: {
        weight: '3lb (1.36kg)',
        dimensions: '8" x 6" x 3"',
        weapon: 'Pneumatic hammer',
        motor: 'Brushless 2204 2300KV',
        batteryType: '3S LiPo 850mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/hammer-bot',
      cadFiles: ['hammer_frame.stl', 'hammer_weapon.stl']
    },
    {
      id: 'destroyer',
      name: 'Destroyer',
      category: '30lb',
      description: 'Our heavyweight champion with a horizontal spinner that tears through competition.',
      image: 'images/destroyer.jpg',
      specs: {
        weight: '30lb (13.6kg)',
        dimensions: '16" x 14" x 6"',
        weapon: 'Horizontal spinner',
        motor: 'Brushless 5208 280KV',
        batteryType: '6S LiPo 5000mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/destroyer-bot',
      cadFiles: ['destroyer_frame.stl', 'destroyer_weapon.stl']
    },
    {
      id: 'flipper',
      name: 'Flipper',
      category: '3lb',
      description: 'A 3lb bot with a powerful pneumatic flipper that can launch opponents into the air.',
      image: 'images/flipper.jpg',
      specs: {
        weight: '3lb (1.36kg)',
        dimensions: '7" x 5" x 2"',
        weapon: 'Pneumatic flipper',
        motor: 'Brushless 2205 2600KV',
        batteryType: '3S LiPo 950mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/flipper-bot',
      cadFiles: ['flipper_frame.stl', 'flipper_mechanism.stl']
    },
    {
      id: 'saw',
      name: 'Saw',
      category: '30lb',
      description: 'A 30lb bot with a deadly spinning saw that can cut through opponents.',
      image: 'images/saw.jpg',
      specs: {
        weight: '30lb (13.6kg)',
        dimensions: '18" x 15" x 7"',
        weapon: 'Spinning saw blade',
        motor: 'Brushless 5210 320KV',
        batteryType: '6S LiPo 5500mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/saw-bot',
      cadFiles: ['saw_frame.stl', 'saw_weapon.stl']
    },
    {
      id: 'mini',
      name: 'Mini',
      category: '1lb',
      description: 'Our smallest bot with surprising power and agility.',
      image: 'images/mini.jpg',
      specs: {
        weight: '1lb (453g)',
        dimensions: '3" x 3" x 1.5"',
        weapon: 'Spinning drum',
        motor: 'Brushless 1106 6000KV',
        batteryType: '2S LiPo 350mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/mini-bot',
      cadFiles: ['mini_frame.stl', 'mini_weapon.stl']
    }
  ];
  
  // DOM Elements
  const botsGrid = document.querySelector('.bots-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('bot-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const calculateBtn = document.getElementById('calculate-btn');
  const calculatorResult = document.getElementById('calculator-result');
  const resultContent = document.getElementById('result-content');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.menu');
  
  // Initialize the bots display
  function displayBots(category = 'all') {
    botsGrid.innerHTML = '';
    
    const filteredBots = category === 'all' 
      ? bots 
      : bots.filter(bot => bot.category === category);
    
    filteredBots.forEach(bot => {
      const botCard = document.createElement('div');
      botCard.className = 'bot-card';
      botCard.innerHTML = `
        <div class="bot-img">
          <img src="${bot.image}" alt="${bot.name}">
        </div>
        <div class="bot-info">
          <span class="bot-category">${bot.category}</span>
          <h3 class="bot-name">${bot.name}</h3>
          <p class="bot-description">${bot.description}</p>
          <div class="bot-links">
            <a href="#" class="bot-link view-details" data-id="${bot.id}">View Details</a>
            <a href="${bot.githubLink}" class="bot-link" target="_blank">GitHub</a>
          </div>
        </div>
      `;
      botsGrid.appendChild(botCard);
    });
  
    // Add event listeners to the "View Details" links
    document.querySelectorAll('.view-details').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const botId = e.target.getAttribute('data-id');
        openBotModal(botId);
      });
    });
  }
  
  // Open the bot details modal
  function openBotModal(botId) {
    const bot = bots.find(b => b.id === botId);
    if (!bot) return;
  
    modalTitle.textContent = bot.name;
    
    modalBody.innerHTML = `
      <div class="modal-img">
        <img src="${bot.image}" alt="${bot.name}">
      </div>
      <div class="modal-details">
        <h3>Specifications</h3>
        <ul class="spec-list">
          <li><span>Weight:</span> <span>${bot.specs.weight}</span></li>
          <li><span>Dimensions:</span> <span>${bot.specs.dimensions}</span></li>
          <li><span>Weapon:</span> <span>${bot.specs.weapon}</span></li>
          <li><span>Motor:</span> <span>${bot.specs.motor}</span></li>
          <li><span>Battery:</span> <span>${bot.specs.batteryType}</span></li>
        </ul>
        
        <div class="modal-links">
          <a href="${bot.githubLink}" class="modal-link" target="_blank">GitHub Repository</a>
          <h3>CAD Files</h3>
          ${bot.cadFiles.map(file => `<a href="#" class="modal-link">${file}</a>`).join('')}
        </div>
      </div>
    `;
  
    modal.classList.add('open');
  }
  
  // Close the modal
  function closeModalFunc() {
    modal.classList.remove('open');
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Show/hide basic calculator
  function toggleCalculator() {
    const calculator = document.getElementById('basic-calculator');
    const button = document.getElementById('show-basic-calc');
    
    if (calculator.style.display === 'none') {
      calculator.style.display = 'block';
      button.textContent = 'Hide Calculator';
      calculator.scrollIntoView({ behavior: 'smooth' });
    } else {
      calculator.style.display = 'none';
      button.textContent = 'Open Basic Calculator';
    }
  }
  
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
  
  // Event Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayBots(btn.getAttribute('data-category'));
    });
  });
  
  closeModal.addEventListener('click', closeModalFunc);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
  });
  
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  document.getElementById('show-basic-calc').addEventListener('click', toggleCalculator);
  document.getElementById('calculate-btn').addEventListener('click', calculateSpecs);
  
  // Initialize when page loads
  document.addEventListener('DOMContentLoaded', function() {
    displayBots();
  });