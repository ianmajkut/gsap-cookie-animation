// gsap.to('elemento',{propiedadAAnimar: valor, opacity: valor ,duration: secs})
// gsap.to(".text", { y: 200, opacity: 0, duration: 1 });
// gsap.fromTo(".text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

//Timeline nos permite que las animaciones corran una con la otra
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookies-con",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);
//El "<" hace que se sincronice con la animación previa
//si le colocamos el porcentaje indica que a x% de la animación
//se va a disparar la otra
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

//Cookie jump
//yoyo hace ese efecto de subir y bajar
//y el repeat: -1 lo hace indefinidamente
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");

//Fade de la cookie
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookies-con", {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: "power1.out",
  });
});
