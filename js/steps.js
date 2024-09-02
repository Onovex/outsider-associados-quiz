const stepsContainer = document.querySelector('[data-section-steps]');
const loadingContainer = document.querySelector('[data-section-loading]');
const finalContainer = document.querySelector('[data-section-final]')

document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('[data-title-step]');
    const stepButtons = document.querySelectorAll('[data-step-button]')
    const stepGuides = document.querySelectorAll('[data-guide-step]')

    // Deixa visivel os componentes primeiro passo
    titles[0].classList.add('show');
    stepButtons[0].classList.add('show');
    stepButtons[3].classList.add('show');

    stepButtons.forEach(button => {
        button.addEventListener('click', (ev) => {

            const step = Number(button.dataset.stepButton);
            const stepIndex = step - 1;

            if (step === 3) {
                stepsContainer.classList.remove('show-flex');

                setTimeout(() => {
                    stepsContainer.style.display = 'none';
                    loadingContainer.style.display = 'flex';
                    setTimeout(() => {
                        loadingContainer.classList.add('show');

                            setTimeout(() => {
                                document.dispatchEvent(new CustomEvent('change-to-final'))
                            }, 4200)
                    }, 10);
                }, 500);

                return
            }

            const hideTitle = titles[stepIndex];
            const hideButtonYes = stepButtons[stepIndex];
            const hideButtonNo = stepButtons[stepIndex + 3];
            const hideStepGuide = stepGuides[stepIndex];

            const showTitle = titles[step];
            const showButtonYes = stepButtons[step];
            const showButtonNo = stepButtons[step + 3];
            const showStepGuide = stepGuides[step];

            hideTitle.classList.remove('show');
            hideButtonYes.classList.remove('show');
            hideButtonNo.classList.remove('show');
            hideStepGuide.classList.remove('step-emphasis');
        
            setTimeout(() => {
                hideTitle.style.display = 'none';
                hideButtonYes.style.display = 'none';
                hideButtonNo.style.display = 'none';


                showTitle.style.display = 'block';
                showButtonYes.style.display = 'block';
                showButtonNo.style.display = 'block';
                setTimeout(() => {
                    showTitle.classList.add('show');
                    showButtonYes.classList.add('show');
                    showButtonNo.classList.add('show');
                    showStepGuide.classList.add('step-emphasis');

                }, 10);
            }, 500);
        });
    })
});

document.addEventListener('change-to-final', () => {
    loadingContainer.classList.remove('show');

    setTimeout(() => {
        loadingContainer.style.display = 'none';
        finalContainer.style.display = 'flex';
        setTimeout(() => {
            finalContainer.classList.add('show');
        }, 10);
    }, 500);
})