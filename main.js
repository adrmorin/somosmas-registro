document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  const form = document.querySelector('#registration-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

       const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Password matching validation
      if (data.password && data.confirm_password && data.password !== data.confirm_password) {
        alert(document.documentElement.lang === 'es' ? 'Las contraseñas no coinciden' : 'Passwords do not match');
        return;
      }

      // Handle checkboxes (since Object.fromEntries only gets the last value)
      const multiValues = ['idioma', 'relacion', 'suscripcion'];
      multiValues.forEach(field => {
        const values = formData.getAll(field);
        if (values.length > 0) {
          data[field] = values;
        }
      });

      // Add Timestamp
      data.timestamp = new Date().toISOString();

      console.log('Form Submitted!', data);

      // Simple Success Feedback
      showSuccessMessage();
      form.reset();
    });
  }
});

function showSuccessMessage() {
  const container = document.querySelector('.registration');
  const originalContent = container.innerHTML;

  container.innerHTML = `
    <div style="text-align: center; padding: clamp(2rem, 8vw, 6rem) var(--spacing-lg);">
      <div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--success-green), #2e7d32); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 10px 25px rgba(56, 142, 60, 0.3);">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h2 style="margin-top: 2.5rem; color: var(--primary-blue);">¡Bienvenido(a) a Somos+!</h2>
      <p style="margin-top: 1.5rem; color: var(--medium-text); font-size: 1.15rem; line-height: 1.6; max-width: 500px; margin-inline: auto;">Muchas gracias por sumarte al cambio. Tu información ha sido recibida con éxito y nos pondremos en contacto contigo pronto para dar los siguientes pasos juntos.</p>
      <button id="reset-btn" class="form__button" style="margin-top: 3rem; width: auto; padding-inline: 4rem;">Regresar</button>
    </div>
  `;

  document.querySelector('#reset-btn').addEventListener('click', () => {
    location.reload();
  });
}

// Initialize Lucide Icons & Animations
window.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate (Cards, Hero text, and Sections)
  const animateElements = document.querySelectorAll('.feature-card, .card, article, section .container > div, .hero__title, .hero__subtitle, .hero__actions, .registration');
  animateElements.forEach(el => observer.observe(el));
  // Pointer illumination effect for any feature-card or element needing a spotlight
  const lightEffectElements = document.querySelectorAll('.feature-card, .doc-card, .blog-card');
  lightEffectElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Magnetic Effect for premium buttons and cards
  const magneticElements = document.querySelectorAll('.magnetic-btn, .nav__cta--join, .nav__cta--donate, .nav__link');
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Small movement for subtle premium feel
      el.style.transform = `translate(${distanceX * 0.15}px, ${distanceY * 0.15}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
});

// --- LOGIN MODAL LOGIC (FLOATING) ---
function createLoginModal() {
    const lang = document.documentElement.lang || 'es';
    const isEn = lang === 'en';

    // i18n content for the modal
    const content = {
        title: isEn ? 'Login' : 'Iniciar Sesión',
        subtitle: isEn ? 'Access your Somos+ account' : 'Accede con tu usuario de Somos+',
        userLabel: isEn ? 'Username / Email' : 'Usuario / Email',
        userPlaceholder: isEn ? 'Your username or email' : 'Tu usuario o email',
        passLabel: isEn ? 'Password' : 'Contraseña',
        enterBtn: isEn ? 'ENTER TO PORTAL' : 'ENTRAR AL PORTAL',
        forgot: isEn ? 'Forgot your password?' : '¿Olvidaste tu contraseña?',
        dest: isEn ? './portal-en.html' : './portal.html'
    };

    const modalHtml = `
        <div id="login-modal" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal-header">
                    <img src="./assets/logo-icon.jpg" alt="Somos+" style="width: 50px; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <h2>${content.title}</h2>
                    <p>${content.subtitle}</p>
                </div>
                <form id="modal-login-form" class="modal-form">
                    <div class="form-group">
                        <label>${content.userLabel}</label>
                        <input type="text" placeholder="${content.userPlaceholder}" required>
                    </div>
                    <div class="form-group">
                        <label>${content.passLabel}</label>
                        <input type="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="modal-btn" style="width: 100%; padding: 1.1rem; background: var(--accent-orange); color: white; border: none; border-radius: 1rem; font-weight: 800; letter-spacing: 0.1rem; cursor: pointer; transition: all 0.3s ease; margin-top: 1.5rem; box-shadow: 0 8px 15px rgba(255, 109, 0, 0.2);">${content.enterBtn}</button>
                    <div class="modal-footer">
                        <a href="#">${content.forgot}</a>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.querySelector('#login-modal');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    const form = modal.querySelector('#modal-login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Redirect based on current language
        window.location.href = content.dest;
    });
}

function openLoginModal(e) {
    if (e) e.preventDefault();
    let modal = document.querySelector('#login-modal');
    if (!modal) {
        createLoginModal();
        modal = document.querySelector('#login-modal');
    }
    setTimeout(() => modal.classList.add('active'), 10);
}

// Global listener for Login links to trigger the floating UI
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const text = link.textContent.trim();
    // Only intercept Iniciar Sesión / Login links to open the floating modal
    const isLoginLink = text.includes('Iniciar Sesión') || 
                        text.includes('Login') || 
                        (link.classList.contains('dropdown-link') && link.getAttribute('href').includes('portal.html'));

    if (isLoginLink) {
        // Prevent default navigation to point to the modal instead
        openLoginModal(e);
        
        // Also close mobile menu if it's currently open
        const nav = document.querySelector('.header__nav');
        const toggle = document.querySelector('.menu-toggle');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (toggle) toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    }
});

// Mobile Menu Logic
function setupMobileMenu() {
    const headerContainer = document.querySelector('.header__container');
    const headerNav = document.querySelector('.header__nav');
    
    if (!headerContainer || !headerNav) return;

    // Inject hamburger button if it doesn't exist
    if (!document.querySelector('.menu-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'menu-toggle';
        toggleBtn.setAttribute('aria-label', 'Tabler Menu');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        headerContainer.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            headerNav.classList.toggle('active');
            toggleBtn.innerHTML = headerNav.classList.contains('active') 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // Handle Dropdowns on mobile
    const dropdowns = document.querySelectorAll('.nav-item--dropdown');
    let dropdownTimeout = null;

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav__link');
        const chevron = link.querySelector('i');

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                e.stopPropagation();
                
                const isActive = dropdown.classList.toggle('active');

                // Toggle Chevron
                if (chevron) {
                    chevron.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
                }
                
                // Auto-collapse if no action within SIX seconds (6000ms)
                if (isActive) {
                    if (dropdownTimeout) clearTimeout(dropdownTimeout);
                    dropdownTimeout = setTimeout(() => {
                        dropdown.classList.remove('active');
                        if (chevron) chevron.style.transform = 'rotate(0deg)';
                    }, 6000); 
                } else if (dropdownTimeout) {
                    clearTimeout(dropdownTimeout);
                }
            }
        });

        // Click inside the dropdown (login/registro) resets timeout but DOES NOT stop propagation
        // Allowing the global listener to trigger modals
        dropdown.querySelector('.dropdown-menu').addEventListener('click', () => {
            if (dropdownTimeout) clearTimeout(dropdownTimeout);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const menu = document.querySelector('.header__nav');
        const toggle = document.querySelector('.menu-toggle');
        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('active');
            toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}
