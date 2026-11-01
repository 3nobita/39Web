
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const megaMenu = document.getElementById("megaMenu");
const megaBackdrop = document.getElementById("megaBackdrop");
const megaClose = document.getElementById("megaClose");
const megaTitle = document.getElementById("megaTitle");
const megaCategories = document.getElementById("megaCategories");

const menuButtons = document.querySelectorAll(".nav-item");

const collections = {
  men: {
    title: "MEN'S COLLECTION",
    categories: [
      "T-Shirts",
      "Oversized Tees",
      "Shirts",
      "Polos",
      "Jeans",
      "Joggers",
      "Cargo Pants",
      "Sneakers",
      "Accessories",
      "Backpacks"
    ]
  },

  women: {
    title: "WOMEN'S COLLECTION",
    categories: [
      "T-Shirts",
      "Oversized Tees",
      "Tops",
      "Dresses",
      "Shirts",
      "Jeans",
      "Joggers",
      "Sneakers",
      "Bags",
      "Accessories"
    ]
  }
};

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.querySelector("i").className = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";

  if (isOpen) {
    openMegaMenu("men"); // Default MEN section
  } else {
    closeMegaMenu();
  }
});

// Open mega menu
function openMegaMenu(type) {
  const collection = collections[type];

  megaTitle.textContent = collection.title;

  megaCategories.innerHTML = collection.categories
    .map(category => `
      <a href="#trending">${category}</a>
    `)
    .join("");

  megaMenu.classList.add("open");
  megaBackdrop.classList.add("show");

  menuButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.menu === type
    );
  });
}

// Close mega menu
function closeMegaMenu() {
  megaMenu.classList.remove("open");
  megaBackdrop.classList.remove("show");

  menuButtons.forEach(button => {
    button.classList.remove("active");
  });
}

// Click navigation items
menuButtons.forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.menu;
    const alreadyOpen = button.classList.contains("active");

    if (alreadyOpen) {
      closeMegaMenu();
    } else {
      openMegaMenu(type);
    }

  });

  // Desktop hover interaction
  button.addEventListener("mouseenter", () => {
    if (window.innerWidth > 700) {
      openMegaMenu(button.dataset.menu);
    }
  });

});

// Close controls
megaClose.addEventListener("click", closeMegaMenu);
megaBackdrop.addEventListener("click", closeMegaMenu);

// Close when clicking a category
megaMenu.addEventListener("click", event => {
  if (event.target.closest(".mega-category-scroll a")) {
    closeMegaMenu();
  }
});

// Close on Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMegaMenu();
    navLinks.classList.remove("show");
  }
});

// Close mega menu when leaving desktop navigation
document.querySelector(".navbar").addEventListener("mouseleave", event => {
  if (
    window.innerWidth > 700 &&
    !megaMenu.contains(event.relatedTarget)
  ) {
    // Keep open while pointer enters the mega menu.
  }
});

megaMenu.addEventListener("mouseleave", () => {
  if (window.innerWidth > 700) {
    closeMegaMenu();
  }
});

// Wishlist
document.querySelectorAll(".wishlist").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.textContent =
      button.classList.contains("active") ? "♥" : "♡";
  });
});

// Newsletter demo
const newsletterForm = document.querySelector(".newsletter-form");
const newsletterMessage = document.querySelector(".newsletter-message");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();
  newsletterMessage.textContent = "Thanks for subscribing! ❤️";
  newsletterForm.reset();
});
