// const section = document.querySelectorAll("section");
const description = document.querySelectorAll(".description p");
const hiddenElement = document.querySelectorAll(".hidden");


const content = [
  "root@cedric/home/cedric# hello-world.cfg ",
  "[Login] : Cédric Gache",
  "[Description] : Développeur Front-end",
  "[Location] : Montpellier - FRANCE",
  "[Comments] : Diplomé de la formation OpenClassrooms ",
  "en tant que développeur intégrateur WEB",
  " // ................ //",
];

const generateText = (contentElem, descriptionElem) => {
  const letters = contentElem.split("");
  let letter = 0;

  const animateText = setInterval(() => {
    descriptionElem.innerHTML += letters[letter];
    letter++;

    if (letter === letters.length) {
      clearInterval(animateText);
    }
  }, 10);
};


const observer = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }
  },
  {
    threshold: 0.3,
  }
);

let terminalIsShow = false;

const observerTerminal = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting && !terminalIsShow) {
        let line = 0;
        terminalIsShow = true;
        const animation = setInterval(() => {
          generateText(content[line], description[line]);
          line++;

          if (line === description.length) {
            
            clearInterval(animation);
          }
        }, 400);
      }
    }
  },
  {
    threshold: 0.2,
  }
);

hiddenElement.forEach((element) => {
  observer.observe(element);
});


observerTerminal.observe(document.querySelector(".terminal"));
