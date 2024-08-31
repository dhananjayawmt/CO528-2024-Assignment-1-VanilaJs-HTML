const angleInput = document.getElementById('angleInput');
const angleSlider = document.getElementById('angleSlider');
const radios = document.querySelectorAll('input[name="angles"]');

function updateValue(value) {
    const clampedValue = Math.max(0, Math.min(360, value));
    angleInput.value = clampedValue;
    angleSlider.value = clampedValue;
    radios.forEach(radio => {
        radio.checked = (radio.value == clampedValue);
    });
}

angleInput.addEventListener('input', (e) => updateValue(e.target.value));
angleSlider.addEventListener('input', (e) => updateValue(e.target.value));
radios.forEach(radio => {
    radio.addEventListener('change', (e) => updateValue(e.target.value));
});
