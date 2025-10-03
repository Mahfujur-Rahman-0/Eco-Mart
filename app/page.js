// custom css start
import "../public/assets/css/Style.css";
import "../public/assets/css/vendor/all.min.css";
// custom css end
import introThumbShapeOne from "../public/assets/images/homepage-1/introThumbShape1_1.png";
import introThumbShapeTwo from "../public/assets/images/homepage-1/introThumbShape1_2.png";
import introThumbShapeThree from "../public/assets/images/homepage-1/introThumbShape1_3.png";
import VideoOne from "../public/assets/images/homepage-1/video-1.png";
import introThumbShape1_4 from "../public/assets/images/homepage-1/introThumbShape1_4.png";
import introThumb1_1 from "../public/assets/images/homepage-1/introThumb1_1.png";
import introThumb1_2 from "../public/assets/images/homepage-1/introThumb1_2.png";
import introThumb1_3 from "../public/assets/images/homepage-1/introThumb1_3.png";
import best_seller_1 from "../public/assets/images/homepage-1/best-seller-1.png";
import best_seller_2 from "../public/assets/images/homepage-1/best-seller-2.png";
import best_seller_3 from "../public/assets/images/homepage-1/best-seller-3.png";
import best_seller_4 from "../public/assets/images/homepage-1/best-seller-4.png";
import best_seller_5 from "../public/assets/images/homepage-1/best-seller-5.png";
import best_seller_6 from "../public/assets/images/homepage-1/best-seller-6.png";
import best_seller_7 from "../public/assets/images/homepage-1/best-seller-7.png";
import best_seller_8 from "../public/assets/images/homepage-1/best-seller-8.png";
import banner_1 from "../public/assets/images/homepage-1/banner-1.png";

import Image from "next/image";
import Partials from "./components/Partials";
import SliderEngine from "./components/SliderEngine";
import CategorieSlide from "./components/CategorieSlide";

