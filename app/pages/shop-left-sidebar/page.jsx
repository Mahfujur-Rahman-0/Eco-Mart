import Image from "next/image";
import breadcumbShape1_1 from "../../../public/assets/images/shape/breadcumb-shape1_1.png";
import breadcumbShape1_2 from "../../../public/assets/images/shape/breadcumb-shape1_2.png";
import breadcumbShape1_3 from "../../../public/assets/images/shape/breadcumb-shape1_3.png";
import breadcumbShape1_4 from "../../../public/assets/images/shape/breadcumb-shape1_4.png";

//Product Image Start
import bestSellerProductThumb2_1 from "../../../public/assets/images/shop/bestSellerProductThumb2_1.png";
import bestSellerProductThumb2_2 from "../../../public/assets/images/shop/bestSellerProductThumb2_2.png";
import bestSellerProductThumb2_3 from "../../../public/assets/images/shop/bestSellerProductThumb2_3.png";
import bestSellerProductThumb2_4 from "../../../public/assets/images/shop/bestSellerProductThumb2_4.png";
import bestSellerProductThumb2_5 from "../../../public/assets/images/shop/bestSellerProductThumb2_5.png";
import bestSellerProductThumb2_6 from "../../../public/assets/images/shop/bestSellerProductThumb2_6.png";
import bestSellerProductThumb2_7 from "../../../public/assets/images/shop/bestSellerProductThumb2_7.png";
import bestSellerProductThumb2_8 from "../../../public/assets/images/shop/bestSellerProductThumb2_8.png";

//Product Image End

