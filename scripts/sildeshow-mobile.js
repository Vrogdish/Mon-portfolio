import { slides } from "./slideshow";

const image = document.querySelector(".slide");
const tagLine = document.querySelector(".tag-line");
const previous = document.querySelector(".previous-btn");
const next = document.querySelector(".next-btn");
const dots = document.querySelector(".dots");



/** Création d'un index du slide à afficher */
let nbrOfActivSlide = 0;


/** Fonction pour création des points d'apres le nombre de slide */
const dotGenerator = () => {
	for (let i in slides) {
		const dotsElement = document.createElement("div");
		dotsElement.classList.add("dot")
		if (i == nbrOfActivSlide){
			dotsElement.classList.add("dot-selected");
		}
		dots.appendChild(dotsElement)
	}
	}


/** Fonction pour defilement du slide */
const slideGenerator = () => {
	image.setAttribute("src", slides[nbrOfActivSlide].image);
	tagLine.innerHTML = slides[nbrOfActivSlide].tagLine
}


/** Initialisation de l affichage du point */
dotGenerator ()
slideGenerator()

//** Mise en place des actions à effectuer au clic sur les chevrons */
previous.addEventListener("click", function () {
	nbrOfActivSlide --;

	if (nbrOfActivSlide < 0) {
		nbrOfActivSlide = slides.length -1
	}

	document.querySelector(".dots").innerHTML="";
	dotGenerator ();
	slideGenerator();
})

next.addEventListener("click", function () {
	nbrOfActivSlide ++;

	if (nbrOfActivSlide >= slides.length){
		nbrOfActivSlide = 0
	}

	document.querySelector(".dots").innerHTML="";
	dotGenerator ()
	slideGenerator()
})

console.log(nbrOfActivSlide)