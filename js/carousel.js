function initCarousel() {
    if (window.innerWidth <= 900) return;
    var grid  = document.querySelector('.portfolio-grid');
    var left  = document.querySelector('.carousel-overlay--left');
    var right = document.querySelector('.carousel-overlay--right');
    if (!grid || !left || !right) return;

    function step(dir) {
        var card = grid.querySelector('.art-card');
        var w = card ? card.offsetWidth : 400;
        grid.scrollBy({ left: dir * w, behavior: 'smooth' });
    }

    // Clone to drop any stale listeners from previous Swup visits
    var l2 = left.cloneNode(true);
    var r2 = right.cloneNode(true);
    left.parentNode.replaceChild(l2, left);
    right.parentNode.replaceChild(r2, right);

    l2.addEventListener('click', function() { step(-1); });
    r2.addEventListener('click', function() { step(1); });
}

document.addEventListener('DOMContentLoaded', initCarousel);
