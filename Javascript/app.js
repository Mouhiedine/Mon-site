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
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      const bouton = document.querySelector(".boutonBoite");
      tl.fromTo(chairs, 0.7, { x: "120%" }, { x: "-50%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 3, { opacity: 0 }, { opacity: 1 })
        .fromTo(bouton, 1, { opacity: 0 }, { opacity: 1 });

    }



    if (destination.index === 4) {
      const chairs = document.querySelector(".chair3");
      const description = document.querySelector(".description4");
      tl.fromTo(chairs, 0.3, { x: "100%" }, { x: "-50%" })
        .fromTo(
          description,
          0.7,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(chairs, 1.5, { opacity: 0 }, { opacity: 1 })
    }
  }
});
