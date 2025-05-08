// Sequence of animations
window.onload = () => {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const nameAnimation = document.getElementById('name-animation');
    const tagline = document.getElementById('tagline');
    const intro = document.getElementById('intro');
    const particles = document.getElementById('particles-js');
    const mainContent = document.getElementById('main-content');
  
    // Step 1: Show Line1
    setTimeout(() => {
      line1.style.opacity = 1;
    }, 500);
  
    // Step 2: Hide Line1, Show Line2
    setTimeout(() => {
      line1.style.opacity = 0;
      line2.style.opacity = 1;
    }, 2500);
  
    // Step 3: Hide Line2, Show Name
    setTimeout(() => {
      line2.style.opacity = 0;
      nameAnimation.style.opacity = 1;
    }, 5000);
  
    // Step 4: Show Tagline
    setTimeout(() => {
      tagline.style.opacity = 1;
    }, 7000);
  
    // Step 5: Fade out intro, show main + particles
    setTimeout(() => {
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.style.display = 'none';
        particles.style.display = 'block';
        mainContent.style.display = 'block';
        initParticles();
      }, 1000);
    }, 9500);
  };
  
  // Particles.js config
  function initParticles() {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00f0ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00f0ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": false },
          "onclick": { "enable": false },
          "resize": true
        }
      },
      "retina_detect": true
    });
  }
  