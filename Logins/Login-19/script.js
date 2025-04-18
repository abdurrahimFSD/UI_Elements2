document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('.password-field');
    let show = document.querySelector('.show');

    show.addEventListener('click', function() {
        if (input.type === 'password') {
            input.type = "text";
            show.querySelector('i').className = 'fa-solid fa-eye-slash';
            show.style.color = "#1DA1F2";
        } else {
            input.type = "password";
            show.querySelector('i').className = 'fa-solid fa-eye';
            show.style.color = "#111";
        }
    });
});