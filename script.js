// Bot data
const bots = [
    {
      id: 'mighty-mouse',
      name: 'Mighty Mouse',
      category: '1lb',
      description: 'A nimble 1lb bot with exceptional speed and maneuverability.',
      image: 'images/placeholder.png',
      specs: {
        weight: '1lb (453g)',
        dimensions: '4" x 4" x 2"',
        weapon: 'Vertical spinner',
        motor: 'Brushless 1204 4800KV',
        batteryType: '2S LiPo 450mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/mighty-mouse',
      cadFiles: ['mighty_mouse_frame.stl', 'mighty_mouse_weapon.stl'],
      blogContent: `
        <h3>The Making of Mighty Mouse</h3>
        <p>Mighty Mouse was our first venture into the 1lb weight class. Designed with speed and agility in mind, this bot can outmaneuver opponents while delivering devastating blows with its vertical spinner.</p>
        <p>The development process began with extensive CAD modeling to optimize weight distribution. We wanted to create a bot that was both fast and stable, which required careful consideration of component placement.</p>
        <h4>Design Challenges</h4>
        <p>One of the biggest challenges was fitting all the necessary components within the 1lb weight limit. We opted for a minimalist frame design and lightweight materials to save weight for the weapon system.</p>
        <p>The vertical spinner weapon was chosen for its effectiveness against a variety of opponents. It provides good ground clearance while being able to inflict significant damage.</p>
        <h4>Competition Performance</h4>
        <p>Mighty Mouse has competed in several regional competitions, with its most notable victory being a first-place finish at the Toronto Robotics Championship. Its speed and maneuverability have proven to be significant advantages in the arena.</p>
      `
    },
    {
      id: 'victorious-monty',
      name: 'Victorious Monty',
      category: '1lb',
      description: 'A well-balanced 1lb bot with a powerful horizontal spinner.',
      image: 'images/placeholder.png',
      specs: {
        weight: '1lb (453g)',
        dimensions: '5" x 4" x 1.5"',
        weapon: 'Horizontal spinner',
        motor: 'Brushless 1306 4000KV',
        batteryType: '2S LiPo 500mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/victorious-monty',
      cadFiles: ['victorious_monty_frame.stl', 'victorious_monty_weapon.stl'],
      blogContent: `
        <h3>Victorious Monty: The Horizontal Threat</h3>
        <p>Victorious Monty represents our exploration into horizontal spinner weapons in the 1lb class. Named after a team member's pet python, this bot brings a unique combination of reach and power to the arena.</p>
        <p>The horizontal spinner extends beyond the frame, allowing Monty to strike opponents while maintaining a safe distance. This design philosophy prioritizes offensive capability while minimizing vulnerability.</p>
        <h4>Engineering Innovations</h4>
        <p>We implemented several innovative features in Victorious Monty, including a custom-designed weapon motor mount that allows for quick replacement between matches. The frame utilizes a monocoque design for maximum structural integrity while minimizing weight.</p>
        <p>The weapon bar is made from hardened S7 tool steel, providing excellent durability and impact resistance. We've carefully balanced the bar to minimize vibrations during high-speed operation.</p>
        <h4>Tournament History</h4>
        <p>Victorious Monty has participated in five tournaments to date, with three podium finishes. Its most memorable match was against a vertical spinner where Monty's extended reach proved decisive in keeping the opponent at bay while inflicting damage.</p>
      `
    },
    {
      id: 'lebot-james',
      name: 'Lebot James 🏀',
      category: '1lb',
      description: 'A basketball-themed 1lb bot with surprising power and slam capabilities.',
      image: 'images/placeholder.png',
      specs: {
        weight: '1lb (453g)',
        dimensions: '4.5" x 4.5" x 2"',
        weapon: 'Overhead hammer',
        motor: 'Brushless 1104 5000KV',
        batteryType: '2S LiPo 450mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/lebot-james',
      cadFiles: ['lebot_james_frame.stl', 'lebot_james_weapon.stl'],
      blogContent: `
        <h3>Lebot James: Bringing Basketball to the Arena</h3>
        <p>Lebot James is our tribute to basketball excellence in robot form. This 1lb bot features a unique overhead hammer weapon designed to "slam dunk" opponents into submission.</p>
        <p>The basketball theme extends beyond just the name - the bot features orange and black color schemes, and the hammer head is designed to resemble a basketball. Even the driving style mimics basketball movements, with quick direction changes and "jukes" to outmaneuver opponents.</p>
        <h4>Technical Specifications</h4>
        <p>The overhead hammer is powered by a high-torque servo motor that allows for precise control and rapid strikes. We've implemented a custom gear reduction system to maximize impact force while maintaining speed.</p>
        <p>The drive system uses four independently controlled wheels for maximum maneuverability, allowing Lebot to perform "crossover" moves to dodge incoming attacks.</p>
        <h4>Fan Favorite</h4>
        <p>While not always the tournament winner, Lebot James has consistently been voted "Fan Favorite" at competitions due to its unique theme and entertaining driving style. The crowd goes wild whenever Lebot lands a successful "slam dunk" on an opponent!</p>
        <p>Future iterations may include a pneumatic system to increase hammer power, though maintaining weight restrictions remains a challenge.</p>
      `
    },
    {
      id: 'pancake-flipper',
      name: 'Pancake Flipper',
      category: '3lb',
      description: 'A 3lb bot with a powerful pneumatic flipper that can launch opponents into the air.',
      image: 'images/placeholder.png',
      specs: {
        weight: '3lb (1.36kg)',
        dimensions: '7" x 5" x 2"',
        weapon: 'Pneumatic flipper',
        motor: 'Brushless 2205 2600KV',
        batteryType: '3S LiPo 950mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/pancake-flipper',
      cadFiles: ['pancake_flipper_frame.stl', 'pancake_flipper_mechanism.stl'],
      blogContent: `
        <h3>Pancake Flipper: Tossing the Competition</h3>
        <p>Pancake Flipper was inspired by the classic breakfast routine - flipping pancakes. We took that concept and applied it to combat robotics with spectacular results.</p>
        <p>This 3lb bot features a powerful pneumatic flipper capable of launching opponents completely out of the arena. The flipper covers nearly the entire front section of the bot, providing a large target area to get under opponents.</p>
        <h4>Pneumatic System</h4>
        <p>The heart of Pancake Flipper is its custom-designed pneumatic system. We use a small CO2 cartridge that provides enough pressure for multiple flips during a match. The system is regulated to ensure consistent performance throughout the competition.</p>
        <p>The flipper arm is made from aircraft-grade aluminum for the optimal balance of strength and weight. We've designed the system to reset quickly, allowing for rapid consecutive attacks.</p>
        <h4>Strategic Advantages</h4>
        <p>Pancake Flipper excels against opponents with high ground clearance or top-heavy designs. The driving strategy focuses on positioning and timing - getting under an opponent and activating the flipper at precisely the right moment.</p>
        <p>The bot has proven particularly effective against horizontal spinners, as it can attack them from the front where the weapon isn't as effective. Several matches have been won by flipping opponents onto their backs, rendering them unable to self-right.</p>
      `
    },
    {
      id: 'chop-chop',
      name: 'Chop Chop',
      category: '3lb',
      description: 'A 3lb bot with a deadly overhead axe that can penetrate armor.',
      image: 'images/placeholder.png',
      specs: {
        weight: '3lb (1.36kg)',
        dimensions: '8" x 6" x 4"',
        weapon: 'Overhead axe',
        motor: 'Brushless 2204 2300KV',
        batteryType: '3S LiPo 850mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/chop-chop',
      cadFiles: ['chop_chop_frame.stl', 'chop_chop_weapon.stl'],
      blogContent: `
        <h3>Chop Chop: Precision Strikes</h3>
        <p>Chop Chop brings the ancient art of axe combat to the modern robot arena. This 3lb bot features a powerful overhead axe designed to penetrate opponent armor and damage internal components.</p>
        <p>The name "Chop Chop" reflects both the weapon style and our design philosophy of quick, repeated strikes. Unlike some axe bots that rely on single, powerful hits, Chop Chop can deliver multiple rapid strikes in succession.</p>
        <h4>Weapon Design</h4>
        <p>The axe head is made from hardened tool steel with a sharpened edge for maximum penetration. We've carefully balanced the weapon to allow for quick retractions after strikes, minimizing the vulnerability window.</p>
        <p>The axe is powered by a combination of a high-torque servo and a spring-loaded mechanism that stores energy for powerful strikes. This hybrid approach allows for both power and control.</p>
        <h4>Defensive Capabilities</h4>
        <p>Chop Chop isn't just about offense. The bot features a heavily armored front section that doubles as a wedge, allowing it to deflect horizontal spinners and get underneath opponents. The sides are protected by hardened polycarbonate panels that can withstand significant impacts.</p>
        <p>The axe itself serves as a self-righting mechanism. If Chop Chop is flipped over, the axe can be used to push against the arena floor and right the bot - a feature that has saved us in several close matches.</p>
      `
    },
    {
      id: 'terminated',
      name: 'Terminated',
      category: '3lb',
      description: 'A 3lb bot with an intimidating appearance and a powerful crushing weapon.',
      image: 'images/placeholder.png',
      specs: {
        weight: '3lb (1.36kg)',
        dimensions: '7" x 7" x 3"',
        weapon: 'Hydraulic crusher',
        motor: 'Brushless 2206 2400KV',
        batteryType: '3S LiPo 1000mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/terminated',
      cadFiles: ['terminated_frame.stl', 'terminated_weapon.stl'],
      blogContent: `
        <h3>Terminated: The Unstoppable Crusher</h3>
        <p>Terminated draws inspiration from sci-fi movies, with a menacing appearance and relentless fighting style. This 3lb bot features a powerful crushing weapon designed to pierce armor and immobilize opponents.</p>
        <p>The red LED "eyes" and metallic skull-like appearance make Terminated instantly recognizable in the arena. The psychological impact on opponents shouldn't be underestimated - several competitors have made driving errors when faced with Terminated's intimidating approach.</p>
        <h4>Crushing Mechanism</h4>
        <p>The heart of Terminated is its hydraulic crushing arm. Using a custom-designed miniature hydraulic system, the crusher can exert over 500 pounds of pressure at the tip - more than enough to penetrate most armor used in the 3lb class.</p>
        <p>The crusher arm is shaped to trap opponents once grabbed, making escape difficult. This allows Terminated to control the match by grabbing an opponent and dragging them around the arena or into hazards.</p>
        <h4>Control System</h4>
        <p>Terminated features one of our most advanced control systems, with pressure sensors in the crusher arm that provide feedback to the operator. This allows for precise control of crushing force - enough to damage components without wasting energy.</p>
        <p>The drive system uses four independently controlled wheels with high-traction rubber tires, giving Terminated excellent pushing power once it has an opponent in its grasp.</p>
      `
    },
    {
      id: 'richard',
      name: 'Richard',
      category: '30lb',
      description: 'Our flagship 30lb bot with a devastating horizontal spinner and advanced control systems.',
      image: 'images/placeholder.png',
      specs: {
        weight: '30lb (13.6kg)',
        dimensions: '16" x 14" x 6"',
        weapon: 'Horizontal spinner',
        motor: 'Brushless 5208 280KV',
        batteryType: '6S LiPo 5000mAh'
      },
      githubLink: 'https://github.com/TMU-BattleBots/richard',
      cadFiles: ['richard_frame.stl', 'richard_weapon.stl'],
      blogContent: `
        <h3>Richard: The Heavyweight Champion</h3>
        <p>Richard represents the pinnacle of our combat robotics engineering. Named after our founding team captain, this 30lb bot combines raw power with sophisticated control systems to dominate the heavyweight division.</p>
        <p>The development of Richard took over six months, with countless hours spent on design, simulation, testing, and refinement. The result is a bot that has won three consecutive regional championships.</p>
        <h4>Weapon System</h4>
        <p>Richard's primary weapon is a massive horizontal spinner that spans nearly the entire width of the bot. The bar is machined from a single piece of S7 tool steel and weighs approximately 8 pounds - over 25% of the bot's total weight allowance.</p>
        <p>The weapon is powered by a custom-wound brushless motor that delivers over 2 horsepower at maximum speed. The spinner can reach 9,000 RPM, storing an incredible amount of kinetic energy that can tear through opponent armor with ease.</p>
        <h4>Advanced Electronics</h4>
        <p>What truly sets Richard apart is its advanced control system. The bot features a custom-designed control board with gyroscopic stabilization that helps maintain control during intense weapon impacts. The system can detect when the bot is unstable and automatically adjust the drive power to compensate.</p>
        <p>Richard also includes telemetry systems that provide real-time data to the operator, including weapon speed, motor temperatures, battery voltage, and impact detection. This information allows for strategic adjustments during matches.</p>
        <h4>Tournament Success</h4>
        <p>Richard's competition record speaks for itself: 15 wins, 2 losses over three major tournaments. The bot has become something of a legend in the regional circuit, with opponents often modifying their designs specifically to counter Richard's powerful weapon system.</p>
        <p>We continue to refine and improve Richard with each competition, implementing lessons learned and exploring new technologies. The current iteration (Mark IV) features improved armor mounting, better heat management, and an upgraded weapon controller.</p>
      `
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
      <div class="modal-blog">
        ${bot.blogContent}
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
