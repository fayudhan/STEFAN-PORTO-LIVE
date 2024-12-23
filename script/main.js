// Toggle Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Change Nav BG when Scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("bg-dark-blue", "shadow-md");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-dark-blue", "shadow-md");
    navbar.classList.add("bg-transparent");
  }
});

// My Awesome Service
const imageBoxes = [
  {
    title: "Website Design",
    image: "assets/service-web-design.png",
    projects: "80+ Project",
    link: "#link1",
  },
  {
    title: "Mobile App Design",
    image: "assets/service-mobile-app-design.png",
    projects: "76+ Project",
    link: "#link2",
  },
  {
    title: "Design System",
    image: "assets/service-design-system.png",
    projects: "32+ Project",
    link: "#link3",
  },
];

// const servicesContainer = document.getElementById("services-container");
// imageBoxes.forEach((box) => {
//   servicesContainer.innerHTML += `
//     <div class="flex flex-col justify-between rounded-lg border border-[#262f40] bg-transparent-dark-blue p-4 shadow-lg xl:flex-row xl:items-center xl:p-10">
//         <div class="flex flex-col xl:mr-8 xl:flex-row">
//           <img src="${box.image}" alt="${box.title}" class="mb-4 mr-8 w-full rounded-md object-cover xl:mb-0 xl:h-[100px] xl:w-[100px]" />
//           <div class="flex flex-col justify-center space-y-[8px]">
//             <h4 class="text-2xl font-semibold leading-relaxed text-white xl:text-[2.5rem]">
//               ${box.title}
//             </h4>
//             <p class="mb-4 text-xl font-medium leading-normal text-gray-custom xl:text-2xl">
//               ${box.projects}
//             </p>
//           </div>
//         </div>
//         <a href="${box.link}" class="flex w-full justify-end xl:w-fit">
//           <img src="assets/arrow-right-alt.svg" alt="arrow-right-alt" />
//         </a>
//       </div>

//     `;
// });

//Porfolio
const portfolioCards = [
  {
    title: "VPN Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-vpn.png",
  },
  {
    title: "Streaming Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-parking.png",
  },
  {
    title: "Creative Digital Agency",
    category: "Landing Page",
    image: "assets/portfolio-creative.png",
  },
  {
    title: "Podcast Mobile App",
    category: "Mobile App",
    image: "assets/portfolio-podcast.png",
  },
  {
    title: "Multimedia Design Platform",
    category: "Web Design",
    image: "assets/portfolio-creative.png",
  },
  {
    title: "Parking Mobile",
    category: "Mobile App",
    image: "assets/portfolio-parking.png",
  },
];

const portfolioContainer = document.getElementById("portfolio-container");
portfolioCards.forEach((card) => {
  portfolioContainer.innerHTML += `
  <div class="rounded-lg">
        <img
          src="${card.image}"
          alt="${card.title}"
          class="max-w-[360px]: h-auto w-full rounded object-cover"
        />
        <div class="p-5 text-left">
          <a href="#" class="text-2xl font-medium text-white">
            ${card.title}
          </a>
          <p class="mt-4 text-2xl text-gray-custom">${card.category}</p>
        </div>
      </div>
    `;
});
