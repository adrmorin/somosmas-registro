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
    <div style="text-align: center; padding: 4rem 2rem;">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#388e3c"/>
        <path d="M30 50L45 65L70 35" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 style="margin-top: 2rem; color: var(--success-green);">¡Registro Completado!</h2>
      <p style="margin-top: 1rem; color: var(--medium-text); font-size: 1.1rem;">Muchas gracias por sumarte a Somos+. Tu información ha sido recibida y nos pondremos en contacto contigo pronto.</p>
      <button id="reset-btn" class="form__button" style="margin-top: 2rem;">Regresar al formulario</button>
    </div>
  `;

    document.querySelector('#reset-btn').addEventListener('click', () => {
        location.reload();
    });
}
