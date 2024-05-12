anime({
    targets: '.container-cards',
    translateX: -3100,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 2 * 10 * 1000,
});

var animation = anime({
    targets: '.blue_text',
    translateX: -2350,
    loop: true,
    delay: function (el, i) { return i * 200; },
    easing: 'easeInOutSine',
    duration: 30000,
});

document.querySelector('.blue_text').onclick = animation.reverse;

document.addEventListener('scroll', function () {
    let parallax = (window.scrollY / 2) + 'px';
    anime({
        targets: '.block',
        translateY: parallax,
        easing: 'linear',
        duration: 100,
    });
});
