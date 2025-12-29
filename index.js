gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const introCont = document.querySelector('.intro-content');
const introTit = document.querySelector('.intro-tit');
const introTitChar = new SplitText(introTit, {
    type : 'chars',
});

const tl = gsap.timeline({
    repeat:-1,
    ease:'power2out',
});

gsap.from(introTitChar.chars, {
    y : '100%',
    duration : 1,
    opacity : 0,
    stagger : .1,
})

gsap.from('.intro-content',{
    opacity : 0,
    duration : 2,
    delay:1
})

gsap.from('.about-tit',{
    scrollTrigger: {
        trigger:'.about',
        start:'top 80%',
        toggleActions: 'play reverse play reverse',
    },

    duration:1.5,
    opacity: 0,
    y:'100%',
    ease:'power3.inout',
})

gsap.from('.profile-wrap', {
    scrollTrigger: {
        trigger:'.about',
        start:'top 80%',
        toggleActions: 'play reverse play reverse',
    },

    duration:1,
    opacity: 0,
    delay:1,
    ease:'power3.inout',
})

gsap.from('.portfolio h2', {
    scrollTrigger: {
        trigger:'.portfolio',
        toggleActions: 'play reverse play reverse',
    },
    
    duration:1,
    opacity: 0,
    y:'100%',
    ease:'power3.inout',
})

tl.to('.scroll-down', {
    y:0,
    opacity:0.5,
    duration: 1,
}).to('.scroll-down', {
    y:'50%',
    opacity:1,
    duration: 1,
}).to('.scroll-down', {
    y:0,
    opacity:0.5,
    duration: 1,
})

const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const portBtn = document.querySelector('.portfolio-btn');

homeBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // 이동할 y 좌표
        left: 0,    // 이동할 x 좌표
        behavior: "smooth",
    });
});

aboutBtn.addEventListener("click", () => {
    const target = document.querySelector(".about");

    target.scrollIntoView({
        behavior: "smooth",
        block: "start" // 요소의 시작 지점으로
    });
});

portBtn.addEventListener("click", () => {
    const target = document.querySelector(".portfolio");

    target.scrollIntoView({
        behavior: "smooth",
        block: "start" // 요소의 시작 지점으로
    });
});


gsap.from('.portfolio-list', {
    scrollTrigger: {
        trigger:'.portfolio',
        start:'top 80%',
        toggleActions: 'play reverse play reverse',
    },

    duration:1,
    opacity: 0,
    delay:1,
    ease:'power3.inout',
})
