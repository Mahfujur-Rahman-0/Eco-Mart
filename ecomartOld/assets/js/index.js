"use strict";
(function () {
	// Change title
	const title = document.querySelector("title");
	if (title) {
		title.innerText = "eComArts - Multipurpose eCommerce Tailwindcss Template";
	}

	// append header programmatically
	const header = document.getElementById("header");
	if (header) {
		const headerTop = `<div class="w-full bg-title text-sm text-white" id="header-top">
            <div
               class="container max-w-[1800px] h-[50px] flex items-center justify-between"
            >
               <span class="hidden sm:inline">
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+123123123">+880 1234 123123</a>
               </span>
               <span class="hidden md:inline"
                  ><i class="fa-solid fa-tag"></i> 59%
                  <span class="text-theme-1">discount</span> for all items</span
               >
               <div
                  class="flex w-full sm:w-auto items-center gap-x-7 justify-between sm:justify-evenly"
               >
                  <div class="flex items-center gap-x-1">
                     <label for="language"
                        ><i class="fa-regular fa-earth-americas"></i
                     ></label>
                     <select
                        id="language"
                        class="text-white bg-transparent border-0 focus:!outline-none focus-within:!outline-0 focus:!border-0 focus-within:!border-0 focus-within:!ring-0 focus:!ring-0 focus:!ring-transparent focus:!shadow-none focus-within:!shadow-none *:bg-title py-1 font-medium"
                     >
                        <option value="en">English</option>
                        <option value="ur">Urdu</option>
                        <option value="sp">Spanish</option>
                        <option value="ar">Arabic</option>
                     </select>
                  </div>
                  <div class="h-4 w-px bg-icon hidden sm:block"></div>
                  <div>
                     <a
                        href="dashboard.html"
                        class="items-center gap-x-2.5 inline-flex !text-white font-medium hover:!text-theme transition-colors"
                        ><i class="fa-solid fa-user"></i>
                        <span>My Account</span></a
                     >
                  </div>
               </div>
            </div>
         </div>`;

		const headerMain = `<div
            class="container max-w-[1800px] flex items-center justify-between"
         >
            <div class="flex items-center gap-x-14 py-6">
               <div>
                  <a href="index.html">
                     <img
                        loading="lazy"
                        src="assets/images/logo/logo.svg"
                        alt="EcomArts"
                     />
                  </a>
               </div>

               <div class="header-cataegory-item hidden md:block">
                  <ul class="header-cataegory">
                     <li>
                        <a href="#">
                           <span class="left-icon mr-2">
                              <i class="fa-solid fa-grid-2"></i>
                           </span>
                           all categories
                           <span class="right-icon ml-2"
                              ><i class="fa-regular fa-chevron-down"></i
                           ></span>
                        </a>
                     </li>
                  </ul>
                  <ul class="sub-cataegory">
                     <li class="sub-has-dropdown">
                        <a href="#"
                           >All Laptop <i class="fas fa-angle-right"></i
                        ></a>
                        <ul class="sub-cataegory">
                           <li>
                              <a href="shop-without-sidebar.html">Lenovo</a>
                           </li>
                           <li><a href="shop-without-sidebar.html">MSI</a></li>
                           <li><a href="shop-without-sidebar.html">Asus</a></li>
                           <li><a href="shop-without-sidebar.html">HP</a></li>
                           <li>
                              <a href="shop-without-sidebar.html">MacBook</a>
                           </li>
                           <li>
                              <a href="shop-without-sidebar.html">Smart</a>
                           </li>
                           <li>
                              <a href="shop-without-sidebar.html">Walton</a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a href="shop-without-sidebar.html">Gadget</a>
                     </li>
                     <li>
                        <a href="shop-without-sidebar.html">Phone</a>
                     </li>
                     <li>
                        <a href="shop-without-sidebar.html">Digital Watch</a>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="flex items-center gap-x-32">
               <div class="hidden xl:block">
                  <menu
                     class="text-title text-base font-medium flex items-center gap-x-10 header-menu"
                  >
                     <li class="menu-item">
                        <a href="#">Home <i class="fa-solid fa-plus"></i></a>
                        <div class="sub-menu">
                           <div class="w-full grid grid-cols-4 gap-8">
                              <div class="relative group">
                                 <a href="index.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-1.png"
                                       alt="EcomArts"
                                    />
                                 </a>
                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Electronics</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-2.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-2.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Fashion</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index-3.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-3.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-3.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Grocery Store</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index-4">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-4.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-4.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Cosmetics</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index-5.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-5.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-5.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Jewelry</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index-6.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-6.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-6.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Furniture</a
                                    >
                                 </div>
                              </div>
                              <div class="relative group">
                                 <a href="index-7.html">
                                    <img
                                       loading="lazy"
                                       src="assets/images/header/home-7.png"
                                       alt="EcomArts"
                                    />
                                 </a>

                                 <div
                                    class="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center"
                                 >
                                    <a
                                       href="index-7.html"
                                       class="!text-white px-5 py-3 bg-theme-1 rounded-lg"
                                       >Pet Care</a
                                    >
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="menu-item group">
                        <a href="#">Shop <i class="fa-solid fa-plus"></i></a>

                        <div class="sub-menu-2">
                           <ul>
                              <li>
                                 <a href="shop-left-sidebar.html"
                                    >Shop Left Sidebar</a
                                 >
                              </li>
                              <li>
                                 <a href="shop-right-sidebar.html"
                                    >Shop Right Sidebar</a
                                 >
                              </li>
                              <li>
                                 <a href="shop-without-sidebar.html"
                                    >Shop Without Sidebar</a
                                 >
                              </li>
                              <li>
                                 <a href="shop-details-one.html"
                                    >Shop Details One</a
                                 >
                              </li>
                              <li>
                                 <a href="shop-details-two.html"
                                    >Shop Details Two</a
                                 >
                              </li>
                              <li>
                                 <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                 <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                 <a href="checkout.html">Checkout</a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li class="menu-item group">
                        <a href="#">Pages <i class="fa-solid fa-plus"></i></a>

                        <div class="sub-menu-2">
                           <ul>
                              <li>
                                 <a href="about-us.html">About Us</a>
                              </li>
                              <li>
                                 <a href="testimonials.html">Testimonials</a>
                              </li>
                              <li>
                                 <a href="faqs.html">FAQs</a>
                              </li>
                              <li>
                                 <a href="look-book.html">Look Book</a>
                              </li>
                              <li>
                                 <a href="login.html">Login</a>
                              </li>
                              <li>
                                 <a href="register.html">Register</a>
                              </li>
                              <li>
                                 <a href="dashboard.html">Dashboard</a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li class="menu-item group">
                        <a href="#">Order <i class="fa-solid fa-plus"></i></a>

                        <div class="sub-menu-2">
                           <ul>
                              <li>
                                 <a href="order-tracking.html"
                                    >Order Tracking</a
                                 >
                              </li>
                              <li>
                                 <a href="order-history.html">Order History</a>
                              </li>
                              <li>
                                 <a href="order-details-one.html"
                                    >Order Details One</a
                                 >
                              </li>
                              <li>
                                 <a href="settings.html">Settings</a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li class="menu-item group">
                        <a href="#">Blog <i class="fa-solid fa-plus"></i></a>

                        <div class="sub-menu-2">
                           <ul>
                              <li>
                                 <a href="blogs.html">Blogs</a>
                              </li>
                              <li>
                                 <a href="blogs-classic.html">Blogs Classic</a>
                              </li>
                              <li>
                                 <a href="blogs-left-sidebar.html"
                                    >Blogs Left Sidebar</a
                                 >
                              </li>
                              <li>
                                 <a href="blog-details.html">Blog Details</a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li>
                        <a href="contact.html">Contact</a>
                     </li>
                  </menu>
               </div>
               <div class="flex items-center gap-x-8 md:gap-x-10 lg:gap-x-14">
                  <a
                     href="#"
                     id="open-search-modal"
                     class="hover:text-theme-1 transition-colors text-lg hidden md:inline"
                     ><i class="fa-regular fa-magnifying-glass"></i
                  ></a>

                  <a
                     href="wishlist.html"
                     class="hover:text-theme-1 transition-colors text-lg hidden md:inline"
                     ><i class="fa-light fa-heart"></i>
                  </a>

                  <a
                     href="#"
                     role="button"
                     id="cart-openDrawer"
                     aria-label="Open cart drawer"
                     class="hover:text-theme-1 transition-colors text-lg relative"
                     ><i class="fa-light fa-bag-shopping"></i>
                     <span
                        class="absolute top-0 -right-2 !bg-theme-1 rounded-full text-xs text-white w-4 h-4 flex items-center justify-center"
                     >
                        2
                     </span>

                     <a
                        href="#"
                        role="button"
                        id="menu-openDrawer"
                        aria-label="Open menu drawer"
                        class="text-theme-1 xl:hidden"
                     >
                        <i class="fa-regular fa-bars-staggered text-lg"></i>
                     </a>
                  </a>
               </div>
            </div>
         </div`;

		header.innerHTML = headerTop + headerMain;
	}

	// make header sticky
	const mainHeader = document.querySelector("header");
	const mainHeaderTop = document.querySelector("#header-top");
	if (mainHeader) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				mainHeader.classList.add("header-sticky");
				if (mainHeaderTop) {
					mainHeaderTop.classList.add("header-top-hide");
				}
			} else {
				mainHeader.classList.remove("header-sticky");
				if (mainHeaderTop) {
					mainHeaderTop.classList.remove("header-top-hide");
				}
			}
		});
	}

	// category item 6
	const categoryItems6 = document.querySelector("#category-item-6");
	console.log(categoryItems6);

	if (categoryItems6) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				categoryItems6.classList.add("!hidden");
			} else {
				categoryItems6.classList.remove("!hidden");
			}
		});
	}

	// search modal
	const openModal = document.getElementById("open-search-modal");
	const closeModal = document.getElementById("close-search-modal");
	const modal = document.getElementById("search-modal");

	if (openModal && modal) {
		openModal.addEventListener("click", () => {
			modal.classList.remove("hidden");
			modal.classList.add("flex");
		});
	}

	if (closeModal && modal) {
		closeModal.addEventListener("click", () => {
			modal.classList.add("hidden");
			modal.classList.remove("flex");
		});
	}

	if (modal) {
		modal.addEventListener("click", (event) => {
			if (event.target === modal) {
				modal.classList.add("hidden");
				modal.classList.remove("flex");
			}
		});
	}

	// cart drawer
	const cartOpenDrawerBtn = document.getElementById("cart-openDrawer");
	const cartCloseDrawerBtn = document.getElementById("cart-closeDrawer");
	const cartDrawer = document.getElementById("cart-drawer");
	const cartDrawerBackdrop = document.getElementById("cart-drawerBackdrop");

	if (cartOpenDrawerBtn && cartDrawer && cartDrawerBackdrop) {
		cartOpenDrawerBtn.addEventListener("click", () => {
			cartDrawer.classList.remove("translate-x-full");
			cartDrawerBackdrop.classList.remove("hidden");
			cartDrawerBackdrop.classList.remove("opacity-0");
			cartDrawerBackdrop.classList.add("bg-opacity-50");
			cartDrawer.setAttribute("aria-hidden", "false");
		});
	}

	const closeCartDrawer = () => {
		if (cartDrawer && cartDrawerBackdrop) {
			cartDrawer.classList.add("translate-x-full");
			cartDrawerBackdrop.classList.add("opacity-0");
			cartDrawerBackdrop.classList.remove("bg-opacity-50");
			cartDrawer.setAttribute("aria-hidden", "true");
			setTimeout(() => {
				cartDrawerBackdrop.classList.add("hidden");
			}, 300);
		}
	};

	if (cartCloseDrawerBtn) {
		cartCloseDrawerBtn.addEventListener("click", closeCartDrawer);
	}
	if (cartDrawerBackdrop) {
		cartDrawerBackdrop.addEventListener("click", closeCartDrawer);
	}

	// Responsive Mobile Menu
	const openDrawerBtn = document.getElementById("menu-openDrawer");
	const closeDrawerBtn = document.getElementById("menu-closeDrawer");
	const drawer = document.getElementById("menu-drawer");
	const drawerBackdrop = document.getElementById("menu-drawerBackdrop");

	if (openDrawerBtn && drawer && drawerBackdrop) {
		openDrawerBtn.addEventListener("click", () => {
			drawer.classList.remove("translate-x-full");
			drawerBackdrop.classList.remove("hidden");
			drawerBackdrop.classList.remove("opacity-0");
			drawerBackdrop.classList.add("bg-opacity-50");
			drawer.setAttribute("aria-hidden", "false");
		});
	}

	const closeDrawer = () => {
		if (drawer && drawerBackdrop) {
			drawer.classList.add("translate-x-full");
			drawerBackdrop.classList.add("opacity-0");
			drawerBackdrop.classList.remove("bg-opacity-50");
			drawer.setAttribute("aria-hidden", "true");
			setTimeout(() => {
				drawerBackdrop.classList.add("hidden");
			}, 300);
		}
	};

	if (closeDrawerBtn) {
		closeDrawerBtn.addEventListener("click", closeDrawer);
	}
	if (drawerBackdrop) {
		drawerBackdrop.addEventListener("click", closeDrawer);
	}

	// JavaScript for Accordion Submenus
	const accordionButtons = document.querySelectorAll("button[aria-controls]");
	if (accordionButtons.length > 0) {
		accordionButtons.forEach((button) => {
			button.addEventListener("click", (e) => {
				e.preventDefault();
				const targetId = button.getAttribute("aria-controls");
				const submenu = document.getElementById(targetId);
				const isExpanded = button.getAttribute("aria-expanded") === "true";
				const icon = button.querySelector("i");

				if (submenu) {
					if (isExpanded) {
						submenu.style.maxHeight = "0";
						button.setAttribute("aria-expanded", "false");
						icon?.classList.remove("rotate-180");
						setTimeout(() => {
							submenu.style.display = "none";
						}, 300);
					} else {
						submenu.style.display = "block";
						submenu.style.maxHeight = submenu.scrollHeight + "px";
						button.setAttribute("aria-expanded", "true");
						icon?.classList.add("rotate-180");
					}
				}

				const parentList = button.closest("ul");
				if (parentList) {
					parentList
						.querySelectorAll("button[aria-controls]")
						.forEach((otherButton) => {
							if (otherButton !== button) {
								const otherSubmenu = document.getElementById(
									otherButton.getAttribute("aria-controls")
								);
								const otherIcon = otherButton.querySelector("i");
								if (otherSubmenu) {
									otherSubmenu.style.maxHeight = "0";
									otherButton.setAttribute("aria-expanded", "false");
									otherIcon?.classList.remove("rotate-180");
									setTimeout(() => {
										otherSubmenu.style.display = "none";
									}, 300);
								}
							}
						});
				}
			});
		});
	}

	// swiper
	if (typeof Swiper !== "undefined") {
		new Swiper("#introSliderOne", {
			loop: true,
			autoplay: true,
			// effect: "fade",
			breakpoints: { 0: { slidesPerView: 1 } },
			pagination: {
				el: "#introSliderOnePagination",
				clickable: true,
			},
		});

		new Swiper("#popular-categories-1", {
			loop: true,
			autoplay: true,
			spaceBetween: 30,
			speed: 3000,
			navigation: {
				nextEl: "#popular-categories-1-next",
				prevEl: "#popular-categories-1-prev",
			},
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 2, centeredSlides: true },
				768: { slidesPerView: 3 },
				992: { slidesPerView: 4 },
				1200: { slidesPerView: 6 },
			},
		});

		new Swiper("#testimonialSliderOne", {
			loop: true,
			autoplay: true,
			speed: 4000,
			spaceBetween: 30,
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 1, centeredSlides: true },
				768: { slidesPerView: 1 },
				992: { slidesPerView: 2 },
				1200: { slidesPerView: 3 },
			},
		});

		new Swiper(".package-shop-slider-2", {
			autoplay: true,
			loop: true,
			navigation: {
				nextEl: "#packageShopSlider1Next",
				prevEl: "#packageShopSlider1Prev",
			},
		});

		new Swiper(".featured-shop-2-slider", {
			spaceBetween: 30,
			speed: 3000,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1399: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
			pagination: {
				el: ".dot2",
				clickable: true,
			},
		});

		new Swiper("#brandSliderOne", {
			autoplay: true,
			loop: true,
			speed: 3000,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},
		});

		new Swiper("#gallery-slider-2", {
			loop: true,
			autoplay: true,
			spaceBetween: 20,
			breakpoints: {
				0: { slidesPerView: 2 },
				576: { slidesPerView: 3 },
				767: { slidesPerView: 4 },
				1200: { slidesPerView: 5 },
			},
		});

		new Swiper(".category-slider-3", {
			loop: true,
			autoplay: true,
			spaceBetween: 24,
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 2, centeredSlides: true },
				768: { slidesPerView: 3 },
				992: { slidesPerView: 4 },
				1200: { slidesPerView: 6 },
			},
			navigation: {
				nextEl: "#categorySlider3Next",
				prevEl: "#categorySlider3Prev",
			},
		});

		new Swiper(".hero-slider-3", {
			spaceBetween: 30,
			speed: 3000,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot2",
				clickable: true,
			},
		});

		new Swiper(".intro-slider-4", {
			loop: true,
			autoplay: true,
			breakpoints: { 0: { slidesPerView: 1 } },
			pagination: {
				el: ".slider-pagination-4",
				clickable: true,
			},
		});

		new Swiper(".popular-category-slider-4", {
			spaceBetween: 30,
			speed: 3000,
			loop: true,
			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
			pagination: {
				el: ".dot2",
				clickable: true,
			},
		});

		new Swiper("#testimonialSliderFour", {
			loop: true,
			autoplay: true,
			breakpoints: { 0: { slidesPerView: 1 }, 576: { slidesPerView: 1 } },
			navigation: {
				nextEl: "#testimonialSliderFourNext",
				prevEl: "#testimonialSliderFourPrev",
			},
		});

		new Swiper("#brandSliderFour", {
			loop: true,
			autoplay: true,
			speed: 3000,
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 2 },
				767: { slidesPerView: 3 },
				1200: { slidesPerView: 6 },
			},
		});

		new Swiper("#brandSliderFour2", {
			loop: true,
			autoplay: true,
			speed: 3000,
			spaceBetween: 20,
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 2 },
				767: { slidesPerView: 3 },
				1200: { slidesPerView: 4 },
			},
		});

		new Swiper(".hero-slider-5", {
			speed: 3000,
			loop: true,
			slidesPerView: 1,
			autoplay: true,
			effect: "fade",
			breakpoints: {
				1600: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},

				a11y: false,
			},
			navigation: {
				prevEl: "#heroSlider5Prev",
				nextEl: "#heroSlider5Next",
			},
		});

		new Swiper(".category-slider-5", {
			spaceBetween: 30,
			speed: 3000,
			loop: true,
			autoplay: true,
			breakpoints: {
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
			pagination: {
				el: ".dot2",
				clickable: true,
			},
		});

		new Swiper(".food-collection-slider-7", {
			spaceBetween: 30,
			speed: 3000,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1399: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
			navigation: {
				nextEl: "#food-collection-7-next",
				prevEl: "#food-collection-7-prev",
			},
		});

		new Swiper("#testimonials-slider-about-us", {
			loop: true,
			autoplay: true,
			speed: 3000,
			spaceBetween: 30,
			breakpoints: {
				0: { slidesPerView: 1 },
				576: { slidesPerView: 1, centeredSlides: true },
				768: { slidesPerView: 2 },
				992: { slidesPerView: 3 },
				1200: { slidesPerView: 3 },
			},
		});

		new Swiper("#lookBookSliderOne", {
			loop: true,
			autoplay: true,
			navigation: {
				nextEl: "#look-book-1-next",
				prevEl: "#look-book-1-prev",
			},
			breakpoints: { 0: { slidesPerView: 1 } },
		});

		new Swiper("#lookBookSliderTwo", {
			loop: true,
			autoplay: true,
			navigation: {
				nextEl: "#look-book-2-next",
				prevEl: "#look-book-2-prev",
			},
			breakpoints: { 0: { slidesPerView: 1 } },
		});
	}

	// JavaScript for marquee
	const marqueeContent = document.querySelector(".marquee-content");
	const marqueeContainer = document.querySelector(".marquee-container");
	if (marqueeContent && marqueeContainer) {
		document.addEventListener("DOMContentLoaded", () => {
			let speed = 50;
			let start = performance.now();
			let position = 0;

			function animate(currentTime) {
				const elapsed = (currentTime - start) / 1000;
				position = -elapsed * speed;
				marqueeContent.style.transform = `translateX(${position}px)`;

				if (Math.abs(position) >= marqueeContent.scrollWidth / 2) {
					position = 0;
					start = currentTime;
				}

				requestAnimationFrame(animate);
			}

			requestAnimationFrame(animate);

			marqueeContainer.addEventListener("mouseenter", () => {
				marqueeContent.style.animationPlayState = "paused";
			});

			marqueeContainer.addEventListener("mouseleave", () => {
				marqueeContent.style.animationPlayState = "running";
			});
		});
	}

	// on sale
	const onSaleBtns = document.querySelectorAll(".best-seller-1-btn");
	const onSales = document.querySelectorAll(".best-seller-1-wrapper");
	if (onSaleBtns.length > 0 && onSales.length > 0) {
		onSaleBtns.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				const target = event.target.dataset.saleTarget;
				if (target) {
					onSaleBtns.forEach((button) => {
						button.classList.remove("btn-active");
					});
					btn.classList.add("btn-active");

					onSales.forEach((saleContainer) => {
						const clickedSale = saleContainer.dataset.onSale;
						if (clickedSale === target) {
							saleContainer.classList.remove("hidden");
							saleContainer.classList.add("grid");
						} else {
							saleContainer.classList.add("hidden");
							saleContainer.classList.remove("grid");
						}
					});
				}
			});
		});
	}

	// featured products
	const featuredBtns = document.querySelectorAll(".fp-1-filter-btns");
	const fp1Wrappers = document.querySelectorAll(".fp1-wrapper");
	if (featuredBtns.length > 0 && fp1Wrappers.length > 0) {
		featuredBtns.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				const target = event.target.dataset.fp1Btn;
				if (target) {
					featuredBtns.forEach((button) => {
						button.classList.remove("btn-active");
					});
					btn.classList.add("btn-active");

					fp1Wrappers.forEach((wrapper) => {
						const clickedWrapper = wrapper.dataset.fp1Wrapper;
						if (clickedWrapper === target) {
							wrapper.classList.remove("hidden");
							wrapper.classList.add("grid");
						} else {
							wrapper.classList.add("hidden");
							wrapper.classList.remove("grid");
						}
					});
				}
			});
		});
	}

	// best seller 2 (Note: selector seems incorrect in original - missing dot)
	const bs2Btns = document.querySelectorAll(".bs-1-filter-btns"); // Added dot
	if (bs2Btns.length > 0) {
		bs2Btns.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				bs2Btns.forEach((button) => {
					button.classList.remove("active");
				});
				btn.classList.add("active");
			});
		});
	}

	// trendy product homepage 3
	const trendyProductsFilterBtns =
		document.querySelectorAll(".tp-3-filter-btns");
	if (trendyProductsFilterBtns.length > 0) {
		trendyProductsFilterBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				trendyProductsFilterBtns.forEach((button) => {
					button.classList.remove("active");
				});
				btn.classList.add("active");
			});
		});
	}

	// best seller 5
	const bs5Btns = document.querySelectorAll(".bs-5-filter-btns");
	if (bs5Btns.length > 0) {
		bs5Btns.forEach((btn) => {
			btn.addEventListener("click", () => {
				bs5Btns.forEach((button) => {
					button.classList.remove("active");
				});
				btn.classList.add("active");
			});
		});
	}

	// faqs accordion
	document.addEventListener("DOMContentLoaded", function () {
		const buttons = document.querySelectorAll(".accordion-button");

		if (buttons.length === 0) return;

		buttons.forEach((button) => {
			button.addEventListener("click", function () {
				const targetId = this.getAttribute("data-target");
				const targetPanel = document.getElementById(targetId);

				if (!targetPanel) return;

				document.querySelectorAll(".accordion-collapse").forEach((panel) => {
					if (panel !== targetPanel) {
						panel.style.maxHeight = null;
						panel.classList.remove("open");
					}
				});

				if (targetPanel.classList.contains("open")) {
					targetPanel.style.maxHeight = null;
					targetPanel.classList.remove("open");
				} else {
					targetPanel.style.maxHeight = targetPanel.scrollHeight + "px";
					targetPanel.classList.add("open");
				}
			});
		});
	});

	// count down timers
	function startCountdown(seconds) {
		let timeLeft = seconds;
		const spanElement = document.querySelectorAll(".onlySec");

		const timer = setInterval(() => {
			if (timeLeft >= 0) {
				if (spanElement.length > 0) {
					spanElement?.forEach((span) => {
						span.textContent = timeLeft;
					});
				}
				timeLeft--;
			} else {
				timeLeft = seconds;
			}
		}, 1000);
	}
	startCountdown(60);

	function startCountdown2(targetDate) {
		const daysSpan = document.querySelectorAll(".count-days");
		const hoursSpan = document.querySelectorAll(".count-hours");
		const minutesSpan = document.querySelectorAll(".count-minutes");
		const secondsSpan = document.querySelectorAll(".count-seconds");

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const target = new Date(targetDate).getTime();
			const difference = target - now;

			if (difference <= 0) {
				if (daysSpan.length > 0) {
					daysSpan.forEach((span) => {
						span.textContent = "0";
					});
				}
				if (minutesSpan.length > 0) {
					minutesSpan.forEach((span) => {
						span.textContent = "0";
					});
				}
				if (minutesSpan.length > 0) {
					minutesSpan.forEach((span) => {
						span.textContent = "0";
					});
				}
				if (daysSpan.length > 0) {
					daysSpan.forEach((span) => {
						span.textContent = "0";
					});
				}
				clearInterval(timer);
				return;
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			if (daysSpan.length > 0) {
				daysSpan.forEach((span) => {
					span.textContent = days;
				});
			}
			if (hoursSpan.length > 0) {
				hoursSpan.forEach((span) => {
					span.textContent = hours;
				});
			}
			if (minutesSpan.length > 0) {
				minutesSpan.forEach((span) => {
					span.textContent = minutes;
				});
			}
			if (secondsSpan.length > 0) {
				secondsSpan.forEach((span) => {
					span.textContent = seconds;
				});
			}
		}, 1000);
	}
	// Example: Countdown to 5 days from now
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 5);
	startCountdown2(targetDate);

	// add scroll to top button
	const scrollTopBtn = document.createElement("button");
	scrollTopBtn.id = "back-top";
	scrollTopBtn.className = "back-to-top";
	scrollTopBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
	document.body.appendChild(scrollTopBtn);

	window.onscroll = function () {
		if (document.documentElement.scrollTop > 200) {
			scrollTopBtn.classList.add("show");
		} else {
			scrollTopBtn.classList.remove("show");
		}
	};

	scrollTopBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// preloader
	const preloaderContent = `<div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
               <span data-text-preloader="E" class="letters-loading"> E </span>
               <span data-text-preloader="C" class="letters-loading"> C </span>
               <span data-text-preloader="O" class="letters-loading"> O </span>
               <span data-text-preloader="M" class="letters-loading"> M </span>
               <span data-text-preloader="A" class="letters-loading"> A </span>
               <span data-text-preloader="R" class="letters-loading"> R </span>
               <span data-text-preloader="T" class="letters-loading"> T </span>
               <span data-text-="S" class="letters-loading"> S </span>
            </div>
            <p class="text-center">Loading</p>
         </div>
         <div class="loader">
            <div class="row">
               <div class="col-3 loader-section section-left">
                  <div class="bg"></div>
               </div>
               <div class="col-3 loader-section section-left">
                  <div class="bg"></div>
               </div>
               <div class="col-3 loader-section section-right">
                  <div class="bg"></div>
               </div>
               <div class="col-3 loader-section section-right">
                  <div class="bg"></div>
               </div>
            </div>
         </div>`;
	const preloaderElement = document.createElement("div");
	preloaderElement.id = "preloader";
	preloaderElement.className = "preloader";
	preloaderElement.innerHTML = preloaderContent;
	document.body.appendChild(preloaderElement);
	function preloaderInit() {
		window.onload = function () {
			if (preloaderElement) {
				preloaderElement.classList.add("loaded");
				setTimeout(() => {
					preloaderElement.style.display = "none";
				}, 600);
			}
		};
	}
	preloaderInit();

	// newsletter modal
	const newsletterModal = document.getElementById("newsletterModal");
	const newsletterCloseBtn = document.getElementById("newsletterCloseBtn");
	const newsletterModalBackdrop = document.getElementById(
		"newsletterModalBackdrop"
	);
	setTimeout(() => {
		if (newsletterModal && newsletterModalBackdrop) {
			newsletterModal.style.display = "block";
			newsletterModalBackdrop.style.display = "block";
			if (newsletterCloseBtn) {
				newsletterCloseBtn.addEventListener("click", () => {
					newsletterModal.style.display = "none";
					newsletterModalBackdrop.style.display = "none";
				});
			}
		}
	}, 5000);

	const footer = document.querySelector("footer");
	if (!footer) {
		const footerContent = `
      <div class="container">
            <div class="contact-info-area">
               <div
                  class="contact-info-items"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
               >
                  <div class="icon">
                     <i class="fa-sharp fa-solid fa-phone-volume"></i>
                  </div>
                  <div class="content">
                     <p>Call Us 7/24</p>
                     <h3>
                        <a href="tel:+2085550112">+208-555-0112</a>
                     </h3>
                  </div>
               </div>
               <div
                  class="contact-info-items"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
               >
                  <div class="icon">
                     <i class="fa-sharp fa-solid fa-envelopes"></i>
                  </div>
                  <div class="content">
                     <p>Make a Quote</p>
                     <h3>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                     </h3>
                  </div>
               </div>
               <div
                  class="contact-info-items"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
               >
                  <div class="icon">
                     <i class="fa-sharp fa-solid fa-headset"></i>
                  </div>
                  <div class="content">
                     <p>Opening Hour</p>
                     <h3>Sunday - Fri: 9 aM - 6 pM</h3>
                  </div>
               </div>
               <div
                  class="contact-info-items"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
               >
                  <div class="icon">
                     <i class="fa-sharp fa-solid fa-street-view"></i>
                  </div>
                  <div class="content">
                     <p>Location</p>
                     <h3>4517 Washington ave.</h3>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer-widgets-wrapper">
            <div class="container">
               <div
                  class="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
               >
                  <div
                     class="single-footer-widget"
                     data-aos="fade-up"
                     data-aos-delay="200"
                  >
                     <div class="widget-head">
                        <a href="index.html">
                           <img
                              loading="lazy"
                              src="assets/images/logo/white-logo.svg"
                              alt="logo-img"
                           />
                        </a>
                     </div>
                     <div class="footer-content">
                        <p>
                           Phasellus ultricies aliquam volutpat ullamcorper
                           laoreet neque, a lacinia curabitur lacinia mollis
                        </p>
                        <div class="social-icon flex items-center">
                           <a href="https://www.facebook.com/"
                              ><i class="fab fa-facebook-f"></i
                           ></a>
                           <a href="https://x.com/"
                              ><i class="fab fa-twitter"></i
                           ></a>
                           <a href="https://www.youtube.com/"
                              ><i class="fab fa-youtube"></i
                           ></a>
                           <a href="https://www.linkedin.com/"
                              ><i class="fab fa-linkedin-in"></i
                           ></a>
                        </div>
                     </div>
                  </div>
                  <div
                     class="lg:pl-[3rem]"
                     data-aos="fade-up"
                     data-aos-delay="400"
                  >
                     <div class="single-footer-widget">
                        <div class="widget-head">
                           <h3 class="style1">Costumers Support</h3>
                        </div>
                        <ul class="list-area">
                           <li>
                              <a class="style1" href="shop-left-sidebar.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Store List
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="contact.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Opening Hours
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="contact.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Contact Us
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="contact.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Return Policy
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div
                     class="lg:pl-[3rem]"
                     data-aos="fade-up"
                     data-aos-delay="600"
                  >
                     <div class="single-footer-widget">
                        <div class="widget-head">
                           <h3 class="style1">Quick Links</h3>
                        </div>
                        <ul class="list-area">
                           <li>
                              <a class="style1" href="about.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 About Us
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="testimonial.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Testimonial
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="faq.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Faq
                              </a>
                           </li>
                           <li>
                              <a class="style1" href="blog.html">
                                 <i class="fa-solid fa-chevrons-right"></i>
                                 Blog
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div
                     class="single-footer-widget"
                     data-aos="fade-up"
                     data-aos-delay="800"
                  >
                     <div class="widget-head">
                        <h3 class="style1">Newsletter</h3>
                     </div>
                     <div class="footer-content">
                        <p>
                           Sign up to searing weekly newsletter to get the
                           latest updates.
                        </p>
                        <div class="footer-input">
                           <input
                              type="email"
                              id="email2"
                              placeholder="Enter Email Address"
                           />
                           <button class="newsletter-btn" type="submit">
                              <i class="fa-regular fa-paper-plane"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer-bottom">
            <div class="container">
               <div class="footer-wrapper flex items-center justify-between">
                  <p>
                     © All Copyright 2024 by <a href="index.html">EcomArts</a>
                  </p>
                  <ul class="credit-card-logo">
                     <li>
                        <a href="contact.html">
                           <img
                              loading="lazy"
                              src="assets/images/footer/visa-logo.png"
                              alt="img"
                           />
                        </a>
                     </li>
                     <li>
                        <a href="contact.html">
                           <img
                              loading="lazy"
                              src="assets/images/footer/mastercard-logo.png"
                              alt="img"
                           />
                        </a>
                     </li>
                     <li>
                        <a href="contact.html">
                           <img
                              loading="lazy"
                              src="assets/images/footer/payoneer-logo.png"
                              alt="img"
                           />
                        </a>
                     </li>
                     <li>
                        <a href="contact.html">
                           <img
                              loading="lazy"
                              src="assets/images/footer/affirm-logo.png"
                              alt="img"
                           />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      `;
		const mainFooter = document.createElement("footer");
		mainFooter.className = "footer-section bg-title";
		mainFooter.innerHTML = footerContent;

		document.body.appendChild(mainFooter);
	}

	// AOW - Animate On Scroll Library
	if (typeof AOS !== "undefined") {
		AOS.init({
			duration: 1000,
		});
	}

	// block right click for showcase
	// document.addEventListener("contextmenu", function (event) {
	//    event.preventDefault();
	// });
})();
