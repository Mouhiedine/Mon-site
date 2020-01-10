TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  loopBottom: true,
  
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");


    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    

    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".tailleImage");
      const description = document.querySelector(".tailleTexteEtiqueteuse");

      tl.fromTo(chairs, 0.3, { x: "-100%" }, { x: "-50%" })
        
        .fromTo(chairs, 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(description,1,{ opacity: 0 },{  opacity: 1 })
    }


    if (destination.index === 2) {
      const chairs = document.querySelectorAll(".tailleImageKadjar");
      const description = document.querySelector(".tailleTexteRenault");

      tl.fromTo(chairs, 0.7, { x: "150%" }, { x: "-50%" })
        
  
        .fromTo(description,.5,{ opacity: 0 },{  opacity: 1 })
      
    }

    if (destination.index === 3) {
      const delta = document.querySelectorAll(".tailleImageDelta");
      const chairs = document.querySelectorAll(".tailleImageSerenity");
      const description = document.querySelector(".tailleTexteRowenta");

      tl.fromTo(chairs, 1, { x: "-200%" }, { x: "-50%" })
        .fromTo(delta, 1, { opacity: 0 }, { opacity: 1 })
      
        .fromTo(description,1,{ opacity: 0 },{  opacity: 1 })
    }

    if (destination.index === 4) {
      const chairs = document.querySelectorAll(".tailleImageVersatile");
      const description = document.querySelector(".tailleTexteRowenta2");

      tl.fromTo(chairs, 0.3, { x: "-100%" }, { x: "-50%" })
        
        .fromTo(chairs, 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(description,1,{ opacity: 0 },{  opacity: 1 })
    }
  }
});
