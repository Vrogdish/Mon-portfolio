export const slides = [
	{
		"image": "./assets/booki.jpg",
		"tagLine": "HTML - CSS "
	},
	{
		"image": "./assets/ohmyfood.jpg",
		"tagLine": "Sass - Mobile first"
	},
	{
		"image": "./assets/print-it.jpg",
		"tagLine": "Javascript"
	},
	{
		"image": "./assets/architecte.jpg",
		"tagLine" : "Site web dynamique - Communication avec une API"
	},
	{
		"image": "./assets/kasa.jpg",
		"tagLine" : "React"
	}
]




const image = document.querySelector(".slideshow .slide");
const tagLine = document.querySelector(".slideshow .tag-line");
const previous = document.querySelector(".slideshow .previous-btn");
const next = document.querySelector(".slideshow .next-btn");
const dots = document.querySelector(".slideshow .dots");



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


//** Affichage de la tablet au scroll */

// const observer = new IntersectionObserver((entries) => {
// 	for (const entry of entries) {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add("visible")
// 		}
// 		else{
// 			entry.target.classList.remove("visible")
// 		}
// 	}
// },{
// 	threshold: 0.3
// })

// observer.observe(document.querySelector(".slideshow"))