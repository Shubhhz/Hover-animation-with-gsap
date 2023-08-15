
var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame")
// window.addEventListener("mousemove",function(dets){
//     // console.log(dets.clientX,dets.clientY)
//     circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`

// })
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
window.addEventListener("mousemove",function(dets){
   gsap.to(circle,{
    x:dets.clientX,
    y:dets.clientY,
    duration: 0.2 ,
    ease:Expo ,

   })
})
frame.addEventListener("mousemove",function(dets){
    var dims = frame.getBoundingClientRect();
    // console.log(dims);
    var xstart=dims.x;
    var xend = dims.x+ dims.width;
    var zeroone=gsap.utils.mapRange(xstart , xend ,0 ,1,dets.clientX);
   
    gsap.to(circle,{
        scale:8
    })
    gsap.to(".frame span",{
        color :"#fff",
        duration: 0.3,
        y: "-5vw"
    } )
    gsap.to(".frame span",{
        x: lerp(-50 , 50 , zeroone),
        duration: .3
    })
})
frame.addEventListener("mouseleave",function(dets){
    gsap.to(circle,{
        scale:1 
    })
    gsap.to(".frame span",{
        color :"#000",
        duration: 0.3,
        y:"0vw"
    } )
    gsap.to(".frame span",{
        x: 0,
        duration: .3
    })
})