document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#registration-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

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

  // Select elements to animate
  const animateElements = document.querySelectorAll('.feature-card, .card, article, section .container > div');
  animateElements.forEach(el => observer.observe(el));
});
