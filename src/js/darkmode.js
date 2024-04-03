// Fonction pour passer en dark-mode
$(document).ready(function () {
    $(".mode-switch").on("click", () => {
        $("body").toggleClass("dark-mode");
    });
})