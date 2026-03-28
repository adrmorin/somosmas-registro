// Portal State and UI Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial State Check
    // For the mockup, we start with Onboarding step 1
    const onboarding = document.getElementById('onboarding');
    const dashboard = document.getElementById('dashboard');
    
    // Simulate user status
    let isLogged = false;
    let onboardingStep = 1;

    // Elements
    const stepDots = document.querySelectorAll('.step-dot');
    const onboardingForm = document.getElementById('onboardingForm');
    const welcomeVideoSection = document.getElementById('welcomeVideoSection');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    // 2. Navigation between Onboarding steps
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulating completion after registration
            isLogged = true;
            document.getElementById('onboarding').style.display = 'none';
            document.getElementById('dashboard').classList.add('active');
        });
    }

    if (finishBtn) {
        finishBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulating completion
            isLogged = true;
            document.getElementById('onboarding').style.display = 'none';
            document.getElementById('dashboard').classList.add('active');
        });
    }



    // 3. Dashboard Module Navigation
    const navItems = document.querySelectorAll('.nav-item[data-module]');
    const modules = document.querySelectorAll('.module-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleId = item.getAttribute('data-module');

            // Update Nav UI
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Content UI
            modules.forEach(mod => {
                mod.classList.toggle('active', mod.id === moduleId);
            });

            // If mobile, scroll to main area
            if (window.innerWidth < 900) {
                document.getElementById('dashboardMain').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Initial Launch
    if (onboarding) {
        onboarding.classList.add('active');
    }
});
