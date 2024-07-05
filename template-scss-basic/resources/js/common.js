document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    const dl = document.querySelector('dl');
    const dd = document.querySelector('dd');

    // dl 마우스 오버시
    dl.addEventListener('mouseover', function () {
        dd.style.display = 'block';
    });
});
