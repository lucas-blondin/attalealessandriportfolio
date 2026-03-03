function initImages() {
    document.querySelectorAll('img:not(.img-init)').forEach(function (img) {
        img.classList.add('img-init');
        img.setAttribute('loading', 'lazy');
        if (img.complete && img.naturalWidth !== 0) {
            img.classList.add('img-loaded');
        } else {
            img.addEventListener('load', function () {
                img.classList.add('img-loaded');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', initImages);
