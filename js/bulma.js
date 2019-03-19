// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });


    var burger2 = document.querySelector('#navbarBurger');
    var menu2 = document.querySelector('#'+burger2.dataset.target);
    burger2.addEventListener('click', function() {
        burger2.classList.toggle('is-active');
        menu2.classList.toggle('is-active');
    });
})();
