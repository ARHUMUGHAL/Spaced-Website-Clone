(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();



function heroboxAnimation(){
    gsap.to("nav",{
        y : "100px",
        duration : 1.5
    })
    
    gsap.to(".herobox div .h2 h2",{
        y : "-120%",
        duration : 1.5
    })
    
    gsap.to(".herobox div .h1 h1",{
        y : "-100%",
        duration : 1.5
    })
    
    gsap.to(".herobox div a:nth-child(3)",{
        y : "-120%",
        opacity : 1,
        duration : .5
    })
    
    gsap.to(".herobox div a:nth-child(4)",{
        y : "-120%",
        opacity : 1,
        duration : .5
    })
}

heroboxAnimation()


function sectionOneAnimation(){
    gsap.to(".icons",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".icons",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".section-1-main-content h2",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-1-main-content h2",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".section-1-main-content h1",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-1-main-content h1",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    gsap.to(".section-1-main-content p",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-1-main-content p",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".box-1-icon img",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".box-1-icon img",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".box-1 .headingText h2",{
        y : "-100%",
        duration : 1,
        scrollTrigger : {
            trigger : ".box-1-icon img",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".box-1 p",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".box-1 p",
            start : "top 70%",
            end : "bottom 40%",
            toggleActions : 'play none none reset',
        }
    })
}

sectionOneAnimation()


function sectionTwoAnimation(){
    gsap.to(".section-2-image-area",{
        x : "-120%",
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-image-area",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".section-2-content-area h2",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-content-area h2",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".section-2-content-area .section-2-heading-text h1",{
        y : "-100%",
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-content-area .section-2-heading-text h1",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
    gsap.to(".section-2-content-area p.third-child",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-content-area p.third-child",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
    gsap.to(".section-2-content-area p:nth-child(4)",{
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-content-area p:nth-child(4)",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
    
    gsap.to(".section-2-content-area a",{
        opacity : 1,
        y : "-100%",
        duration : 1,
        scrollTrigger : {
            trigger : ".section-2-content-area a",
            start : "top 70%",
            end : "bottom 10%",
            toggleActions : 'play none none reset',
        }
    })
}

sectionTwoAnimation()