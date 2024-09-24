document.getElementById('theme-selector').addEventListener('change', function () {
    const selectedTheme = this.value;
    const body = document.body;

    if (selectedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
