var content = document.getElementById('bodyContent');

content.onclick = function () {
    var clicked = this;

    window.setTimeout(function () {
        clicked.innerHTML = "Sorry I can't do that Dave";
        clicked.classList.toggle('hal');

        window.setTimeout(function () {
            clicked.classList.toggle('angry');
        }, 1000);
    }, 300);
};
