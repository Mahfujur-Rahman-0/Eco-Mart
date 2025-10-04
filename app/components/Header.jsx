"use client";

import logo from "../../public/assets/images/logo/logo.svg";
import HomeOne from "../../public/assets/images/header/home-1.png";
import HomeTwo from "../../public/assets/images/header/home-2.png";
import HomeThree from "../../public/assets/images/header/home-3.png";
import HomeFour from "../../public/assets/images/header/home-4.png";
import HomeFive from "../../public/assets/images/header/home-5.png";
import HomeSix from "../../public/assets/images/header/home-6.png";
import HomeSeven from "../../public/assets/images/header/home-7.png";
import "../../public/assets/css/Style.css";
import "../../public/assets/css/vendor/all.min.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Header() {
	const [scrollC, setScrollC] = useState(0);
	const { setMenu } = useAppContext();

	useEffect(() => {
		const handleScroll = () => {
			setScrollC(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* <!-- navbar started --> */}

			<header className={`w-full ${scrollC > 130 ? "header-sticky" : ""}`}>
				{/* <!-- header top --> */}
				<div
					className={`w-full bg-title text-sm text-white ${
						scrollC > 80 ? "header-top-hide" : ""
					}`}
					id="header-top"
				>
					<div className="container max-w-[1800px] h-[50px] flex items-center justify-between">
						<span className="hidden sm:inline">
							<i className="fa-solid fa-phone"></i>
							<a href="tel:+123123123">+880 1234 123123</a>
						</span>
						<span className="hidden md:inline">
							<i className="fa-solid fa-tag" style={{ marginLeft: "4px" }}></i>{" "}
							59%
							<span className="text-theme-1"> discount </span> for all items
						</span>
						<div className="flex w-full sm:w-auto items-center gap-x-7 justify-between sm:justify-evenly">
							<div className="flex items-center gap-x-1">
								<label>
									<i className="fa-regular fa-earth-americas"></i>
								</label>
								<select
									id="language"
									className="text-white bg-transparent border-0 focus:!outline-none focus-within:!outline-0 focus:!border-0 focus-within:!border-0 focus-within:!ring-0 focus:!ring-0 focus:!ring-transparent focus:!shadow-none focus-within:!shadow-none *:bg-title py-1 font-medium"
								>
									<option value="en">English</option>
									<option value="ur">Urdu</option>
									<option value="sp">Spanish</option>
									<option value="ar">Arabic</option>
								</select>
							</div>
							<div className="h-4 w-px bg-icon hidden sm:block"></div>
							<div>
								<Link
									href="dashboard.html"
									className="items-center gap-x-2.5 inline-flex !text-white font-medium hover:!text-theme transition-colors"
								>
									<i className="fa-solid fa-user"></i>
									<span>My Account</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- sticky navbar --> */}
				<div className="container max-w-[1800px] flex items-center justify-between">
					<div className="flex items-center gap-x-14 py-6">
						<div>
							<Link href="/">
								<Image src={logo} alt="EcomArts" />
							</Link>
						</div>

						<div className="header-cataegory-item hidden md:block">
							<ul className="header-cataegory">
								<li>
									<Link href="#">
										<span className="left-icon mr-2">
											<i className="fa-solid fa-grid-2"></i>
										</span>{" "}
										all categories{" "}
										<span className="right-icon ml-2">
											<i className="fa-regular fa-chevron-down"></i>
										</span>
									</Link>
								</li>
							</ul>
							<ul className="sub-cataegory">
								<li className="sub-has-dropdown">
									<Link href="#">
										All Laptop <i className="fas fa-angle-right"></i>
									</Link>
									<ul className="sub-cataegory">
										<li>
											<Link href="shop-without-sidebar.html">Lenovo</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">MSI</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">Asus</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">HP</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">MacBook</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">Smart</Link>
										</li>
										<li>
											<Link href="shop-without-sidebar.html">Walton</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="shop-without-sidebar.html">Gadget</Link>
								</li>
								<li>
									<Link href="shop-without-sidebar.html">Phone</Link>
								</li>
								<li>
									<Link href="shop-without-sidebar.html">Digital Watch</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex items-center gap-x-32">
						<div className="hidden xl:block">
							<menu className="text-title text-base font-medium flex items-center gap-x-10 header-menu">
								<li className="menu-item">
									<Link href="/">
										Home <i className="fa-solid fa-plus"></i>
									</Link>
									<div className="sub-menu">
										<div className="w-full grid grid-cols-4 gap-8">
											<div className="relative group">
												<Link href="/">
													<Image src={HomeOne} alt="EcomArts" />
												</Link>
												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="/"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Electronics
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index.html">
													<Image src={HomeTwo} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-2.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Fashion
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index-3.html">
													<Image src={HomeThree} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-3.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Grocery Store
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index-4.html">
													<Image src={HomeFour} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-5.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Cosmetics
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index-6.html">
													<Image src={HomeFive} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-6.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Jewelary
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index-7.html">
													<Image src={HomeSix} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-7.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Furniture
													</Link>
												</div>
											</div>
											<div className="relative group">
												<Link href="index-8.html">
													<Image src={HomeSeven} alt="EcomArts" />
												</Link>

												<div className="absolute inset-0 invisible opacity-0 translate-y-2.5 transition-all duration-400 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
													<Link
														href="index-8.html"
														className="!text-white px-5 py-3 bg-theme-1 rounded-lg"
													>
														Pet Care
													</Link>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="menu-item group">
									<Link href="#">
										Shop <i className="fa-solid fa-plus"></i>
									</Link>

									<div className="sub-menu-2">
										<ul>
											<li>
												<Link href="shop-left-sidebar.html">
													Shop Left Sidebar
												</Link>
											</li>
											<li>
												<Link href="shop-right-sidebar.html">
													Shop Right Sidebar
												</Link>
											</li>
											<li>
												<Link href="shop-without-sidebar.html">
													Shop Without Sidebar
												</Link>
											</li>
											<li>
												<Link href="shop-details-one.html">
													Shop Details One
												</Link>
											</li>
											<li>
												<Link href="shop-details-two.html">
													Shop Details Two
												</Link>
											</li>
											<li>
												<Link href="cart.html">Cart</Link>
											</li>
											<li>
												<Link href="wishlist.html">Wishlist</Link>
											</li>
											<li>
												<Link href="checkout.html">Checkout</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="menu-item group">
									<Link href="#">
										Pages <i className="fa-solid fa-plus"></i>
									</Link>

									<div className="sub-menu-2">
										<ul>
											<li>
												<Link href="about-us.html">About Us</Link>
											</li>
											<li>
												<Link href="testimonials.html">Testimonials</Link>
											</li>
											<li>
												<Link href="faqs.html">FAQs</Link>
											</li>
											<li>
												<Link href="look-book.html">Look Book</Link>
											</li>
											<li>
												<Link href="login.html">Login</Link>
											</li>
											<li>
												<Link href="register.html">Register</Link>
											</li>
											<li>
												<Link href="dashboard.html">Dashboard</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="menu-item group">
									<Link href="#">
										Order <i className="fa-solid fa-plus"></i>
									</Link>

									<div className="sub-menu-2">
										<ul>
											<li>
												<Link href="order-tracking.html">Order Tracking</Link>
											</li>
											<li>
												<Link href="order-history.html">Order History</Link>
											</li>
											<li>
												<Link href="order-details-one.html">
													Order Details One
												</Link>
											</li>
											<li>
												<Link href="settings.html">Settings</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="menu-item group">
									<Link href="#">
										Blog <i className="fa-solid fa-plus"></i>
									</Link>

									<div className="sub-menu-2">
										<ul>
											<li>
												<Link href="blogs.html">Blogs</Link>
											</li>
											<li>
												<Link href="blogs-classNameic.html">
													Blogs classNameic
												</Link>
											</li>
											<li>
												<Link href="blogs-left-sidebar.html">
													Blogs Left Sidebar
												</Link>
											</li>
											<li>
												<Link href="blog-details.html">Blog Details</Link>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<Link href="contact.html">Contact</Link>
								</li>
							</menu>
						</div>
						<div className="flex items-center gap-x-8 md:gap-x-10 lg:gap-x-14">
							<Link
								href="#"
								onClick={() => setMenu(4)}
								className="hover:text-theme-1 transition-colors text-lg hidden md:inline"
							>
								<i className="fa-regular fa-magnifying-glass"></i>
							</Link>

							<Link
								href="wishlist.html"
								className="hover:text-theme-1 transition-colors text-lg hidden md:inline"
							>
								<i className="fa-light fa-heart"></i>
							</Link>

							<Link
								href="#"
								role="button"
								onClick={() => setMenu(3)}
								className="hover:text-theme-1 transition-colors text-lg relative"
							>
								<i className="fa-light fa-bag-shopping"></i>
								<span className="absolute top-0 -right-2 !bg-theme-1 rounded-full text-xs text-white w-4 h-4 flex items-center justify-center">
									2
								</span>
							</Link>
							<Link
								href="#"
								role="button"
								onClick={() => setMenu(2)}
								aria-label="Open menu drawer"
								className="text-theme-1 xl:hidden"
							>
								<i className="fa-regular fa-bars-staggered text-lg"></i>
							</Link>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- navbar ended --> */}
		</>
	);
}
