const hand1 = document.querySelector("#hand1");
const hand2 = document.querySelector("#hand2");
const scroller = document.querySelector(".scrolldown");
const histoire = document.querySelector(".histoire1");
const techniques = document.querySelector(".techniques");
const vision = document.querySelector(".mission");
const mission = document.querySelector(".philo");
const sportifs = document.querySelector(".sportifs");
const seniors = document.querySelector(".seniors");
const enceintes = document.querySelector(".enceintes");
const actifs = document.querySelector(".actifs");
const bebes = document.querySelector(".bebes");
const enfants = document.querySelector(".enfants");
const video2 = document.querySelector("#video2");
const group = document.querySelector("#group");
const chiro = document.querySelector(".tristandufour");
const chiro2 = document.querySelector(".simondewitte");
const horaires = document.querySelector(".horaires");
const tarifs = document.querySelector(".tarifs");
const loader = document.querySelector('.loader');
const social = document.querySelector('.social');
const titrechiro = document.querySelector('.titrechiro');
const titrepatients = document.querySelector('.titrepatients');
const titreinfospratiques = document.querySelector('.titreinfospratiques');
const titretraitements = document.querySelector('.titretraitements');
const titrecontact = document.querySelector('.titrecontact');
const nom = document.querySelector('.nom');
const prenom = document.querySelector('.prenom');
const formmessage = document.querySelector('.formmessage');
const email = document.querySelector('.email');
const formbutton = document.querySelector('.formbutton');
const votrenom = document.querySelector('.votrenom');
const votreprenom = document.querySelector('.votreprenom');
const votremessage = document.querySelector('.votremessage');
const votremail = document.querySelector('.votremail');


gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener('load', () => {

  loader.classList.add('fondu-out');
});

gsap.from(hand1, {
  scrollTrigger: "#hand1",
  opacity: 0,
  ease: "power2.out",
  duration: 10,
  delay: 1,
});

gsap.from(
  hand2,
  {
    scrollTrigger: "#hand2",
    opacity: 0,
    duration: 10,
    delay: 1,
  },
  "<"
);

gsap.to(scroller, {
  scrollTrigger: "#tete",
  opacity: 0,
  ease: "power2.out",
  duration: 2,
});

gsap.from(group, {
  scrollTrigger: "#group",
  y: +200,
  ease: "power2.out",
  duration: 2,
});


gsap.from(video2, {
  scrollTrigger: "#video2",
  opacity: 0,
  ease: "power2.out",
  duration: 3,
  delay: 0.1,
});


gsap.from(histoire, {
  scrollTrigger: ".histoire1",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(techniques, {
  scrollTrigger: ".techniques",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(vision, {
  scrollTrigger: ".mission",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(mission, {
  scrollTrigger: ".philo",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(sportifs, {
  scrollTrigger: ".sportifs",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(seniors, {
  scrollTrigger: ".seniors",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(enceintes, {
  scrollTrigger: ".enceintes",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(actifs, {
  scrollTrigger: ".actifs",
  y: +100,
  ease: "power2.out",
  duration: 2,
});

gsap.from(bebes, {
  scrollTrigger: ".bebes",
  y: +100,
  ease: "power2.out",
  duration: 2,
});

gsap.from(enfants, {
  scrollTrigger: ".enfants",
  y: +100,
  ease: "power2.out",
  duration: 2,
});

gsap.from(chiro, {
  scrollTrigger: ".tristandufour",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(chiro2, {
  scrollTrigger: ".simondewitte",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(horaires, {
  scrollTrigger: ".horaires",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(tarifs, {
  scrollTrigger: ".tarifs",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(social, {
  scrollTrigger: ".social",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(titrepatients, {
  scrollTrigger: ".titrepatients",
  opacity: 0,
  ease: "power2.out",
  duration: 5,
  delay: 0.2,
});

gsap.from(titrechiro, {
  scrollTrigger: ".titrechiro",
  opacity: 0,
  ease: "power2.out",
  duration: 5,
  delay: 0.2,
});

gsap.from(titreinfospratiques, {
  scrollTrigger: ".titreinfospratiques",
  opacity: 0,
  ease: "power2.out",
  duration: 5,
  delay: 0.2,
});

gsap.from(titretraitements, {
  scrollTrigger: ".titretraitements",
  opacity: 0,
  ease: "power2.out",
  duration: 5,
  delay: 0.2,
});

gsap.from(titrecontact, {
  scrollTrigger: ".titrecontact",
  opacity: 0,
  ease: "power2.out",
  duration: 5,
  delay: 0.2,
});

gsap.from(nom, {
  scrollTrigger: ".nom",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(prenom, {
  scrollTrigger: ".prenom",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(formmessage, {
  scrollTrigger: ".formmessage",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(email, {
  scrollTrigger: ".email",
  y: +200,
  ease: "power2.out",
  duration: 2,
});

gsap.from(formbutton, {
  scrollTrigger: ".formbutton",
  y: +250,
  ease: "power2.out",
  duration: 2,
});

gsap.from(votrenom, {
  scrollTrigger: ".votrenom",
  opacity: 0,
  ease: "power2.out",
  duration: 2,
  delay: 1.5,
});

gsap.from(votreprenom, {
  scrollTrigger: ".votreprenom",
  opacity: 0,
  ease: "power2.out",
  duration: 2,
  delay: 1.5,
});

gsap.from(votremessage, {
  scrollTrigger: ".votremessage",
  opacity: 0,
  ease: "power2.out",
  duration: 2,
  delay: 1.5,
});

gsap.from(votremail, {
  scrollTrigger: ".votremail",
  opacity: 0,
  ease: "power2.out",
  duration: 2,
  delay: 1.5,
});



