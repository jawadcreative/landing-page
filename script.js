let btn = document.querySelector('#heroBtn')
gsap.registerPlugin(ScrollTrigger, SplitText)

// hero big text animation
const split = SplitText.create('.zeyna', { type: 'chars' })

split.chars.map(element => {
    element.addEventListener('mouseenter', () => {
        console.log('enter')
        gsap.to(element, {
            rotateY: 180
        })
    })
    element.addEventListener('mouseleave', () => {
        console.log('enter')
        gsap.to(element, {
            rotateY: 0
        })
    })
});

// button animation
let splt1 = SplitText.create('.btnText1', { type: 'chars' })
let splt2 = SplitText.create('.btnText2', { type: 'chars' })

let tl = gsap.timeline({ paused: true })
tl.to(splt1.chars, {
    yPercent: -100,
    stagger: 0.03,
    ease: 'linear',
    duration: .3
}, 0)
tl.to(splt2.chars, {
    yPercent: -100,
    stagger: 0.03,
    ease: 'linear',
    duration: .3
}, 0)

btn?.addEventListener('mouseenter', () => {
    tl.play()
})
btn?.addEventListener('mouseleave', () => {
    tl.reverse()
})

// heroH1 animation
let heroSplit = SplitText.create('.heroH1', { type: 'chars, lines', linesClass: 'overflow-hidden' })

let tl2 = gsap.timeline()

tl2.from(heroSplit.lines, {
    yPercent: 100,
    stagger: 0.5,
    opacity: 0
})

tl2.to('.reveal', {
    '--p': '100%',
    duration: 1,
    ease: 'power3.inOut'
})

const cards = document.querySelectorAll('[data-card]')

function open(card) {
    cards.forEach(c => (c.dataset.active = c === card ? 'true' : 'false'))
}

cards.forEach(card => {
    card.addEventListener('mouseenter', () => open(card))
    card.addEventListener('focus', () => open(card))
    card.addEventListener('click', () => open(card)) // touch devices
})


// Navbar
let menuBtn = document.querySelector("#menu-btn");
    let mobileMenu = document.querySelector("#mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      let isOpen = !mobileMenu.classList.contains("hidden");

      menuBtn.innerHTML = isOpen ? "&times;" : `<i class="ri-menu-4-line"></i>`;
      menuBtn.setAttribute("aria-expanded", isOpen);
    });