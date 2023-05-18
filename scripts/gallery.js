const projects = [
  {
    url: "./assets/booki.jpg",
    tagLine: "HTML - CSS ",
  },
  {
    url: "./assets/ohmyfood.jpg",
    tagLine: "Sass - Mobile first",
  },
  {
    url: "./assets/print-it.jpg",
    tagLine: "Javascript",
  },
  {
    url: "./assets/architecte.jpg",
    tagLine: "Site web dynamique - Communication avec une API",
  },
  {
    url: "./assets/kasa.jpg",
    tagLine: "React",
  },
];

let modalIsopen = false;

// création de la galerie

const galleryElement = document.querySelector(".gallery");

for (let i in projects) {
  const card = document.createElement("img");
  card.setAttribute("src", projects[i].url);
  card.setAttribute("alt", "capture d'écran du projet");
  galleryElement.appendChild(card);
}

const projectsImageElements = document.querySelectorAll(".gallery img");

// création de la modale
const modalMainElement = document.querySelector(".modal-main");
const modalElement = document.querySelector(".modal");

const createModal = (project) => {
  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title";
  modalTitle.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const modalImage = document.createElement("img");
  modalImage.setAttribute("src", project.url);
  modalImage.setAttribute("alt", "capture d'écran du projet");

  const modalTag = document.createElement("p");
  modalTag.innerText = project.tagLine;

  modalElement.appendChild(modalTitle);
  modalElement.appendChild(modalImage);
  modalElement.appendChild(modalTag);
};

// ouverture des modales

const openModal = (project) => {
  modalIsopen = true;
  modalMainElement.style = "display : flex";
  modalElement.innerHTML = "";
  createModal(project);
};

// fermeture des modales

const closeModal = () => {
  modalIsopen = false;
  modalMainElement.style = "display : none";
  modalElement.innerHTML = "";
};

for (let i = 0; i < projectsImageElements.length; i++) {
  projectsImageElements[i].addEventListener("click", () => {
    openModal(projects[i]);

    const closeButton = document.querySelector(".modal-title i");

    closeButton.addEventListener("click", () => {
      closeModal();
    });

    window.addEventListener("keydown", (e) => {
      if ((e.key === "Escape") | (e.key === "ESC")) {
        closeModal();
      }
    });

    window.addEventListener("click", (e) => {
      console.log(e.target.className);
      if (
        (e.target.className === "modal-main") |
        (e.target.className === "header")
      ) {
        closeModal();
      }
    });
  });
}
