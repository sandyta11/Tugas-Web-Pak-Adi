const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

// Tampilkan tombol toggle hanya jika ada input pada field password
passwordField.addEventListener('input', () => {
    togglePassword.style.display = passwordField.value.length > 0 ? 'block' : 'none';
});

// Fungsi untuk toggle visibility password
togglePassword.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.src = "assets/images/enable.png";
    } else {
        passwordField.type = 'password';
        togglePassword.src = "assets/images/disabble.png";
    }
});