export default function Home() {
	const TopSliderimages = [introThumb1_1, introThumb1_2, introThumb1_3];
	return (
		<>
			{/* <!-- intro stated --> */}
			<section className="intro-section">
				<div className="intro-container-wrapper style1">
					<div className="container max-w-[1800px]">
						<div className="intro-wrapper style1">
							<div className="thumb-shape-wrapper">
								<div className="thumbShape thumbShape1">
									<Image loading="lazy" src={introThumbShapeOne} alt="shape" />
								</div>
								<div className="thumbShape thumbShape2">
									<Image loading="lazy" src={introThumbShapeTwo} alt="shape" />
								</div>
								<div className="thumbShape thumbShape3">
									<Image
										loading="lazy"
										src={introThumbShapeThree}
										alt="shape"
									/>
								</div>
							</div>

							<div className="grid gap-y-5 grid-cols-1 lg:grid-cols-2">
								<div className="col-span-1">
									<div className="intro-content">
										<div className="subtitle style1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 14 14"
												fill="none"
												className="inline"
											>
												<g clipPath="url(#clip0_86_101)">
													<path
														d="M12.8333 6.10352e-05H7.98425C7.66347 6.10352e-05 7.21514 0.185895 6.9885 0.412368L0.34046 7.06037C-0.113477 7.51379 -0.113477 8.2572 0.34046 8.71008L5.29046 13.6599C5.74338 14.1133 6.48606 14.1133 6.93966 13.6594L13.5877 7.01242C13.8141 6.78598 14 6.33693 14 6.01684V1.16678C14 0.525228 13.4748 6.10352e-05 12.8333 6.10352e-05ZM10.4998 4.66675C9.85547 4.66675 9.33311 4.14384 9.33311 3.50004C9.33311 2.85517 9.85547 2.33332 10.4998 2.33332C11.1442 2.33332 11.6667 2.85517 11.6667 3.50004C11.6667 4.14384 11.1442 4.66675 10.4998 4.66675Z"
														fill="#0A111E"
													/>
												</g>
												<defs>
													<clipPath id="clip0_86_101">
														<rect width="14" height="14" fill="white" />
													</clipPath>
												</defs>
											</svg>{" "}
											59% <span className="color-text"> discount </span> for all
											items
										</div>
										<h1>Electric charging smart tea maker</h1>
										<p>
											Sell globally in minutes with localized currencies,
											languages, and experiences in every market.
										</p>
										<div className="pricing-card">
											<div className="price-box">
												<div className="price">price</div>
												<h6>$125.75</h6>
											</div>
											<div className="color-box">
												<div className="color">color</div>
												<div className="color-plate">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<circle cx="8" cy="8" r="8" fill="#770215" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<circle cx="8" cy="8" r="8" fill="#E9CF10" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<circle cx="8" cy="8" r="8" fill="#35424B" />
													</svg>
												</div>
											</div>
											<div className="video-wrap ripple-effect rounded-0">
												<a
													href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
													className="play-btn popup-video"
												>
													<Image
														loading="lazy"
														className="playerImg"
														src={VideoOne}
														alt="icon"
													/>
												</a>
											</div>
										</div>

										<div className="btn-wrapper">
											<a className="theme-btn style6" href="cart.html">
												Add To Cart
											</a>
											<a className="theme-btn style7" href="cart.html">
												view now
											</a>
										</div>
									</div>
								</div>
								<div className="col-span-1">
									<div className="thumb-slider">
										<div className="introThumbShape">
											<Image
												loading="lazy"
												src={introThumbShape1_4}
												alt="shape"
											/>
										</div>
										<div className="intro-thumb">
											<SliderEngine
												images={TopSliderimages}
												sliderType="sliderTypeOne"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- intro ended --> */}
			{/* <!-- Offer Marquee Started --> */}
			<section className="container max-w-[1800px] bg-gradient-to-r from-theme-1 to-[#E9CF10] my-5 px-10 py-7 rounded-full text-white">
				<div className="flex items-center gap-x-5 capitalize overflow-hidden font-medium text-xl marquee-container">
					<div className="flex items-center gap-x-5 marquee-content animate-marquee">
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
						<i className="fa-sharp fa-solid fa-star"></i>
						<p>Limited time offer</p>
					</div>
				</div>
			</section>
			{/* <!-- Offer Marquee Ended --> */}
			{/* <!-- popular category started --> */}
			<section className="product-section section-padding fix">
				<div className="product-contianer-wrapper  style1">
					<CategorieSlide />
				</div>
			</section>
			{/* <!-- popular category ended --> */}
			{/* <!-- best seller started --> */}
			<section className="container">
				<hr className="border-border-1" />

				<div className="my-10">
					<div className="flex flex-col my-5 lg:flex-row lg:items-center lg:justify-between">
						<div className="Product-categorie-container">
							<span className="tag mb-5"> Best Sellers </span>
							<h2 className="mt-4 mb-5">Best Seller</h2>
						</div>

						<ul className="filter-btn flex items-center justify-center lg:justify-baseline flex-wrap gap-2.5">
							<li>
								<button
									className="btn theme-button-outline btn-active best-seller-1-btn"
									data-sale-target="latest"
								>
									latest
								</button>
							</li>
							<li>
								<button
									className="btn theme-button-outline best-seller-1-btn"
									data-sale-target="popular"
								>
									popular
								</button>
							</li>
							<li>
								<button
									className="btn theme-button-outline best-seller-1-btn"
									data-sale-target="on-sale"
								>
									On-Sale
								</button>
							</li>

							<select
								className="focus:ring-theme focus:border-none rounded-full border-border-1 Price-Seperator"
								defaultValue="Price"
							>
								<option value="">Price</option>
								<option value="high">High to Low</option>
								<option value="low">Low to High</option>
							</select>

							<a
								className="btn View-All-btn theme-button-secondary"
								href="shop-right-sidebar.html"
							>
								View All
							</a>
						</ul>
					</div>

					{/* <!-- latest --> */}
					<div
						className="grid justify-items-center xsm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 best-seller-1-wrapper"
						data-on-sale="latest"
					>
						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_1} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Android Phone</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs"> 5 Reviews </span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$25.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$35.59
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_2} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Vlc speaker</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(11) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$5.00</span>
									<span className="font-medium line-through text-[#A1A1A1]">
										$6.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_3} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">iPhone 16max pro</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(99+) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$500.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$96.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_4} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Wireless mouse</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$3.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$3.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_5} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart Drone Plus</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$120.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$133.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_6} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Macbook M2</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$720.00</span>

									<span className="font-medium text-[#A1A1A1] line-through">
										$800.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_7} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Charging Lights</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_8} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart CC Camera</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- popular --> */}
					<div
						className="justify-items-center xsm:grid-cols-2 hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 best-seller-1-wrapper"
						data-on-sale="popular"
					>
						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_5} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart Drone Plus</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$120.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$133.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_6} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Macbook M2</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$720.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$800.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_5} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Charging Lights</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_5} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart CC Camera</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_1} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Android Phone</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs"> 5 Reviews </span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$25.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$35.59
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_2} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Vlc speaker</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(11) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$5.00</span>
									<span className="font-medium line-through text-[#A1A1A1]">
										$6.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_3} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">iPhone 16max pro</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(99+) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$500.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$96.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_4} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Wireless mouse</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$3.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$3.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- on-sale --> */}
					<div
						className="justify-items-center xsm:grid-cols-2 hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 best-seller-1-wrapper"
						data-on-sale="on-sale"
					>
						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_3} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">iPhone 16max pro</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(99+) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$500.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$96.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_4} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Wireless mouse</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$3.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$3.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_1} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Android Phone</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs"> 5 Reviews </span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$25.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$35.59
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_2} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Vlc speaker</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(11) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$5.00</span>
									<span className="font-medium line-through text-[#A1A1A1]">
										$6.32
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_7} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Charging Lights</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_8} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart CC Camera</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$10.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$11.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_5} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Smart Drone Plus</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(3) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$120.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$133.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>

						<div className="on-sale-cart-1">
							<div className="on-sale-cart-1-img">
								<Image loading="lazy" src={best_seller_6} alt="EcomArts" />
							</div>
							<div className="on-sale-cart-1-body">
								<h4>
									<a href="shop-details-one.html">Macbook M2</a>
								</h4>
								<div className="on-sale-cart-reviews mt-2 mb-1.5 flex items-center gap-x-2.5">
									<div>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#F9A000]"></i>
										</span>
										<span>
											<i className="fa-solid fa-star-sharp text-sm text-[#CFCFCF]"></i>
										</span>
									</div>
									<span className="text-[#A1A1A1] text-xs">(13) Reviews</span>
								</div>

								<div className="flex items-center gap-x-2.5">
									<span className="text-title font-medium">$720.00</span>
									<span className="font-medium text-[#A1A1A1] line-through">
										$800.50
									</span>
								</div>

								<div className="flex items-center gap-x-2.5 mt-2">
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-heart"></i>
									</button>
									<button className="size-[36px] rounded-full text-title bg-[#F2F2F2] flex items-center justify-center transition-colors hover:bg-theme-1/10 hover:text-theme-1">
										<i className="fa-regular fa-bag-shopping"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="View-All-btn-sec">
						<a
							className="btn theme-button-secondary inline-block mt-5"
							href="shop-right-sidebar.html"
						>
							View All
						</a>
					</div>
				</div>
			</section>
			{/* <!-- best seller ended --> */}
			{/* <!-- banner started --> */}
			<div className="container">
				<div className="w-full grid lg:grid-cols-2 lg:gap-16 md:gap-12 gap-10 xl:gap-24 bg-gradient-to-b lg:bg-gradient-to-r from-theme-1 to-[#F9A000] rounded-lg shadow-lg">
					<div className="xl:p-14 lg:p-12 md:p-10 p-8 relative">
						<button className="play-btn mt-5 ml-5">
							<i className="fa-solid fa-play text-white"></i>
						</button>

						<h1 className="xl:!text-[50px] !font-light !text-white mt-10">
							See The Worlds Like Birds
						</h1>

						<a
							href="shop-details-two.html"
							className="bg-white rounded-full px-5 py-3 font-medium text-theme mt-7 block w-fit"
						>
							View All Products
						</a>
					</div>
					<div className="xl:px-14 lg:px-12 md:px-10 px-8 xl:py-11 lg:py-10 md:py-8 py-6">
						<Image loading="lazy" src={banner_1} alt="EcomArts" />
					</div>
				</div>
			</div>
			{/* <!-- banner ended --> */}
			{/* <!-- featured products started --> */}
			<section className="container my-10">
				<div className="flex items-center flex-col justify-center">
					<span className="tag">Featured Products</span>
					<h2 className="featured-products">Our Featured Products</h2>
				</div>
				<hr className="border-bg-6 my-7" />

				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
					<div className="flex items-center flex-wrap gap-2.5">
						<button
							className="fp-1-filter-btns btn theme-button-outline btn-active"
							data-fp1-btn="all"
						>
							All
						</button>
						<button
							className="fp-1-filter-btns btn theme-button-outline"
							data-fp1-btn="oven"
						>
							Oven
						</button>
						<button
							className="fp-1-filter-btns btn theme-button-outline"
							data-fp1-btn="computer"
						>
							Computer
						</button>
						<button
							className="fp-1-filter-btns btn theme-button-outline"
							data-fp1-btn="watch"
						>
							Watch
						</button>
						<button
							className="fp-1-filter-btns btn theme-button-outline"
							data-fp1-btn="camera"
						>
							Camera
						</button>
						<button
							className="fp-1-filter-btns btn theme-button-outline"
							data-fp1-btn="drone"
						>
							Drone
						</button>
					</div>

					<div>
						<select
							name="brand name"
							id="brand name"
							className="rounded-full border-border-6 text-title focus:ring-theme-1"
							defaultValue=""
						>
							<option value="" className="font-semibold">
								Select Brand Name
							</option>
							<option value="apple">Apple</option>
							<option value="dell">Dell</option>
							<option value="lg">LG</option>
							<option value="asus">Asus</option>
						</select>
					</div>
				</div>

				{/* <!-- All --> */}
				<div
					className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="all"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Oven --> */}
				<div
					className="w-full hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="oven"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- computer --> */}
				<div
					className="w-full hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="computer"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- watch --> */}
				<div
					className="w-full hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="watch"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- camera --> */}
				<div
					className="w-full hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="camera"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- drone --> */}
				<div
					className="w-full hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-10 fp1-wrapper"
					data-fp1-wrapper="drone"
				>
					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-1.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Macbook Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-4.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									5$ Discount
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch xMini</h4>
							<div className="featured-products-1-reviews">
								<div className="">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span className="text-xs text-[#A1A1A1]"> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$20.00</span>
								<span className="old-price">$50.69</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-7.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>canon camera 40D</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(29) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$430.00</span>
								<span className="old-price">$500.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-8.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple Watch Mini</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(11) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$10.00</span>
								<span className="old-price">$12.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-6.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									10% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Smart headphone</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(32) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$32.00</span>
								<span className="old-price">$30.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-2.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									43% OFF
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>Apple i16x</h4>
							<div className="">
								<div className="featured-products-1-reviews">
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span> (0) Reviews </span>
							</div>

							<div className="featured-products-1-price">
								<span>$192.00</span>
								<span className="old-price">$200.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-3.png"
								alt="EcomArts"
							/>

							<div className="absolute bottom-full left-5 transition-all duration-500 group-hover:top-5">
								<p className="rounded-full px-3 py-0.5 bg-theme-1 uppercase text-white text-sm">
									Free Shipping
								</p>
							</div>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>JBL sound system</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$33.00</span>
								<span className="old-price">$35.00</span>
							</div>
						</div>
					</div>

					<div className="featured-products-1 group">
						<div className="featured-products-1-img">
							<img
								loading="lazy"
								src="assets/images/homepage-1/product-5.png"
								alt="EcomArts"
							/>

							<div className="featured-products-1-btns">
								<a href="shop-details-one.html">
									<i className="fa-light fa-eye"></i>
								</a>
								<button>
									<i className="fa-light fa-heart"></i>
								</button>
								<button>
									<i className="fa-light fa-bag-shopping"></i>
								</button>
							</div>
						</div>
						<div className="featured-products-1-body">
							<h4>iPhone 16 Max</h4>
							<div className="featured-products-1-reviews">
								<div>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp text-rating"></i>
									</span>
									<span>
										<i className="fa-solid fa-star-sharp"></i>
									</span>
								</div>
								<span>(22) Reviews</span>
							</div>

							<div className="featured-products-1-price">
								<span>$500.00</span>
								<span className="old-price">$501.00</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- featured products ended --> */}

			{/* <!-- offer products started --> */}
			<section className="container my-10">
				<div className="grid 2xl:grid-cols-5 md:grid-cols-2 gap-[30px]">
					<div className="2xl:col-span-2 bg-[#FFDEDC] rounded-[20px] px-10 pb-[60px] flex items-center justify-center flex-col">
						<img
							loading="lazy"
							src="assets/images/homepage-1/offer-1.png"
							alt="EcomArts"
						/>

						<div className="flex items-center justify-between mt-5 w-full">
							<div className="">
								<span className="text-theme-1 uppercase font-semibold">
									get 30% off
								</span>
								<h3>New power double</h3>
							</div>
							<div>
								<a
									className="btn btn-lg theme-button"
									href="shop-without-sidebar.html"
								>
									View All
								</a>
							</div>
						</div>
					</div>
					<div className="2xl:col-span-3 bg-[#CCD9EB] rounded-[20px] px-10 py-[60px] flex justify-center items-center flex-col">
						<img
							loading="lazy"
							src="assets/images/homepage-1/offer-2.png"
							alt="EcomArts"
						/>
						<div className="flex items-center w-full justify-between mt-auto">
							<div className="">
								<span className="text-theme-1 uppercase font-semibold">
									get 30% off
								</span>
								<h3>New power double</h3>
							</div>
							<div>
								<a
									className="btn btn-lg theme-button-secondary"
									href="shop-without-sidebar.html"
								>
									View All
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- offer products ended --> */}

			{/* <!-- hot sell started --> */}
			<div className="popular-product-section section-padding bg-bg-2 fix">
				<div className="container">
					<div className="grid gap-y-6 mb-7.5 md:grid-cols-2">
						<div className="section-title">
							<div className="subtitle style1">Hot Sell</div>
							<h2 className="title">Products Of The Week</h2>
						</div>
						<div className="flex items-center md:justify-end">
							<div className="btn-wrapper">
								<a className="theme-btn style7" href="shop-left-sidebar.html">
									View all
								</a>
							</div>
						</div>
					</div>
					<div className="grid gap-6 2xl:grid-cols-3">
						<div className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-1">
							<div className="popular-product-card-item-one">
								<div className="popular-product-card-item-one__content">
									<div className="offer">-30%</div>
									<h6 className="subtitle style1">Basic gift idea</h6>
									<p>New Arrival</p>
									<h3>
										<a href="shop-details-one.html">Top smart watch’s</a>
									</h3>
									<div className="btn-wrapper product-btn-wrapper">
										<a className="theme-btn style6" href="cart.html">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												className="inline"
											>
												<g clipPath="url(#clip0_86_603)">
													<path
														d="M15.7625 5.78421C15.5512 5.51915 15.2342 5.36709 14.8928 5.36709H11.8114L10.1405 1.54106C10.0369 1.30384 9.7606 1.19543 9.52335 1.29909C9.2861 1.40268 9.17775 1.67903 9.28138 1.91628L10.7884 5.36712H5.2116L6.71863 1.91628C6.82222 1.67903 6.71391 1.40271 6.47666 1.29909C6.23944 1.19543 5.9631 1.30377 5.8595 1.54106L4.1886 5.36712H1.10722C0.765783 5.36712 0.448814 5.51915 0.237533 5.78424C0.030127 6.04449 -0.0464043 6.37906 0.0275645 6.70224L1.6731 13.8897C1.788 14.3916 2.23197 14.7421 2.75275 14.7421H13.2473C13.768 14.7421 14.212 14.3916 14.3269 13.8897L15.9724 6.70221C16.0464 6.37902 15.9699 6.04446 15.7625 5.78421ZM13.2473 13.8046H2.75275C2.67316 13.8046 2.60344 13.7524 2.58697 13.6805L0.941439 6.49302C0.928533 6.43662 0.950189 6.39418 0.970689 6.36853C0.989689 6.34465 1.03272 6.30462 1.10722 6.30462H3.77919L3.65641 6.58577C3.55281 6.82302 3.66113 7.09934 3.89838 7.20296C3.95744 7.22887 4.02123 7.24226 4.08572 7.24228C4.26641 7.24228 4.4386 7.13718 4.51553 6.96103L4.80219 6.30468H11.1979L11.4845 6.96103C11.5615 7.13721 11.7337 7.24228 11.9143 7.24228C11.977 7.24228 12.0406 7.22965 12.1017 7.20296C12.3389 7.09937 12.4473 6.82302 12.3437 6.58577L12.2209 6.30462H14.8928C14.9673 6.30462 15.0104 6.34465 15.0294 6.36853C15.0498 6.39421 15.0715 6.43665 15.0586 6.49299L13.4131 13.6805C13.3966 13.7524 13.3268 13.8046 13.2473 13.8046Z"
														fill="#FF4035"
													></path>
													<path
														d="M5.1875 8.33594C4.92862 8.33594 4.71875 8.54581 4.71875 8.80469V12.2422C4.71875 12.5011 4.92862 12.7109 5.1875 12.7109C5.44638 12.7109 5.65625 12.5011 5.65625 12.2422V8.80469C5.65625 8.54581 5.44641 8.33594 5.1875 8.33594ZM8 8.33594C7.74113 8.33594 7.53125 8.54581 7.53125 8.80469V12.2422C7.53125 12.5011 7.74113 12.7109 8 12.7109C8.25887 12.7109 8.46875 12.5011 8.46875 12.2422V8.80469C8.46875 8.54581 8.25887 8.33594 8 8.33594ZM10.8125 8.33594C10.5536 8.33594 10.3438 8.54581 10.3438 8.80469V12.2422C10.3438 12.5011 10.5536 12.7109 10.8125 12.7109C11.0714 12.7109 11.2812 12.5011 11.2812 12.2422V8.80469C11.2812 8.54581 11.0714 8.33594 10.8125 8.33594Z"
														fill="#FF4035"
													></path>
												</g>
												<defs>
													<clipPath id="clip0_86_60322">
														<rect width="16" height="16" fill="white"></rect>
													</clipPath>
												</defs>
											</svg>
											Add To Cart
										</a>
										<div className="timer-box-2">
											<i className="fa-sharp fa-solid fa-alarm-clock"></i>
											<span className="text">
												23 : 23 : 56 :<span className="sec onlySec">56</span>
											</span>
										</div>
									</div>
								</div>
								<div className="popular-product-card-item-one__thumb">
									<img
										loading="lazy"
										src="assets/images/homepage-1/hot-sell-1.png"
										alt="thumb"
									/>
								</div>
							</div>
							<div className="popular-product-card-item-one !pr-0">
								<div className="popular-product-card-item-one__content">
									<div className="offer">-30%</div>
									<h6 className="subtitle style1">Basic gift idea</h6>
									<p>New Arrival</p>
									<h3>
										<a href="shop-details-one.html">smart Laptop series 7</a>
									</h3>
									<div className="btn-wrapper product-btn-wrapper">
										<a className="theme-btn style6" href="cart.html">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												className="inline"
											>
												<g clipPath="url(#clip0_86_603)">
													<path
														d="M15.7625 5.78421C15.5512 5.51915 15.2342 5.36709 14.8928 5.36709H11.8114L10.1405 1.54106C10.0369 1.30384 9.7606 1.19543 9.52335 1.29909C9.2861 1.40268 9.17775 1.67903 9.28138 1.91628L10.7884 5.36712H5.2116L6.71863 1.91628C6.82222 1.67903 6.71391 1.40271 6.47666 1.29909C6.23944 1.19543 5.9631 1.30377 5.8595 1.54106L4.1886 5.36712H1.10722C0.765783 5.36712 0.448814 5.51915 0.237533 5.78424C0.030127 6.04449 -0.0464043 6.37906 0.0275645 6.70224L1.6731 13.8897C1.788 14.3916 2.23197 14.7421 2.75275 14.7421H13.2473C13.768 14.7421 14.212 14.3916 14.3269 13.8897L15.9724 6.70221C16.0464 6.37902 15.9699 6.04446 15.7625 5.78421ZM13.2473 13.8046H2.75275C2.67316 13.8046 2.60344 13.7524 2.58697 13.6805L0.941439 6.49302C0.928533 6.43662 0.950189 6.39418 0.970689 6.36853C0.989689 6.34465 1.03272 6.30462 1.10722 6.30462H3.77919L3.65641 6.58577C3.55281 6.82302 3.66113 7.09934 3.89838 7.20296C3.95744 7.22887 4.02123 7.24226 4.08572 7.24228C4.26641 7.24228 4.4386 7.13718 4.51553 6.96103L4.80219 6.30468H11.1979L11.4845 6.96103C11.5615 7.13721 11.7337 7.24228 11.9143 7.24228C11.977 7.24228 12.0406 7.22965 12.1017 7.20296C12.3389 7.09937 12.4473 6.82302 12.3437 6.58577L12.2209 6.30462H14.8928C14.9673 6.30462 15.0104 6.34465 15.0294 6.36853C15.0498 6.39421 15.0715 6.43665 15.0586 6.49299L13.4131 13.6805C13.3966 13.7524 13.3268 13.8046 13.2473 13.8046Z"
														fill="#FF4035"
													></path>
													<path
														d="M5.1875 8.33594C4.92862 8.33594 4.71875 8.54581 4.71875 8.80469V12.2422C4.71875 12.5011 4.92862 12.7109 5.1875 12.7109C5.44638 12.7109 5.65625 12.5011 5.65625 12.2422V8.80469C5.65625 8.54581 5.44641 8.33594 5.1875 8.33594ZM8 8.33594C7.74113 8.33594 7.53125 8.54581 7.53125 8.80469V12.2422C7.53125 12.5011 7.74113 12.7109 8 12.7109C8.25887 12.7109 8.46875 12.5011 8.46875 12.2422V8.80469C8.46875 8.54581 8.25887 8.33594 8 8.33594ZM10.8125 8.33594C10.5536 8.33594 10.3438 8.54581 10.3438 8.80469V12.2422C10.3438 12.5011 10.5536 12.7109 10.8125 12.7109C11.0714 12.7109 11.2812 12.5011 11.2812 12.2422V8.80469C11.2812 8.54581 11.0714 8.33594 10.8125 8.33594Z"
														fill="#FF4035"
													></path>
												</g>
												<defs>
													<clipPath id="clip0_86_60311">
														<rect width="16" height="16" fill="white"></rect>
													</clipPath>
												</defs>
											</svg>
											Add To Cart
										</a>
										<div className="timer-box-2 mb-0">
											<i className="fa-sharp fa-solid fa-alarm-clock"></i>
											<span className="text">
												23 : 23 : 56 :<span className="sec onlySec">56</span>
											</span>
										</div>
									</div>
								</div>
								<div className="popular-product-card-item-one__thumb child2">
									<img
										loading="lazy"
										src="assets/images/homepage-1/hot-sell-2.png"
										alt="thumb"
									/>
								</div>
							</div>
						</div>
						<div className="2xl:col-span-2">
							<div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
								<div className="popular-product-card-item-two">
									<div className="popular-product-card-item-two__thumb">
										<img
											loading="lazy"
											src="assets/images/homepage-1/hot-sell-3.png"
											alt="thumb"
										/>
									</div>
									<div className="popular-product-card-item-two__content">
										<h6>
											<a href="shop-details-one.html">I Phone 16 pro Max</a>
										</h6>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
										<div className="popular-product-timer-box">
											<div className="box">
												<h5 className="number count-days">24</h5>
												<p className="text">Days</p>
											</div>
											<div className="box">
												<h5 className="number count-hours">09</h5>
												<p className="text">Hour</p>
											</div>
											<div className="box">
												<h5 className="number count-minutes">25</h5>
												<p className="text">Min</p>
											</div>
											<div className="box">
												<h5 className="number count-seconds">05</h5>
												<p className="text">Sec</p>
											</div>
										</div>
										<div className="price">
											<span className="discount-price">$532</span>
											<span className="original-price">$753</span>
										</div>
										<div className="icon">
											<button>
												<i className="fa-regular fa-eye"></i>
											</button>
											<a href="wishlist.html">
												<i className="fa-regular fa-heart"></i>
											</a>
											<a href="cart.html">
												<i className="fa-light fa-bag-shopping"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="popular-product-card-item-two">
									<div className="popular-product-card-item-two__thumb">
										<img
											loading="lazy"
											src="assets/images/homepage-1/hot-sell-4.png"
											alt="thumb"
										/>
									</div>
									<div className="popular-product-card-item-two__content">
										<h6>
											<a href="shop-details-one.html">Bluetooth Headphones</a>
										</h6>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
										<div className="timer-box-2">
											<i className="fa-sharp fa-solid fa-alarm-clock"></i>
											<span className="text">
												23 : 23 : 56 :<span className="sec onlySec">56</span>
											</span>
										</div>
										<p className="text">
											<span className="color-text">Hurry Up!</span>
											offers ends in:
										</p>
										<div className="price">
											<span className="discount-price">$532</span>
											<span className="original-price">$753</span>
										</div>
										<div className="icon">
											<button>
												<i className="fa-regular fa-eye"></i>
											</button>
											<a href="wishlist.html">
												<i className="fa-regular fa-heart"></i>
											</a>
											<a href="cart.html">
												<i className="fa-light fa-bag-shopping"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="popular-product-card-item-two child3">
									<div className="popular-product-card-item-two__thumb">
										<img
											loading="lazy"
											src="assets/images/homepage-1/hot-sell-5.png"
											alt="thumb"
										/>
									</div>
									<div className="popular-product-card-item-two__content">
										<h6>
											<a href="shop-details-one.html">Smart watch series 7</a>
										</h6>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
										<div className="icon-box">
											<button>
												<i className="fa-regular fa-eye"></i>
											</button>
											<a href="shop-details-one.html">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="12"
													viewBox="0 0 16 12"
													fill="none"
												>
													<path
														d="M2.61831 10.3002H0.510856C0.228693 10.3002 0 10.0248 0 9.68504C0 9.34529 0.228693 9.06992 0.510856 9.06992H2.61831C3.96442 9.06992 5.23917 8.21878 6.2081 6.67297L7.37149 4.81713C8.52109 2.98302 10.1269 1.93115 11.7768 1.93115H14.3241C14.6062 1.93115 14.8349 2.20652 14.8349 2.54628C14.8349 2.88604 14.6062 3.16141 14.3241 3.16141H11.7766C10.4307 3.16141 9.15574 4.01275 8.18682 5.55836L7.02342 7.4142C5.874 9.2483 4.26821 10.3002 2.61831 10.3002Z"
														fill="white"
													/>
													<path
														d="M2.61831 10.3002H0.510856C0.228693 10.3002 0 10.0248 0 9.68504C0 9.34529 0.228693 9.06992 0.510856 9.06992H2.61831C3.96442 9.06992 5.23917 8.21878 6.2081 6.67297L7.37149 4.81713C8.52109 2.98302 10.1269 1.93115 11.7768 1.93115H14.3241C14.6062 1.93115 14.8349 2.20652 14.8349 2.54628C14.8349 2.88604 14.6062 3.16141 14.3241 3.16141H11.7766C10.4307 3.16141 9.15574 4.01275 8.18682 5.55836L7.02342 7.4142C5.874 9.2483 4.26821 10.3002 2.61831 10.3002Z"
														stroke="white"
													/>
													<path
														d="M14.3241 10.3002H12.2166C10.5667 10.3002 8.96086 9.2483 7.81125 7.4142L6.64785 5.55836C5.67892 4.01254 4.40397 3.16141 3.05802 3.16141H0.510862C0.228696 3.16141 0 2.88604 0 2.54628C0 2.20652 0.228696 1.93115 0.510862 1.93115H3.05802C4.70777 1.93115 6.31358 2.98302 7.46336 4.81733L8.62676 6.67297C9.59553 8.21878 10.8705 9.06992 12.2166 9.06992H14.3241C14.6062 9.06992 14.8349 9.34529 14.8349 9.68504C14.8349 10.0248 14.6062 10.3002 14.3241 10.3002Z"
														fill="white"
													/>
													<path
														d="M14.3241 10.3002H12.2166C10.5667 10.3002 8.96086 9.2483 7.81125 7.4142L6.64785 5.55836C5.67892 4.01254 4.40397 3.16141 3.05802 3.16141H0.510862C0.228696 3.16141 0 2.88604 0 2.54628C0 2.20652 0.228696 1.93115 0.510862 1.93115H3.05802C4.70777 1.93115 6.31358 2.98302 7.46336 4.81733L8.62676 6.67297C9.59553 8.21878 10.8705 9.06992 12.2166 9.06992H14.3241C14.6062 9.06992 14.8349 9.34529 14.8349 9.68504C14.8349 10.0248 14.6062 10.3002 14.3241 10.3002Z"
														stroke="white"
													/>
													<path
														d="M13.3552 3.87437L14.9812 2.24938L13.3552 0.626465V3.87437Z"
														fill="white"
													/>
													<path
														d="M13.3552 3.87437L14.9812 2.24938L13.3552 0.626465V3.87437Z"
														stroke="white"
													/>
													<path
														d="M13.3546 4.50025C13.2739 4.50025 13.1925 4.48458 13.1146 4.45242C12.88 4.3555 12.7271 4.127 12.7271 3.87364V0.626569C12.7271 0.373212 12.8798 0.144709 13.1146 0.0477942C13.3496 -0.0493298 13.6196 0.00434942 13.7989 0.183559L15.4253 1.80689C15.6706 2.05147 15.6706 2.44832 15.4253 2.69291L13.7989 4.31644C13.6786 4.43654 13.5181 4.50025 13.3546 4.50025ZM13.9827 2.13941V2.36081L14.0936 2.25011L13.9827 2.13941Z"
														fill="white"
													/>
													<path
														d="M13.3546 4.50025C13.2739 4.50025 13.1925 4.48458 13.1146 4.45242C12.88 4.3555 12.7271 4.127 12.7271 3.87364V0.626569C12.7271 0.373212 12.8798 0.144709 13.1146 0.0477942C13.3496 -0.0493298 13.6196 0.00434942 13.7989 0.183559L15.4253 1.80689C15.6706 2.05147 15.6706 2.44832 15.4253 2.69291L13.7989 4.31644C13.6786 4.43654 13.5181 4.50025 13.3546 4.50025ZM13.9827 2.13941V2.36081L14.0936 2.25011L13.9827 2.13941Z"
														stroke="white"
													/>
													<path
														d="M13.3552 11.1454L14.9812 9.52246L13.3552 7.89746V11.1454Z"
														fill="white"
													/>
													<path
														d="M13.3552 11.1454L14.9812 9.52246L13.3552 7.89746V11.1454Z"
														stroke="white"
													/>
													<path
														d="M13.3546 11.7719C13.2739 11.7719 13.1923 11.7564 13.1146 11.724C12.88 11.6271 12.7271 11.3986 12.7271 11.1453V7.89819C12.7271 7.64463 12.88 7.41612 13.1146 7.31942C13.3502 7.22188 13.6196 7.27618 13.7989 7.45518L15.4253 9.07872C15.6706 9.32351 15.6706 9.72016 15.4253 9.96474L13.7989 11.5881C13.6786 11.7082 13.5181 11.7719 13.3546 11.7719ZM13.9827 9.41103V9.63264L14.0936 9.52194L13.9827 9.41103Z"
														fill="white"
													/>
													<path
														d="M13.3546 11.7719C13.2739 11.7719 13.1923 11.7564 13.1146 11.724C12.88 11.6271 12.7271 11.3986 12.7271 11.1453V7.89819C12.7271 7.64463 12.88 7.41612 13.1146 7.31942C13.3502 7.22188 13.6196 7.27618 13.7989 7.45518L15.4253 9.07872C15.6706 9.32351 15.6706 9.72016 15.4253 9.96474L13.7989 11.5881C13.6786 11.7082 13.5181 11.7719 13.3546 11.7719ZM13.9827 9.41103V9.63264L14.0936 9.52194L13.9827 9.41103Z"
														stroke="white"
													/>
												</svg>
											</a>
											<a href="wishlist.html">
												<i className="fa-regular fa-heart"></i>
											</a>
											<a href="checkout.html">
												<i className="fa-light fa-cart-shopping"></i>
											</a>
										</div>
										<p className="text">
											<span className="color-text">Sold Out</span>
										</p>
										<div className="price">
											<span className="discount-price">$532</span>
											<span className="original-price">$753</span>
										</div>
										<div className="icon">
											<button>
												<i className="fa-regular fa-eye"></i>
											</button>
											<a href="wishlist.html">
												<i className="fa-regular fa-heart"></i>
											</a>
											<a href="cart.html">
												<i className="fa-light fa-bag-shopping"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- hot sell ended --> */}

			{/* <!-- testimonial started --> */}
			<section className="testimonial-section fix section-padding -mb-10">
				<div className="container">
					<div className="section-title">
						<div className="subtitle style1">Testimonial</div>
						<h2 className="title">What our client say</h2>
					</div>
					<div className="swiper testimonial-slider-one">
						<div className="swiper gt-slider" id="testimonialSliderOne">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="testimonial-card-items-one">
										<p>
											One of the most powerful takeaways from this book is the
											emphasis on adopting a mindset of abundance and
											possibility. The idea that we can choose to see
											opportunities rather than limitations is a game-changer.
										</p>
										<div className="client-info-wrapper d-flex align-items-center justify-content-between">
											<div className="client-info">
												<div
													className="client-img bg-cover"
													style={{
														backgroundImage:
															"url('assets/images/homepage-1/testimonialProfileThumb1_1.jpg')",
													}}
												>
													<div className="icon">
														<img
															loading="lazy"
															className="shape"
															src="assets/images/shape/shape.svg"
															alt="img"
														/>
													</div>
												</div>
												<div className="content">
													<h3>Ronald Richards</h3>
													<span>Marketing Coordinator</span>
													<div className="star">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-regular fa-star"></i>
														<i className="fa-regular fa-star"></i>
													</div>
												</div>
											</div>
											{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo1.png" alt="">
                                    </div> --> */}
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="testimonial-card-items-one">
										<p>
											The idea that we can choose to see opportunities rather
											than limitations is a game-changer. The book encourages
											readers to step out of their comfort zones and embrace a
											more positive outlook on life.
										</p>
										<div className="client-info-wrapper d-flex align-items-center justify-content-between">
											<div className="client-info">
												<div
													className="client-img bg-cover"
													style={{
														backgroundImage:
															"url('assets/images/homepage-1/testimonialProfileThumb1_2.jpg')",
													}}
												>
													<div className="icon">
														<img
															loading="lazy"
															className="shape"
															src="assets/images/shape/shape.svg"
															alt="img"
														/>
													</div>
												</div>
												<div className="content">
													<h3>Dianne Russell</h3>
													<span>Project Manager</span>
													<div className="star">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-regular fa-star"></i>
														<i className="fa-regular fa-star"></i>
													</div>
												</div>
											</div>
											{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo2.png" alt="">
                                    </div> --> */}
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="testimonial-card-items-one">
										<p>
											{`"The Art of Possibility" by Rosamund Stone Zander and
											Benjamin Zander is a transformative read that challenges
											conventional thinking and opens up new possibilities. As a
											reader, I found myself profoundly .`}
										</p>
										<div className="client-info-wrapper d-flex align-items-center justify-content-between">
											<div className="client-info">
												<div
													className="client-img bg-cover"
													style={{
														backgroundImage:
															"url('assets/images/homepage-1/testimonialProfileThumb1_3.jpg')",
													}}
												>
													<div className="icon">
														<img
															loading="lazy"
															className="shape"
															src="assets/images/shape/shape.svg"
															alt="img"
														/>
													</div>
												</div>
												<div className="content">
													<h3>Ronald Richards</h3>
													<span>Marketing Coordinator</span>
													<div className="star">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-regular fa-star"></i>
														<i className="fa-regular fa-star"></i>
													</div>
												</div>
											</div>
											{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo1.png" alt="">
                                    </div> --> */}
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="testimonial-card-items-one">
										<p>
											{`From the very first chapter, the authors engage readers
											with inspiring stories and practical insights. Benjamin
											Zander's experiences as a conductor bring a unique
											perspective to leadership .`}
										</p>
										<div className="client-info-wrapper d-flex align-items-center justify-content-between">
											<div className="client-info">
												<div
													className="client-img bg-cover"
													style={{
														backgroundImage:
															"url('assets/images/homepage-1/testimonialProfileThumb1_2.jpg')",
													}}
												>
													<div className="icon">
														<img
															loading="lazy"
															className="shape"
															src="assets/images/shape/shape.svg"
															alt="img"
														/>
													</div>
												</div>
												<div className="content">
													<h3>Ronald Richards</h3>
													<span>Marketing Coordinator</span>
													<div className="star">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-regular fa-star"></i>
														<i className="fa-regular fa-star"></i>
													</div>
												</div>
											</div>
											{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo2.png" alt="">
                                    </div> --> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- testimonial ended --> */}

			{/* <!-- blog started --> */}
			<section className="blog-section section-padding pt-0 fix">
				<div className="container">
					<div className="blog-wrapper style1">
						<div className="section-title text-center">
							<div className="subtitle style2">News & Blog</div>
							<h2 className="title">Latest news & blog</h2>
						</div>
						<div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
							<div className="blog_card_two">
								<div className="blog_card_two__thumb">
									<img
										loading="lazy"
										src="assets/images/blogs/blogThumb2_1.jpg"
										alt="thumb"
									/>
								</div>
								<div className="blog_card_two__content">
									<ul className="blog_card_two__content--post-list d-flex align-items-center">
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<path
													d="M14.5441 5.19275C14.5441 7.69093 12.4995 9.7355 10.0013 9.7355C7.50317 9.7355 5.45859 7.69093 5.45859 5.19275C5.45859 2.69457 7.50313 0.65 10.0013 0.65C12.4995 0.65 14.5441 2.69458 14.5441 5.19275Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
												<path
													d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
											</svg>
											By admin
										</li>
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<g clipPath="url(#clip0_143_573)">
													<path
														d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
														fill="#FF4035"
													/>
												</g>
												<defs>
													<clipPath id="clip0_143_57355">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
											Business
										</li>
									</ul>
									<div className="blog_card_two__content--date">
										<ul>
											<li>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="inline"
												>
													<path
														d="M8.8125 12.0625C8.8125 12.4077 9.09232 12.6875 9.4375 12.6875C9.78268 12.6875 10.0625 12.4077 10.0625 12.0625C10.0625 11.7173 9.78268 11.4375 9.4375 11.4375C9.09232 11.4375 8.8125 11.7173 8.8125 12.0625Z"
														fill="white"
													/>
													<path
														d="M14.75 13.5V12.6875H15.375C15.7202 12.6875 16 12.4077 16 12.0625C16 11.7173 15.7202 11.4375 15.375 11.4375H14.75V8.59375H15.375C15.7202 8.59375 16 8.31394 16 7.96875C16 7.62356 15.7202 7.34375 15.375 7.34375H14.75V4.53125H15.375C15.7202 4.53125 16 4.25144 16 3.90625C16 3.56106 15.7202 3.28125 15.375 3.28125H14.75V2.5C14.75 1.1215 13.6285 0 12.25 0L2.5 0C1.1215 0 0 1.1215 0 2.5V7.28125C0 7.62644 0.279813 7.90625 0.625 7.90625C0.970187 7.90625 1.25 7.62644 1.25 7.28125V2.5C1.25 1.81075 1.81075 1.25 2.5 1.25L12.25 1.25C12.9392 1.25 13.5 1.81075 13.5 2.5V3.28125H12.875C12.5298 3.28125 12.25 3.56106 12.25 3.90625C12.25 4.25144 12.5298 4.53125 12.875 4.53125H13.5V7.34375H12.875C12.5298 7.34375 12.25 7.62356 12.25 7.96875C12.25 8.31394 12.5298 8.59375 12.875 8.59375H13.5V11.4375H12.875C12.5298 11.4375 12.25 11.7173 12.25 12.0625C12.25 12.4077 12.5298 12.6875 12.875 12.6875H13.5V13.5C13.5 14.1892 12.9392 14.75 12.25 14.75H8.6875C8.34231 14.75 8.0625 15.0298 8.0625 15.375C8.0625 15.7202 8.34231 16 8.6875 16H12.25C13.6285 16 14.75 14.8785 14.75 13.5Z"
														fill="white"
													/>
													<path
														d="M7.5625 12.2188C7.5625 10.1337 5.86625 8.4375 3.78125 8.4375C1.69625 8.4375 0 10.1337 0 12.2188C0 14.3038 1.69625 16 3.78125 16C5.86625 16 7.5625 14.3038 7.5625 12.2188ZM1.25 12.2188C1.25 10.823 2.3855 9.6875 3.78125 9.6875C5.177 9.6875 6.3125 10.823 6.3125 12.2188C6.3125 13.6145 5.177 14.75 3.78125 14.75C2.3855 14.75 1.25 13.6145 1.25 12.2188Z"
														fill="white"
													/>
													<path
														d="M4.40625 13.125V12.8438H5.0625C5.40769 12.8438 5.6875 12.5639 5.6875 12.2188C5.6875 11.8736 5.40769 11.5938 5.0625 11.5938H3.78125C3.43606 11.5938 3.15625 11.8736 3.15625 12.2188V13.125C3.15625 13.4702 3.43606 13.75 3.78125 13.75C4.12644 13.75 4.40625 13.4702 4.40625 13.125Z"
														fill="white"
													/>
													<path
														d="M8.8125 9.34375C8.8125 9.68893 9.09232 9.96875 9.4375 9.96875C9.78268 9.96875 10.0625 9.68893 10.0625 9.34375C10.0625 8.99857 9.78268 8.71875 9.4375 8.71875C9.09232 8.71875 8.8125 8.99857 8.8125 9.34375Z"
														fill="white"
													/>
													<path
														d="M6.09375 6.625C6.09375 6.97018 6.37357 7.25 6.71875 7.25C7.06393 7.25 7.34375 6.97018 7.34375 6.625C7.34375 6.27982 7.06393 6 6.71875 6C6.37357 6 6.09375 6.27982 6.09375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 3.90625C8.8125 4.25143 9.09232 4.53125 9.4375 4.53125C9.78268 4.53125 10.0625 4.25143 10.0625 3.90625C10.0625 3.56107 9.78268 3.28125 9.4375 3.28125C9.09232 3.28125 8.8125 3.56107 8.8125 3.90625Z"
														fill="white"
													/>
													<path
														d="M6.09375 3.90625C6.09375 4.25143 6.37357 4.53125 6.71875 4.53125C7.06393 4.53125 7.34375 4.25143 7.34375 3.90625C7.34375 3.56107 7.06393 3.28125 6.71875 3.28125C6.37357 3.28125 6.09375 3.56107 6.09375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 3.90625C3.375 4.25143 3.65482 4.53125 4 4.53125C4.34518 4.53125 4.625 4.25143 4.625 3.90625C4.625 3.56107 4.34518 3.28125 4 3.28125C3.65482 3.28125 3.375 3.56107 3.375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 6.625C3.375 6.97018 3.65482 7.25 4 7.25C4.34518 7.25 4.625 6.97018 4.625 6.625C4.625 6.27982 4.34518 6 4 6C3.65482 6 3.375 6.27982 3.375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 6.625C8.8125 6.97018 9.09232 7.25 9.4375 7.25C9.78268 7.25 10.0625 6.97018 10.0625 6.625C10.0625 6.27982 9.78268 6 9.4375 6C9.09232 6 8.8125 6.27982 8.8125 6.625Z"
														fill="white"
													/>
												</svg>
												Oct 05, 2024
											</li>
										</ul>
									</div>
									<h3>
										<a href="blog-details.html">
											How to Get the Most Out of Your Gizmolab Shopify
										</a>
									</h3>
									<a href="blog-details.html" className="theme-btn-2 mt-3">
										Read More
										<i className="fa-solid fa-arrow-right-long"></i>
									</a>
								</div>
							</div>
							<div className="blog_card_two">
								<div className="blog_card_two__thumb">
									<img
										loading="lazy"
										src="assets/images/blogs/blogThumb2_2.jpg"
										alt="thumb"
									/>
								</div>
								<div className="blog_card_two__content">
									<ul className="blog_card_two__content--post-list d-flex align-items-center">
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<path
													d="M14.5441 5.19275C14.5441 7.69093 12.4995 9.7355 10.0013 9.7355C7.50317 9.7355 5.45859 7.69093 5.45859 5.19275C5.45859 2.69457 7.50313 0.65 10.0013 0.65C12.4995 0.65 14.5441 2.69458 14.5441 5.19275Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
												<path
													d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
											</svg>
											By admin
										</li>
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<g clipPath="url(#clip0_143_573)">
													<path
														d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
														fill="#FF4035"
													/>
												</g>
												<defs>
													<clipPath id="clip0_143_57344">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
											Business
										</li>
									</ul>
									<div className="blog_card_two__content--date">
										<ul>
											<li>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="inline"
												>
													<path
														d="M8.8125 12.0625C8.8125 12.4077 9.09232 12.6875 9.4375 12.6875C9.78268 12.6875 10.0625 12.4077 10.0625 12.0625C10.0625 11.7173 9.78268 11.4375 9.4375 11.4375C9.09232 11.4375 8.8125 11.7173 8.8125 12.0625Z"
														fill="white"
													/>
													<path
														d="M14.75 13.5V12.6875H15.375C15.7202 12.6875 16 12.4077 16 12.0625C16 11.7173 15.7202 11.4375 15.375 11.4375H14.75V8.59375H15.375C15.7202 8.59375 16 8.31394 16 7.96875C16 7.62356 15.7202 7.34375 15.375 7.34375H14.75V4.53125H15.375C15.7202 4.53125 16 4.25144 16 3.90625C16 3.56106 15.7202 3.28125 15.375 3.28125H14.75V2.5C14.75 1.1215 13.6285 0 12.25 0L2.5 0C1.1215 0 0 1.1215 0 2.5V7.28125C0 7.62644 0.279813 7.90625 0.625 7.90625C0.970187 7.90625 1.25 7.62644 1.25 7.28125V2.5C1.25 1.81075 1.81075 1.25 2.5 1.25L12.25 1.25C12.9392 1.25 13.5 1.81075 13.5 2.5V3.28125H12.875C12.5298 3.28125 12.25 3.56106 12.25 3.90625C12.25 4.25144 12.5298 4.53125 12.875 4.53125H13.5V7.34375H12.875C12.5298 7.34375 12.25 7.62356 12.25 7.96875C12.25 8.31394 12.5298 8.59375 12.875 8.59375H13.5V11.4375H12.875C12.5298 11.4375 12.25 11.7173 12.25 12.0625C12.25 12.4077 12.5298 12.6875 12.875 12.6875H13.5V13.5C13.5 14.1892 12.9392 14.75 12.25 14.75H8.6875C8.34231 14.75 8.0625 15.0298 8.0625 15.375C8.0625 15.7202 8.34231 16 8.6875 16H12.25C13.6285 16 14.75 14.8785 14.75 13.5Z"
														fill="white"
													/>
													<path
														d="M7.5625 12.2188C7.5625 10.1337 5.86625 8.4375 3.78125 8.4375C1.69625 8.4375 0 10.1337 0 12.2188C0 14.3038 1.69625 16 3.78125 16C5.86625 16 7.5625 14.3038 7.5625 12.2188ZM1.25 12.2188C1.25 10.823 2.3855 9.6875 3.78125 9.6875C5.177 9.6875 6.3125 10.823 6.3125 12.2188C6.3125 13.6145 5.177 14.75 3.78125 14.75C2.3855 14.75 1.25 13.6145 1.25 12.2188Z"
														fill="white"
													/>
													<path
														d="M4.40625 13.125V12.8438H5.0625C5.40769 12.8438 5.6875 12.5639 5.6875 12.2188C5.6875 11.8736 5.40769 11.5938 5.0625 11.5938H3.78125C3.43606 11.5938 3.15625 11.8736 3.15625 12.2188V13.125C3.15625 13.4702 3.43606 13.75 3.78125 13.75C4.12644 13.75 4.40625 13.4702 4.40625 13.125Z"
														fill="white"
													/>
													<path
														d="M8.8125 9.34375C8.8125 9.68893 9.09232 9.96875 9.4375 9.96875C9.78268 9.96875 10.0625 9.68893 10.0625 9.34375C10.0625 8.99857 9.78268 8.71875 9.4375 8.71875C9.09232 8.71875 8.8125 8.99857 8.8125 9.34375Z"
														fill="white"
													/>
													<path
														d="M6.09375 6.625C6.09375 6.97018 6.37357 7.25 6.71875 7.25C7.06393 7.25 7.34375 6.97018 7.34375 6.625C7.34375 6.27982 7.06393 6 6.71875 6C6.37357 6 6.09375 6.27982 6.09375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 3.90625C8.8125 4.25143 9.09232 4.53125 9.4375 4.53125C9.78268 4.53125 10.0625 4.25143 10.0625 3.90625C10.0625 3.56107 9.78268 3.28125 9.4375 3.28125C9.09232 3.28125 8.8125 3.56107 8.8125 3.90625Z"
														fill="white"
													/>
													<path
														d="M6.09375 3.90625C6.09375 4.25143 6.37357 4.53125 6.71875 4.53125C7.06393 4.53125 7.34375 4.25143 7.34375 3.90625C7.34375 3.56107 7.06393 3.28125 6.71875 3.28125C6.37357 3.28125 6.09375 3.56107 6.09375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 3.90625C3.375 4.25143 3.65482 4.53125 4 4.53125C4.34518 4.53125 4.625 4.25143 4.625 3.90625C4.625 3.56107 4.34518 3.28125 4 3.28125C3.65482 3.28125 3.375 3.56107 3.375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 6.625C3.375 6.97018 3.65482 7.25 4 7.25C4.34518 7.25 4.625 6.97018 4.625 6.625C4.625 6.27982 4.34518 6 4 6C3.65482 6 3.375 6.27982 3.375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 6.625C8.8125 6.97018 9.09232 7.25 9.4375 7.25C9.78268 7.25 10.0625 6.97018 10.0625 6.625C10.0625 6.27982 9.78268 6 9.4375 6C9.09232 6 8.8125 6.27982 8.8125 6.625Z"
														fill="white"
													/>
												</svg>
												Oct 05, 2024
											</li>
										</ul>
									</div>
									<h3>
										<a href="blog-details.html">
											How to Get the Most Out of Your Gizmolab Shopify
										</a>
									</h3>
									<a href="blog-details.html" className="theme-btn-2 mt-3">
										Read More
										<i className="fa-solid fa-arrow-right-long"></i>
									</a>
								</div>
							</div>
							<div className="blog_card_two">
								<div className="blog_card_two__thumb">
									<img
										loading="lazy"
										src="assets/images/blogs/blogThumb2_3.jpg"
										alt="thumb"
									/>
								</div>
								<div className="blog_card_two__content">
									<ul className="blog_card_two__content--post-list d-flex align-items-center">
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<path
													d="M14.5441 5.19275C14.5441 7.69093 12.4995 9.7355 10.0013 9.7355C7.50317 9.7355 5.45859 7.69093 5.45859 5.19275C5.45859 2.69457 7.50313 0.65 10.0013 0.65C12.4995 0.65 14.5441 2.69458 14.5441 5.19275Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
												<path
													d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
											</svg>
											By admin
										</li>
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<g clipPath="url(#clip0_143_573)">
													<path
														d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
														fill="#FF4035"
													/>
												</g>
												<defs>
													<clipPath id="clip0_143_57377">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
											Business
										</li>
									</ul>
									<div className="blog_card_two__content--date">
										<ul>
											<li>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="inline"
												>
													<path
														d="M8.8125 12.0625C8.8125 12.4077 9.09232 12.6875 9.4375 12.6875C9.78268 12.6875 10.0625 12.4077 10.0625 12.0625C10.0625 11.7173 9.78268 11.4375 9.4375 11.4375C9.09232 11.4375 8.8125 11.7173 8.8125 12.0625Z"
														fill="white"
													/>
													<path
														d="M14.75 13.5V12.6875H15.375C15.7202 12.6875 16 12.4077 16 12.0625C16 11.7173 15.7202 11.4375 15.375 11.4375H14.75V8.59375H15.375C15.7202 8.59375 16 8.31394 16 7.96875C16 7.62356 15.7202 7.34375 15.375 7.34375H14.75V4.53125H15.375C15.7202 4.53125 16 4.25144 16 3.90625C16 3.56106 15.7202 3.28125 15.375 3.28125H14.75V2.5C14.75 1.1215 13.6285 0 12.25 0L2.5 0C1.1215 0 0 1.1215 0 2.5V7.28125C0 7.62644 0.279813 7.90625 0.625 7.90625C0.970187 7.90625 1.25 7.62644 1.25 7.28125V2.5C1.25 1.81075 1.81075 1.25 2.5 1.25L12.25 1.25C12.9392 1.25 13.5 1.81075 13.5 2.5V3.28125H12.875C12.5298 3.28125 12.25 3.56106 12.25 3.90625C12.25 4.25144 12.5298 4.53125 12.875 4.53125H13.5V7.34375H12.875C12.5298 7.34375 12.25 7.62356 12.25 7.96875C12.25 8.31394 12.5298 8.59375 12.875 8.59375H13.5V11.4375H12.875C12.5298 11.4375 12.25 11.7173 12.25 12.0625C12.25 12.4077 12.5298 12.6875 12.875 12.6875H13.5V13.5C13.5 14.1892 12.9392 14.75 12.25 14.75H8.6875C8.34231 14.75 8.0625 15.0298 8.0625 15.375C8.0625 15.7202 8.34231 16 8.6875 16H12.25C13.6285 16 14.75 14.8785 14.75 13.5Z"
														fill="white"
													/>
													<path
														d="M7.5625 12.2188C7.5625 10.1337 5.86625 8.4375 3.78125 8.4375C1.69625 8.4375 0 10.1337 0 12.2188C0 14.3038 1.69625 16 3.78125 16C5.86625 16 7.5625 14.3038 7.5625 12.2188ZM1.25 12.2188C1.25 10.823 2.3855 9.6875 3.78125 9.6875C5.177 9.6875 6.3125 10.823 6.3125 12.2188C6.3125 13.6145 5.177 14.75 3.78125 14.75C2.3855 14.75 1.25 13.6145 1.25 12.2188Z"
														fill="white"
													/>
													<path
														d="M4.40625 13.125V12.8438H5.0625C5.40769 12.8438 5.6875 12.5639 5.6875 12.2188C5.6875 11.8736 5.40769 11.5938 5.0625 11.5938H3.78125C3.43606 11.5938 3.15625 11.8736 3.15625 12.2188V13.125C3.15625 13.4702 3.43606 13.75 3.78125 13.75C4.12644 13.75 4.40625 13.4702 4.40625 13.125Z"
														fill="white"
													/>
													<path
														d="M8.8125 9.34375C8.8125 9.68893 9.09232 9.96875 9.4375 9.96875C9.78268 9.96875 10.0625 9.68893 10.0625 9.34375C10.0625 8.99857 9.78268 8.71875 9.4375 8.71875C9.09232 8.71875 8.8125 8.99857 8.8125 9.34375Z"
														fill="white"
													/>
													<path
														d="M6.09375 6.625C6.09375 6.97018 6.37357 7.25 6.71875 7.25C7.06393 7.25 7.34375 6.97018 7.34375 6.625C7.34375 6.27982 7.06393 6 6.71875 6C6.37357 6 6.09375 6.27982 6.09375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 3.90625C8.8125 4.25143 9.09232 4.53125 9.4375 4.53125C9.78268 4.53125 10.0625 4.25143 10.0625 3.90625C10.0625 3.56107 9.78268 3.28125 9.4375 3.28125C9.09232 3.28125 8.8125 3.56107 8.8125 3.90625Z"
														fill="white"
													/>
													<path
														d="M6.09375 3.90625C6.09375 4.25143 6.37357 4.53125 6.71875 4.53125C7.06393 4.53125 7.34375 4.25143 7.34375 3.90625C7.34375 3.56107 7.06393 3.28125 6.71875 3.28125C6.37357 3.28125 6.09375 3.56107 6.09375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 3.90625C3.375 4.25143 3.65482 4.53125 4 4.53125C4.34518 4.53125 4.625 4.25143 4.625 3.90625C4.625 3.56107 4.34518 3.28125 4 3.28125C3.65482 3.28125 3.375 3.56107 3.375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 6.625C3.375 6.97018 3.65482 7.25 4 7.25C4.34518 7.25 4.625 6.97018 4.625 6.625C4.625 6.27982 4.34518 6 4 6C3.65482 6 3.375 6.27982 3.375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 6.625C8.8125 6.97018 9.09232 7.25 9.4375 7.25C9.78268 7.25 10.0625 6.97018 10.0625 6.625C10.0625 6.27982 9.78268 6 9.4375 6C9.09232 6 8.8125 6.27982 8.8125 6.625Z"
														fill="white"
													/>
												</svg>
												Oct 05, 2024
											</li>
										</ul>
									</div>
									<h3>
										<a href="blog-details.html">
											How to Get the Most Out of Your Gizmolab Shopify
										</a>
									</h3>
									<a href="blog-details.html" className="theme-btn-2 mt-3">
										Read More
										<i className="fa-solid fa-arrow-right-long"></i>
									</a>
								</div>
							</div>
							<div className="blog_card_two">
								<div className="blog_card_two__thumb">
									<img
										loading="lazy"
										src="assets/images/blogs/blogThumb2_4.jpg"
										alt="thumb"
									/>
								</div>
								<div className="blog_card_two__content">
									<ul className="blog_card_two__content--post-list d-flex align-items-center">
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<path
													d="M14.5441 5.19275C14.5441 7.69093 12.4995 9.7355 10.0013 9.7355C7.50317 9.7355 5.45859 7.69093 5.45859 5.19275C5.45859 2.69457 7.50313 0.65 10.0013 0.65C12.4995 0.65 14.5441 2.69458 14.5441 5.19275Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
												<path
													d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z"
													stroke="#FF4035"
													strokeWidth="1.3"
												/>
											</svg>
											By admin
										</li>
										<li>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="inline"
											>
												<g clipPath="url(#clip0_143_573)">
													<path
														d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
														fill="#FF4035"
													/>
												</g>
												<defs>
													<clipPath id="clip0_143_57366">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
											Business
										</li>
									</ul>
									<div className="blog_card_two__content--date">
										<ul>
											<li>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="inline"
												>
													<path
														d="M8.8125 12.0625C8.8125 12.4077 9.09232 12.6875 9.4375 12.6875C9.78268 12.6875 10.0625 12.4077 10.0625 12.0625C10.0625 11.7173 9.78268 11.4375 9.4375 11.4375C9.09232 11.4375 8.8125 11.7173 8.8125 12.0625Z"
														fill="white"
													/>
													<path
														d="M14.75 13.5V12.6875H15.375C15.7202 12.6875 16 12.4077 16 12.0625C16 11.7173 15.7202 11.4375 15.375 11.4375H14.75V8.59375H15.375C15.7202 8.59375 16 8.31394 16 7.96875C16 7.62356 15.7202 7.34375 15.375 7.34375H14.75V4.53125H15.375C15.7202 4.53125 16 4.25144 16 3.90625C16 3.56106 15.7202 3.28125 15.375 3.28125H14.75V2.5C14.75 1.1215 13.6285 0 12.25 0L2.5 0C1.1215 0 0 1.1215 0 2.5V7.28125C0 7.62644 0.279813 7.90625 0.625 7.90625C0.970187 7.90625 1.25 7.62644 1.25 7.28125V2.5C1.25 1.81075 1.81075 1.25 2.5 1.25L12.25 1.25C12.9392 1.25 13.5 1.81075 13.5 2.5V3.28125H12.875C12.5298 3.28125 12.25 3.56106 12.25 3.90625C12.25 4.25144 12.5298 4.53125 12.875 4.53125H13.5V7.34375H12.875C12.5298 7.34375 12.25 7.62356 12.25 7.96875C12.25 8.31394 12.5298 8.59375 12.875 8.59375H13.5V11.4375H12.875C12.5298 11.4375 12.25 11.7173 12.25 12.0625C12.25 12.4077 12.5298 12.6875 12.875 12.6875H13.5V13.5C13.5 14.1892 12.9392 14.75 12.25 14.75H8.6875C8.34231 14.75 8.0625 15.0298 8.0625 15.375C8.0625 15.7202 8.34231 16 8.6875 16H12.25C13.6285 16 14.75 14.8785 14.75 13.5Z"
														fill="white"
													/>
													<path
														d="M7.5625 12.2188C7.5625 10.1337 5.86625 8.4375 3.78125 8.4375C1.69625 8.4375 0 10.1337 0 12.2188C0 14.3038 1.69625 16 3.78125 16C5.86625 16 7.5625 14.3038 7.5625 12.2188ZM1.25 12.2188C1.25 10.823 2.3855 9.6875 3.78125 9.6875C5.177 9.6875 6.3125 10.823 6.3125 12.2188C6.3125 13.6145 5.177 14.75 3.78125 14.75C2.3855 14.75 1.25 13.6145 1.25 12.2188Z"
														fill="white"
													/>
													<path
														d="M4.40625 13.125V12.8438H5.0625C5.40769 12.8438 5.6875 12.5639 5.6875 12.2188C5.6875 11.8736 5.40769 11.5938 5.0625 11.5938H3.78125C3.43606 11.5938 3.15625 11.8736 3.15625 12.2188V13.125C3.15625 13.4702 3.43606 13.75 3.78125 13.75C4.12644 13.75 4.40625 13.4702 4.40625 13.125Z"
														fill="white"
													/>
													<path
														d="M8.8125 9.34375C8.8125 9.68893 9.09232 9.96875 9.4375 9.96875C9.78268 9.96875 10.0625 9.68893 10.0625 9.34375C10.0625 8.99857 9.78268 8.71875 9.4375 8.71875C9.09232 8.71875 8.8125 8.99857 8.8125 9.34375Z"
														fill="white"
													/>
													<path
														d="M6.09375 6.625C6.09375 6.97018 6.37357 7.25 6.71875 7.25C7.06393 7.25 7.34375 6.97018 7.34375 6.625C7.34375 6.27982 7.06393 6 6.71875 6C6.37357 6 6.09375 6.27982 6.09375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 3.90625C8.8125 4.25143 9.09232 4.53125 9.4375 4.53125C9.78268 4.53125 10.0625 4.25143 10.0625 3.90625C10.0625 3.56107 9.78268 3.28125 9.4375 3.28125C9.09232 3.28125 8.8125 3.56107 8.8125 3.90625Z"
														fill="white"
													/>
													<path
														d="M6.09375 3.90625C6.09375 4.25143 6.37357 4.53125 6.71875 4.53125C7.06393 4.53125 7.34375 4.25143 7.34375 3.90625C7.34375 3.56107 7.06393 3.28125 6.71875 3.28125C6.37357 3.28125 6.09375 3.56107 6.09375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 3.90625C3.375 4.25143 3.65482 4.53125 4 4.53125C4.34518 4.53125 4.625 4.25143 4.625 3.90625C4.625 3.56107 4.34518 3.28125 4 3.28125C3.65482 3.28125 3.375 3.56107 3.375 3.90625Z"
														fill="white"
													/>
													<path
														d="M3.375 6.625C3.375 6.97018 3.65482 7.25 4 7.25C4.34518 7.25 4.625 6.97018 4.625 6.625C4.625 6.27982 4.34518 6 4 6C3.65482 6 3.375 6.27982 3.375 6.625Z"
														fill="white"
													/>
													<path
														d="M8.8125 6.625C8.8125 6.97018 9.09232 7.25 9.4375 7.25C9.78268 7.25 10.0625 6.97018 10.0625 6.625C10.0625 6.27982 9.78268 6 9.4375 6C9.09232 6 8.8125 6.27982 8.8125 6.625Z"
														fill="white"
													/>
												</svg>
												Oct 05, 2024
											</li>
										</ul>
									</div>
									<h3>
										<a href="blog-details.html">
											How to Get the Most Out of Your Gizmolab Shopify
										</a>
									</h3>
									<a href="blog-details.html" className="theme-btn-2 mt-3">
										Read More
										<i className="fa-solid fa-arrow-right-long"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- blog ended --> */}

			<Partials />
		</>
	);
}
