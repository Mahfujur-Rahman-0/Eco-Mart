"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

import commonModal from "../../public/assets/images/modal/common-modal.jpg";

export default function Partials() {
	const [newsletter, setNewsletter] = useState(false);
	const { menu, setMenu } = useAppContext();
	const newsletterChecker = useRef(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			newsletterChecker.current == true && setNewsletter(true);
		}, 5000);
		return () => clearTimeout(timer);
	}, [newsletter]);

	return (
		<>
			<style>
				{`${menu ? "body { overflow: hidden; }" : "body { overflow: auto; }"}`}
			</style>
			{/* <!-- partials started --> */}
			{/* <!-- search modal --> */}
			<div
				className={`fixed inset-0 items-center justify-center bg-white/25 backdrop-blur-xs ${
					menu == 4 ? "" : "hidden"
				} z-99999`}
			>
				<div className="w-full h-full relative">
					<div className="bg-transparent max-w-2/3 mx-auto my-auto flex items-center justify-center h-full">
						<input
							type="text"
							className="w-full form-input border-0 border-b-2 border-b-theme-1 focus:border-b-theme-1 focus:ring-0 focus:shadow-none text-lg md:text-2xl lg:text-3xl font-semibold text-center placeholder:text-theme-1 text-theme-1"
							placeholder="Search..."
						/>
					</div>

					<div className="absolute top-5 right-5">
						<button
							onClick={() => setMenu(null)}
							className="text-theme-1 flex items-center justify-center cursor-pointer size-12 rounded-full border border-theme"
						>
							<i className="fa-solid fa-xmark text-2xl"></i>
						</button>
					</div>
				</div>
			</div>

			{/* <!-- Cart Drawer --> */}
			<div
				className={`cart-drawer fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform ${
					menu == 3 ? "" : "translate-x-full"
				} transition-transform duration-300 ease-in-out z-50`}
			>
				{/* <!-- Cart Drawer Content --> */}
				<div className="p-6 h-full flex flex-col">
					{/* <!-- Close Button --> */}
					<button
						onClick={() => setMenu(null)}
						aria-label="Close cart drawer"
						className="self-end p-3 rounded text-theme-1 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
					>
						<i className="fa-solid fa-xmark text-xl"></i>
					</button>
					{/* <!-- Cart Drawer Body --> */}
					<h2 className="text-xl font-semibold text-theme-1 mt-4 mb-4">
						Your Cart
					</h2>
					<p className="text-gray-600 mb-4">
						Your shopping cart is empty right now.
					</p>
					{/* <!-- Sample Cart Items --> */}
					<ul className="space-y-4 mb-6">
						<li className="flex justify-between border-b pb-2">
							<span>Product 1</span>
							<span>$19.99</span>
						</li>
						<li className="flex justify-between border-b pb-2">
							<span>Product 2</span>
							<span>$29.99</span>
						</li>
					</ul>
					{/* <!-- Checkout Button --> */}
					<a
						href="checkout.html"
						className="mt-auto px-4 py-2 bg-theme-1 text-white rounded hover:bg-theme-1/90 focus:outline-none focus:ring-2 focus:ring-green-400 inline-block text-center"
					>
						Checkout
					</a>
				</div>
			</div>

			<div
				onClick={() => setMenu(null)}
				className={`${
					menu == 3 ? "" : "opacity-0 hidden"
				} fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-40`}
			></div>

			{/* <!-- Drawer (Mobile Menu) --> */}
			<div
				className={`Drawer-Backdrop fixed inset-y-0 right-0 w-85 bg-title border-l-2 border-l-theme shadow-lg transform ${
					menu == 2 ? "" : "translate-x-full"
				} transition-transform duration-300 ease-in-out z-50`}
			>
				<div className="p-4 h-full flex flex-col">
					<button
						onClick={() => setMenu(null)}
						className="self-end p-2 rounded-md text-theme hover:text-theme-1 focus:outline-none cursor-pointer"
					>
						<i className="fas fa-times text-xl"></i>
					</button>

					<p className="py-5 text-white md:hidden">
						Experience a refined style that blends elegance with strength. Every
						detail is designed to flow seamlessly, creating balance, energy, and
						a lasting impression.
					</p>

					<ul className="mt-4 space-y-2.5 xl:hidden">
						<li className="relative homes-submenu-container">
							<button className="text-white hover:text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none">
								Homes
								<i
									className="fas fa-chevron-down text-sm transform transition-transform duration-300"
									id="homes-icon"
								></i>
							</button>
							{/* <!-- Submenu for Homes (Accordion) --> */}
							<ul
								id="homes-submenu"
								className="pl-4 mt-2 space-y-2 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
							>
								<li>
									<a
										href="index.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 1
									</a>
								</li>
								<li>
									<a
										href="index-2.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 2
									</a>
								</li>
								<li>
									<a
										href="index-3.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 3
									</a>
								</li>
								<li>
									<a
										href="index-5.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 4
									</a>
								</li>
								<li>
									<a
										href="index-6.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 5
									</a>
								</li>
								<li>
									<a
										href="index-7.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 6
									</a>
								</li>
								<li>
									!
									<a
										href="index-8.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Home 7
									</a>
								</li>
							</ul>
						</li>
						<li className="relative shop-submenu-container">
							<button className="text-white hover:text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none">
								Shop
								<i
									className="fas fa-chevron-down text-sm transform transition-transform duration-300"
									id="shop-icon"
								></i>
							</button>
							<ul
								id="shop-submenu"
								className="pl-4 mt-2 space-y-2 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
							>
								<li>
									<a
										href="shop-left-sidebar.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Shop Left Sidebar
									</a>
								</li>
								<li>
									<a
										href="shop-right-sidebar.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Shop Right Sidebar
									</a>
								</li>
								<li>
									<a
										href="shop-without-sidebar.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Shop Without Sidebar
									</a>
								</li>
								<li>
									<a
										href="shop-details-one.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Shop Details One
									</a>
								</li>
								<li>
									<a
										href="shop-details-two.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Shop Details Two
									</a>
								</li>
								<li>
									<a
										href="cart.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Cart
									</a>
								</li>
								<li>
									<a
										href="wishlist.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Wishlist
									</a>
								</li>
								<li>
									<a
										href="checkout.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Checkout
									</a>
								</li>
							</ul>
						</li>
						<li className="relative pages-submenu-container">
							<button className="text-white hover:text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none">
								Pages
								<i
									className="fas fa-chevron-down text-sm transform transition-transform duration-300"
									id="pages-icon"
								></i>
							</button>
							<ul
								id="pages-submenu"
								className="pl-4 mt-2 space-y-2 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
							>
								<li>
									<a
										href="about-us.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="testimonials.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Testimonials
									</a>
								</li>
								<li>
									<a
										href="faqs.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										FAQs
									</a>
								</li>
								<li>
									<a
										href="look-book.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Look Book
									</a>
								</li>
								<li>
									<a
										href="login.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Login
									</a>
								</li>
								<li>
									<a
										href="register.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Register
									</a>
								</li>
								<li>
									<a
										href="dashboard.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Dashboard
									</a>
								</li>
							</ul>
						</li>
						<li className="relative order-submenu-container">
							<button className="text-white hover:text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none">
								Order
								<i
									className="fas fa-chevron-down text-sm transform transition-transform duration-300"
									id="order-icon"
								></i>
							</button>
							<ul
								id="order-submenu"
								className="pl-4 mt-2 space-y-2 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
							>
								<li>
									<a
										href="order-tracking.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Order Tracking
									</a>
								</li>
								<li>
									<a
										href="order-history.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Order History
									</a>
								</li>
								<li>
									<a
										href="settings.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Settings
									</a>
								</li>
							</ul>
						</li>
						<li className="relative blogs-submenu-container">
							<button className="text-white hover:text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none">
								Blogs
								<i
									className="fas fa-chevron-down text-sm transform transition-transform duration-300"
									id="blogs-icon"
								></i>
							</button>
							<ul
								id="blogs-submenu"
								className="pl-4 mt-2 space-y-2 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
							>
								<li>
									<a
										href="blogs.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Blogs
									</a>
								</li>
								<li>
									<a
										href="blogs-classNameic.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Blogs classNameic
									</a>
								</li>
								<li>
									<a
										href="blog-details.html"
										className="!text-white hover:!text-theme text-sm px-4 py-2 block"
									>
										Blog Details
									</a>
								</li>
							</ul>
						</li>
						<li className="relative">
							<a
								href="contact.html"
								className="!text-white hover:!text-theme transition-colors font-semibold text-base px-4 py-2 w-full inline-flex items-center justify-between focus:outline-none"
							>
								Contact
							</a>
						</li>
					</ul>

					{/* <!-- responsive categories --> */}
					<div className="header-cataegory-item md:hidden my-5">
						<ul className="header-cataegory">
							<li>
								<a
									href="#"
									className="!text-white transition-colors hover:text-theme"
								>
									<span className="left-icon mr-2">
										<i className="fa-solid fa-grid-2"></i>
									</span>
									all categories
									<span className="right-icon ml-2">
										<i className="fa-regular fa-chevron-down"></i>
									</span>
								</a>
							</li>
						</ul>
						<ul className="sub-cataegory">
							<li className="sub-has-dropdown">
								<a href="#">
									All Laptop <i className="fas fa-angle-right"></i>
								</a>
								<ul className="sub-cataegory">
									<li>
										<a href="shop-without-sidebar.html">Lenovo</a>
									</li>
									<li>
										<a href="shop-without-sidebar.html">MSI</a>
									</li>
									<li>
										<a href="shop-without-sidebar.html">Asus</a>
									</li>
									<li>
										<a href="shop-without-sidebar.html">HP</a>
									</li>
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

					<div className="my-5">
						<h4 className="!text-theme">Contact Info</h4>

						<ul className="text-white font-medium text-base *:flex *:items-center *:gap-x-3 space-y-3 mt-3.5">
							<li>
								<i className="fa-regular fa-location-dot text-theme"></i>
								<span>Main Street, Melbourne, Australia.</span>
							</li>
							<li>
								<i className="fa-regular fa-envelope text-theme"></i>
								<span>info@example.com</span>
							</li>
							<li>
								<i className="fa-regular fa-timer text-theme"></i>
								<span>Mon-Friday, 09am-05pm</span>
							</li>
							<li>
								<i className="fa-regular fa-phone text-theme"></i>
								<span>+880 1918 123 123</span>
							</li>
						</ul>
					</div>

					<div className="my-5 w-full">
						<a href="#" className="theme-btn block w-full text-center">
							Get A Quote <i className="fa-solid fa-arrow-right"></i>
						</a>
					</div>

					<div className="my-5 w-full">
						<ul className="responsive-social-icons">
							<li>
								<a href="#">
									<i className="fa-brands fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-youtube"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-linkedin-in"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* <!-- Drawer Backdrop --> */}
			<div
				onClick={() => setMenu(null)}
				className={`${
					menu != 2 ? "opacity-0 hidden" : ""
				} fixed inset-0 bg-black/50 bg-opacity-0 transition-opacity duration-300 ease-in-out  z-40`}
			></div>

			{/* <!-- Newsletter Modal Start--> */}
			<div
				className="common-newsletter-modal"
				style={{ display: newsletter ? "block" : "none" }}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<div className="grid">
								<div className="relative">
									<button
										type="button"
										onClick={() => setNewsletter(false)}
										className="close"
									>
										<span>&times;</span>
									</button>
								</div>
								<div className="grid gap-6 lg:grid-cols-12 items-center">
									<div className="lg:col-span-5">
										<div className="offer-modal-img hidden lg:block">
											<Image src={commonModal} alt="img" />
										</div>
									</div>
									<div className="lg:col-span-7">
										<div className="offer-modal-right">
											<h3>Subscribe to Our Newsletter</h3>
											<p>
												Subscribe to our newsletter and Save your
												<span>20% money</span> with discount code today.
											</p>
											<form action="#!">
												<div className="input-group mb-3">
													<input
														type="text"
														className="form-control w-full focus:ring-0 focus:border-theme"
														placeholder="Enter your email"
													/>
													<div className="input-group-append">
														<button className="theme-btn style6 !py-[11px] max-h-[48px]">
															Subscribe
														</button>
													</div>
												</div>
												<div className="check_boxed_modal">
													<input
														type="checkbox"
														id="vehicle1"
														onChange={(e) =>
															(newsletterChecker.current = !e.target.checked)
														}
													/>
													<label htmlFor="vehicle1">
														Do not show this window
													</label>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => setNewsletter(false)}
				style={{ display: newsletter ? "block" : "none" }}
				className="newsletter-modal-backdrop"
			></div>
			{/* <!-- partials ended --> */}
		</>
	);
}
