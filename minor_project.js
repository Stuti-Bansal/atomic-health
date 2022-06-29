function show(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

show()


document.querySelector("#menu").addEventListener("click", function(){
    document.querySelector("#fullScreenNav").style.left = 0;
})
document.querySelector("#menu1").addEventListener("click", function(){
    document.querySelector("#fullScreenNav").style.left ="-100vw";
})


gsap.from(["#left>h1","#left>h2","#left>h3"],{
    
    onStart:function(){
      $(["#left>h1","#left>h2","#left>h3"]).textillate({ 
        in: { effect: 'fadeInUp' } });
    },
    opacity:0,
    duration:2,
    y:40
})
gsap.from("#page>h1",{
  // opacity:0,
  // duration:2,
  scrollTrigger:{
    trigger:"#page>h1",
    scroller:"#main",
    makers:true,
    start:"top 60%"
},
  onStart:function(){
    $("#page>h1").textillate({ in: { effect: 'fadeInUp' } });
  },
  opacity:0,
  duration:1,
  // y:40,
  // delay:.8
})

gsap.from(["#page2img","#page2>h3"],{
    scrollTrigger:{
        trigger:"#page2img",
        scroller:"#main",
        makers:true,
        start:"top 60%"
    },
    opacity:0,
    rotateX:"60deg"
})
gsap.from(["#page3img","#page3>h3"],{
  scrollTrigger:{
      trigger:"#page3img",
      scroller:"#main",
      makers:true,
      start:"top 60%"
  },
  opacity:0,
  rotateX:"60deg"
})
gsap.from("#page4>h1",{
  // opacity:0,
//   scrollTrigger:{
//     trigger:["#page4>h1","#page4>h2"],
//     scroller:"#main",
//     makers:true,
//     start:"top 60%"
// },
  onStart:function(){
    $("#page4>h1").textillate({ in: { effect: 'fadeInUp' } });
  },
  duration:0.5,
  opacity:0,
  delay:5
})
gsap.from(["#page5img","#page5>h3"],{
  scrollTrigger:{
      trigger:"#page5img",
      scroller:"#main",
      makers:true,
      start:"top 60%"
  },
  opacity:0,
  rotateX:"60deg"
})
gsap.from(["#page6img","#page6>h3"],{
  scrollTrigger:{
      trigger:"#page6img",
      scroller:"#main",
      makers:true,
      start:"top 60%"
  },
  opacity:0,
  rotateX:"60deg",
  duration:1,
})



gasp.to("#right img",{
  // y: -100vh,
  ease: Power0.easeNone
})
