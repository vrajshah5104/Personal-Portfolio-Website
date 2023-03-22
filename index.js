const links = document.querySelector('.link');
const sections = document.querySelector('section');

letActiveLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout (() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000)
        }
    })
})