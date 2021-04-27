$(document).ready(function() {
    $(".hamburger-menu").click(function() {
        $(".hamburger-menu-icon").toggleClass('close');
        $(".menu-wrapper").toggleClass("hamburger-menu-wrapper");
        $(".menu").toggleClass("hamburger-dropdown-menu")
    });
});