export default function ShopLeftSidebar() {
	return (
		<>
			{/* <!-- breadcrumb started --> */}
			<div class="breadcumb-section">
				<div
					class="breadcumb-container-wrapper bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: "url(assets/images/shape/breadcumb-bg.png)",
					}}
				>
					<div class="shape1">
						<Image loading="lazy" src={breadcumbShape1_1} alt="shape" />
					</div>
					<div class="shape2">
						<Image loading="lazy" src={breadcumbShape1_2} alt="shape" />
					</div>
					<div class="shape3">
						<Image loading="lazy" src={breadcumbShape1_3} alt="shape" />
					</div>
					<div class="shape4">
						<Image loading="lazy" src={breadcumbShape1_4} alt="shape" />
					</div>
					<div class="container">
						<ul class="breadcumb-wrapper">
							<li>
								<a href="index.html">
									<i class="fa-sharp fa-light fa-house"></i>
								</a>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
							</li>
							<li>Category</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
							</li>
							<li>Shop</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- breadcrumb ended --> */}

			{/* <!-- shop left sidebar started --> */}
			<section class="shop-section section-padding-70 fix">
				<div class="container">
					<div class="grid gap-7.5 lg:grid-cols-4">
						<div class="hidden lg:block">
							<div class="main-sidebar-1">
								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__search-widget">
										<form action="#">
											<input type="text" placeholder="search items" />
											<button type="submit">
												<i class="fa-solid fa-magnifying-glass"></i>
											</button>
										</form>
									</div>
								</div>

								<div class="single-sidebar-widget">
									<div class="space-y-4 w-full">
										<div class="flex justify-between items-center">
											<label
												for="range-slider"
												class="text-sm font-medium text-gray-700"
											>
												Filter by Price
											</label>
											<span
												id="slider-value"
												class="px-2 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-800"
											>
												50
											</span>
										</div>

										<div class="py-2">
											{/* <!-- Added padding to ensure thumb doesn't get cut off --> */}
											<input
												id="range-slider"
												type="range"
												min="0"
												max="100"
												value="50"
												class="range-slider"
												aria-valuemin="0"
												aria-valuemax="100"
												aria-valuenow="50"
											/>
										</div>

										<div class="flex justify-between text-xs text-gray-500">
											<span>$0</span>
											<span>$25</span>
											<span>$50</span>
											<span>$75</span>
											<span>$100</span>
										</div>
									</div>
								</div>
								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__wid-title">
										<h3 class="single-sidebar-widget__wid-title--title">
											Categories
										</h3>
									</div>
									<div class="single-sidebar-widget__shop-widget-categories">
										<ul>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>women’s
													collections
												</a>
											</li>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>men’s
													collection
												</a>
											</li>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>kid’s
													collection
												</a>
											</li>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>beach
													collection
												</a>
											</li>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>sunglass
													collection
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__wid-title">
										<h3 class="single-sidebar-widget__wid-title--title">
											Filter by Color
										</h3>
									</div>
									<div class="single-sidebar-widget__widget-categories">
										<ul>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#122F2A"
															></circle>
														</svg>
														Black
													</span>
													<span>15</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#1DE925"
															></circle>
														</svg>
														Green
													</span>
													<span>12</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#FC791A"
															></circle>
														</svg>
														Blue
													</span>
													<span>8</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#F10101"
															></circle>
														</svg>
														red
													</span>
													<span>7</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#F0A003"
															></circle>
														</svg>
														Yellow
													</span>
													<span>5</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="9"
																cy="9"
																r="9"
																fill="#A46810"
															></circle>
														</svg>
														Brown
													</span>
													<span>4</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle cx="9" cy="9" r="9" fill="white"></circle>
														</svg>
														White
													</span>
													<span>3</span>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__wid-title">
										<h3 class="single-sidebar-widget__wid-title--title">
											Product Status
										</h3>
									</div>
									<div class="single-sidebar-widget__shop-widget-categories">
										<ul>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>in stock
												</a>
											</li>
											<li>
												<a href="shop-left-sidebar.html">
													<i class="fa-solid fa-chevron-right"></i>on sale
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__wid-title">
										<h3 class="single-sidebar-widget__wid-title--title">
											Filter by Sizes
										</h3>
									</div>
									<div class="single-sidebar-widget__widget-categories">
										<ul>
											<li>
												<a href="#">
													<span class="text">l</span>
													<span>12</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">m</span>
													<span>8</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">s</span>
													<span>6</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">xl</span>
													<span>7</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="text">xxl</span>
													<span>4</span>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div class="single-sidebar-widget">
									<div class="single-sidebar-widget__wid-title">
										<h3 class="single-sidebar-widget__wid-title--title">
											Review star
										</h3>
									</div>
									<div class="single-sidebar-widget__categories-list">
										<label class="checkbox-single">
											<span class="checkbox-area">
												<input type="checkbox" />
												<span class="checkmark d-center"></span>
												<span class="star">
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
												</span>
											</span>
											<span class="text-color"> 5 only </span>
										</label>
										<label class="checkbox-single">
											<span class="checkbox-area">
												<input type="checkbox" />
												<span class="checkmark d-center"></span>
												<span class="star">
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-regular fa-star"></i>
													</a>
												</span>
											</span>
											<span class="text-color"> 4 & up </span>
										</label>
										<label class="checkbox-single">
											<span class="checkbox-area">
												<input type="checkbox" />
												<span class="checkmark d-center"></span>
												<span class="star">
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
												</span>
											</span>
											<span class="text-color"> 3 & up </span>
										</label>
										<label class="checkbox-single">
											<span class="checkbox-area">
												<input type="checkbox" />
												<span class="checkmark d-center"></span>
												<span class="star">
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
												</span>
											</span>
											<span class="text-color"> 2 & up </span>
										</label>
										<label class="checkbox-single">
											<span class="checkbox-area">
												<input type="checkbox" />
												<span class="checkmark d-center"></span>
												<span class="star">
													<a href="#!">
														<i class="fa-solid fa-star"></i>
													</a>
												</span>
											</span>
											<span class="text-color"> 1 & up </span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="lg:col-span-3">
							<div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
								<div class="md:col-span-2 lg:hidden bg-white shadow-sm rounded-lg p-2 flex justify-between items-center shop-section-filter my-5">
									<div>
										<button type="button" class="btn btn-light">
											<span class="left-icon">
												<i class="fa-solid fa-filters"></i>
											</span>
											Filter
										</button>
									</div>
									<div class="order-by">
										<div>
											<select id="order-by" class="shop-order-by-select">
												<option value="Order" selected>
													Order By
												</option>
												<option value="price-low">
													{"  Price (Low > High)"}
												</option>
												<option value="price-high">
													{"  Price (High > Low)"}
												</option>
											</select>
										</div>
									</div>
								</div>

								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_1}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="offer-price">$79.00</span>
												<span class="original-price">$99.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_2}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">NEW</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_3}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_4}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_5}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_6}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">NEW</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_7}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_8}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_1}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="offer-price">$79.00</span>
												<span class="original-price">$99.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_2}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">NEW</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_3}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div class="best-seller-product-items-two item-border">
									<div class="icon-box2">
										<button>
											<i class="fa-regular fa-eye"></i>
										</button>
										<a href="wishlist.html">
											<i class="fa-regular fa-heart"></i>
										</a>
										<a href="cart.html">
											<i class="fa-light fa-bag-shopping"></i>
										</a>
									</div>
									<div class="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div class="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_4}
											alt="thumb"
										/>
									</div>
									<div class="best-seller-product-items-two__content">
										<div class="best-seller-product-items-two__details">
											<p class="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 class="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div class="best-seller-product-items-two__details--price">
												<span class="original-price">$99.00</span>
												<span class="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="pagination">
								<a href="#" class="prev">
									<i class="fa-solid fa-chevron-left"></i>
								</a>
								<a href="#" class="page active">
									01
								</a>
								<a href="#" class="page">
									02
								</a>
								<a href="#" class="page">
									03
								</a>
								<a href="#" class="page">
									04
								</a>
								<a href="#" class="next">
									<i class="fa-solid fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- shop left sidebar ended --> */}
		</>
	);
}
