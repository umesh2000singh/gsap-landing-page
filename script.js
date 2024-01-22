gsap.from(".logo ,.second-part h1, .third-part h1, .third-part button",{
    y:-100,
    duration:.5,
    delay:0.3,
    opacity:0,
    stagger:.1,
})

gsap.from("#hero h1",{
    delay:0.3,
    y:50,
    delay:.3,
    stagger:.1,

    opacity:0
    
})

gsap.from(".left-image, .right-image",{
    x:100,
    opacity:0,
    duration:1
})