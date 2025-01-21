function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        mainContent.style.marginLeft = '250px';
    } else {
        mainContent.style.marginLeft = '0';
    }
}

// Initialize sidebar visibility
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.style.display = 'block';
    sidebar.classList.remove('active');
    mainContent.style.marginLeft = '0';
});
