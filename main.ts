function toggleMenu(): void {
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}
 