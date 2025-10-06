"use client";
import Image from "next/image";
import { useAppContext } from "../../context/AppContext";

//Product Image Start
import bestSellerProductThumb2_1 from "../../../public/assets/images/shop/bestSellerProductThumb2_1.png";
import bestSellerProductThumb2_2 from "../../../public/assets/images/shop/bestSellerProductThumb2_2.png";
import bestSellerProductThumb2_3 from "../../../public/assets/images/shop/bestSellerProductThumb2_3.png";
import bestSellerProductThumb2_4 from "../../../public/assets/images/shop/bestSellerProductThumb2_4.png";
import bestSellerProductThumb2_5 from "../../../public/assets/images/shop/bestSellerProductThumb2_5.png";
import bestSellerProductThumb2_6 from "../../../public/assets/images/shop/bestSellerProductThumb2_6.png";
import bestSellerProductThumb2_7 from "../../../public/assets/images/shop/bestSellerProductThumb2_7.png";
import bestSellerProductThumb2_8 from "../../../public/assets/images/shop/bestSellerProductThumb2_8.png";
import Partials from "../../components/Partials";

//Product Image End

export default function ShopLeftSidebar() {
	const { menu, setMenu } = useAppContext();
	return (
		<>
			{/* <!-- shop left sidebar started --> */}
			<section className="shop-section section-padding-70 fix">
				<div className="container">
					<div className="grid gap-7.5 lg:grid-cols-4">
						<div
							className={`Filter-Container ${menu == 5 ? "left0" : "left-100"}`}
						>
							<div
								onClick={() => setMenu(null)}
								className={`Filter-Container-btn ${
									menu == 5 ? "left0" : "left-100"
								}`}
							></div>
							<div className="lg:block Filter-itm">
								<div className="main-sidebar-1">
									<div className="single-sidebar-widget">
										<div className="single-sidebar-widget__search-widget">
											<form action="#">
												<input type="text" placeholder="search items" />
												<button type="submit">
													<i className="fa-solid fa-magnifying-glass"></i>
												</button>
											</form>
										</div>
									</div>

									<div className="single-sidebar-widget">
										<div className="space-y-4 w-full">
											<div className="flex justify-between items-center">
												<label className="text-sm font-medium text-gray-700">
													Filter by Price
												</label>
												<span
													id="slider-value"
													className="px-2 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-800"
												>
													50
												</span>
											</div>

											<div className="py-2">
												{/* <!-- Added padding to ensure thumb doesn't get cut off --> */}
												<input
													id="range-slider"
													type="range"
													min="0"
													max="100"
													className="range-slider"
													aria-valuemin="0"
													aria-valuemax="100"
													aria-valuenow="50"
												/>
											</div>

											<div className="flex justify-between text-xs text-gray-500">
												<span>$0</span>
												<span>$25</span>
												<span>$50</span>
												<span>$75</span>
												<span>$100</span>
											</div>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="single-sidebar-widget__wid-title">
											<h3 className="single-sidebar-widget__wid-title--title">
												Categories
											</h3>
										</div>
										<div className="single-sidebar-widget__shop-widget-categories">
											<ul>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>women’s
														collections
													</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>men’s
														collection
													</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>kid’s
														collection
													</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>beach
														collection
													</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>
														sunglass collection
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className="single-sidebar-widget">
										<div className="single-sidebar-widget__wid-title">
											<h3 className="single-sidebar-widget__wid-title--title">
												Product Status
											</h3>
										</div>
										<div className="single-sidebar-widget__shop-widget-categories">
											<ul>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>in
														stock
													</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">
														<i className="fa-solid fa-chevron-right"></i>on sale
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className="single-sidebar-widget">
										<div className="single-sidebar-widget__wid-title">
											<h3 className="single-sidebar-widget__wid-title--title">
												Review star
											</h3>
										</div>
										<div className="single-sidebar-widget__categories-list">
											<label className="checkbox-single">
												<span className="checkbox-area">
													<input type="checkbox" />
													<span className="checkmark d-center"></span>
													<span className="star">
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
													</span>
												</span>
												<span className="text-color"> 5 only </span>
											</label>
											<label className="checkbox-single">
												<span className="checkbox-area">
													<input type="checkbox" />
													<span className="checkmark d-center"></span>
													<span className="star">
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-regular fa-star"></i>
														</a>
													</span>
												</span>
												<span className="text-color"> 4 & up </span>
											</label>
											<label className="checkbox-single">
												<span className="checkbox-area">
													<input type="checkbox" />
													<span className="checkmark d-center"></span>
													<span className="star">
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
													</span>
												</span>
												<span className="text-color"> 3 & up </span>
											</label>
											<label className="checkbox-single">
												<span className="checkbox-area">
													<input type="checkbox" />
													<span className="checkmark d-center"></span>
													<span className="star">
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
													</span>
												</span>
												<span className="text-color"> 2 & up </span>
											</label>
											<label className="checkbox-single">
												<span className="checkbox-area">
													<input type="checkbox" />
													<span className="checkmark d-center"></span>
													<span className="star">
														<a href="#!">
															<i className="fa-solid fa-star"></i>
														</a>
													</span>
												</span>
												<span className="text-color"> 1 & up </span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-3">
							<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
								<div className="md:col-span-2 lg:hidden bg-white shadow-sm rounded-lg p-2 flex justify-between items-center shop-section-filter my-5">
									<div>
										<button
											onClick={() => setMenu(5)}
											type="button"
											className="btn btn-light"
										>
											<span className="left-icon">
												<i className="fa-solid fa-filters"></i>
											</span>
											Filterss
										</button>
									</div>
									<div className="order-by">
										<div>
											<select id="order-by" className="shop-order-by-select">
												<option defaultValue>Order By</option>
												<option>{"  Price (Low > High)"}</option>
												<option>{"  Price (High > Low)"}</option>
											</select>
										</div>
									</div>
								</div>

								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_1}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="offer-price">$79.00</span>
												<span className="original-price">$99.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_2}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										NEW
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_3}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_4}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_5}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_6}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										NEW
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_7}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_8}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_1}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													High-Neck puff jacket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="offer-price">$79.00</span>
												<span className="original-price">$99.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										TRANDING
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_2}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Relax Fit Leggings</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										NEW
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_3}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">
													Overshirt With Pocket
												</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className="best-seller-product-items-two item-border">
									<div className="icon-box2">
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
									<div className="best-seller-product-items-two__badge1">
										25% off
									</div>
									<div className="best-seller-product-items-two__thumb">
										<Image
											loading="lazy"
											src={bestSellerProductThumb2_4}
											alt="thumb"
										/>
									</div>
									<div className="best-seller-product-items-two__content">
										<div className="best-seller-product-items-two__details">
											<p className="best-seller-product-items-two__details--subtitle">
												FASHION BAG
											</p>
											<h6 className="best-seller-product-items-two__details--title">
												<a href="shop-details-one.html">Rose Printed Hoodie</a>
											</h6>
											<div className="best-seller-product-items-two__details--price">
												<span className="original-price">$99.00</span>
												<span className="offer-price">$79.00</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pagination">
								<a href="#" className="prev">
									<i className="fa-solid fa-chevron-left"></i>
								</a>
								<a href="#" className="page active">
									01
								</a>
								<a href="#" className="page">
									02
								</a>
								<a href="#" className="page">
									03
								</a>
								<a href="#" className="page">
									04
								</a>
								<a href="#" className="next">
									<i className="fa-solid fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- shop left sidebar ended --> */}
			<Partials />
		</>
	);
}
