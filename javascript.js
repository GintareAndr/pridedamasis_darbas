console.log("HELLO");

function toggle_menu() {
    var menuBackground = document.querySelector('.hidden-content');
    menuBackground.style.display = (menuBackground.style.display === 'block') ? 'none' : 'block';
}

function close_content() {
    toggle_menu();
}

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.close-content');
    closeButton.addEventListener('click', function() {
        close_content();
    });
});