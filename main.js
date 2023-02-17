let skills = document.querySelector('.skills')
let ranges = document.querySelectorAll('.skill-item .range')
let stat = document.querySelector('.las-stat')
let numbers = document.querySelectorAll('.counter .number')
let start = false;

function startCount(el) {
    let num = el.dataset.num;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == num) {
            clearInterval(count)
        }
    }, 2000 / num)
}

window.onscroll = function () {
    console.log(window.scrollY);

    if (window.scrollY >= skills.offsetTop) {
        ranges.forEach((range) => range.style.width = range.dataset.before)
    }


    if (window.scrollY >= stat.offsetTop) {
        if (!start) {
            numbers.forEach((number) => startCount(number));
        };
        start = true
    }

}

