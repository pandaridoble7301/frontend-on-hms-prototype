// Example validation or dynamic interaction
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        let valid = true;

        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '2px solid green';
            }
        });

        if (!valid) {
            e.preventDefault();
            alert('Please fill in all fields correctly.');
        }
    });
});
