
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
    // Topwear
    "T-Shirts",
    "Oversized Tees",
    "Graphic Tees",
    "Plain T-Shirts",
    "Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Polos",
    "Hoodies",
    "Sweatshirts",
    "Jackets",

    // Bottomwear
    "Jeans",
    "Joggers",
    "Cargo Pants",
    "Chinos",
    "Formal Trousers",
    "Shorts",
    "Boxers",

    // Footwear
    "Sneakers",
    "Casual Shoes",
    "Sliders",
    "Sandals",

    // Accessories
    "Watches",
    "Sunglasses",
    "Caps",
    "Wallets",
    "Belts",
    "Backpacks",
    "Socks",

    "New Arrivals",
    "Best Sellers",
    "Trending Now",
    "Sale"
  ]
},

women: {
  title: "WOMEN'S COLLECTION",
  categories: [
    // Topwear
    "T-Shirts",
    "Oversized Tees",
    "Graphic Tees",
    "Crop Tops",
    "Tank Tops",
    "Casual Tops",
    "Shirts",
    "Kurtis",
    "Sweatshirts",
    "Hoodies",
    "Jackets",

    // Dresses & Ethnic
    "Dresses",
    "Maxi Dresses",
    "Mini Dresses",
    "Ethnic Wear",
    "Co-ord Sets",

    // Bottomwear
    "Jeans",
    "Wide Leg Jeans",
    "Trousers",
    "Joggers",
    "Cargo Pants",
    "Leggings",
    "Shorts",
    "Skirts",

    // Footwear
    "Sneakers",
    "Flats",
    "Heels",
    "Sandals",
    "Sliders",

    // Accessories
    "Handbags",
    "Sling Bags",
    "Backpacks",
    "Wallets",
    "Sunglasses",
    "Watches",
    "Jewellery",
    "Hair Accessories",

    // Trending
    "New Arrivals",
    "Best Sellers",
    "Trending Now",
    "Sale"
  ]
},

collection: {
  title: "ALL COLLECTION's",
  categories: [
    // Topwear
    "T-Shirts",
    "Oversized Tees",
    "Graphic Tees",
    "Plain T-Shirts",
    "Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Polos",
    "Hoodies",
    "Sweatshirts",
    "Jackets",

    // Bottomwear
    "Jeans",
    "Joggers",
    "Cargo Pants",
    "Chinos",
    "Formal Trousers",
    "Shorts",
    "Boxers",

    // Footwear
    "Sneakers",
    "Casual Shoes",
    "Sliders",
    "Sandals",

    // Accessories
    "Watches",
    "Sunglasses",
    "Caps",
    "Wallets",
    "Belts",
    "Backpacks",
    "Socks",

    "New Arrivals",
    "Best Sellers",
    "Trending Now",
    "Sale"
  ]
},

};

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.querySelector("i").className = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";

  if (isOpen) {
    openMegaMenu("collection"); // Default MEN section
  } else {
    closeMegaMenu();
  }
});

// Open mega menu
function openMegaMenu(type) {

  const collection = collections[type];

  if (!collection) return;

  megaTitle.textContent = collection.title;

  // Show images only for COLLECTIONS
  megaFeatureGrid.style.display =
    type === "collection" ? "grid" : "none";

  // Load categories
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
