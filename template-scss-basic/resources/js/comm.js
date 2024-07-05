document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    const dl = document.querySelector('#gnb dl');
    const dd = document.querySelector('#gnb dd');

    // dl 마우스 오버시
    dl.addEventListener('mouseover', function () {
        dl.classList.add('active');
    });

    // dl 마우스 아웃시
    dl.addEventListener('mouseout', function () {
        dl.classList.remove('active');
    });
});
