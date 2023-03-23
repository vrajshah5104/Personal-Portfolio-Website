const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let ActiveLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (ActiveLink != i) {
            links[ActiveLink].classList.remove('active');
            link.classList.add('active');
            sections[ActiveLink].classList.remove('active');

            setTimeout (() => {
                ActiveLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})