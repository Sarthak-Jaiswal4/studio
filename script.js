function loading(){
    var t1=gsap.timeline()

t1.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out",
});
t1.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out",
},"anim");
t1.to("#loader h1",{
    delay:0.5,
    color:"black"
},"anim");
t1.to("#loader",{
    opacity:0,
});
t1.to("#loader",{
    display:"none",
});
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})

var elems=document.querySelectorAll("#elem")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        bgele=ele.getAttribute("data-img")
        document.querySelector("#page2").style.backgroundImage=`url(${bgele})`
    })
})