// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
}