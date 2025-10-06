import Partials from "../../../components/Partials";
import SingleProductSlider from "../../../components/SingleProductSlider";
import Image from "next/image";

//Product Images start
import beautyCareProductThumb4_4 from "../../../../public/assets/images/homepage-4/beautyCareProductThumb4_4.png";
import beautyCareProductThumb4_3 from "../../../../public/assets/images/homepage-4/beautyCareProductThumb4_3.png";
import beautyCareProductThumb4_2 from "../../../../public/assets/images/homepage-4/beautyCareProductThumb4_2.png";
import beautyCareProductThumb4_1 from "../../../../public/assets/images/homepage-4/beautyCareProductThumb4_1.png";
//Product Images end

//client profile img start
import commentAuthor1 from "../../../../public/assets/images/shop/comment-author1.png";
import commentAuthor2 from "../../../../public/assets/images/shop/comment-author2.png";

//client profile img end

export default function SingleProduct() {
	return (
		<>
			{/* <!-- shop details one started --> */}
			<div className="shop-details-section section-padding fix">
				<div className="shop-details bg-white">
					<div className="container">
						<div className={`grid gap-x-[60px] lg:grid-cols-2`}>
							<div className="product-big-img bg-color2 w-100Vw">
								<SingleProductSlider />
							</div>
							<div className="product-about">
								<div className="rating">
									<ul className="star">
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
									</ul>
									<h6>(2 customer reviews)</h6>

									<button className="addToBtn">
										<i className="fa-sharp fa-solid fa-heart"></i>
									</button>
								</div>
								<h6 className="product-price">$99.00</h6>
								<h2 className="product-title">High-Neck puff jacket</h2>
								<p className="text">
									Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
									des mauris commodo venenatis ligula commodo leez sed blandit
									convallis dignissim onec vel pellentesque neque.
								</p>
								<div className="product-details">
									<div className="size">
										<span className="title">Size</span>
										<span role="button" className="size-number active">
											L
										</span>
										<span role="button" className="size-number">
											M
										</span>
										<span role="button" className="size-number">
											S
										</span>
										<span role="button" className="size-number">
											Xl
										</span>
										<span role="button" className="size-number">
											XXl
										</span>
									</div>
									<div className="color">
										<h6>Color</h6>
										<div className="selectable-color color1 active"></div>
										<div className="selectable-color color2"></div>
										<div className="selectable-color color1"></div>
										<div className="selectable-color color3"></div>
										<div className="selectable-color color4"></div>
										<div className="selectable-color color5"></div>
										<div className="selectable-color color6"></div>
									</div>
								</div>
								<div className="actions">
									<div className="quantity">
										<p>Quantity</p>
										<div className="qty-wrapper">
											<input
												type="number"
												className="qty-input"
												step="1"
												min="1"
												max="100"
												name="quantity"
												title="Qty"
											/>
											<div className="btn-wrapper">
												<button className="quantity-plus qty-btn" type="button">
													<i className="fa-solid fa-plus"></i>
												</button>
												<button
													className="quantity-minus qty-btn"
													type="button"
												>
													<i className="fa-solid fa-minus"></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="product-details-footer">
									<a className="theme-btn" href="cart.html">
										Buy Now
										<i className="fa-regular fa-cart-shopping bg-transparent text-white"></i>
									</a>
									<a className="theme-btn style7 border-0" href="wishlist.html">
										Add to Cart
									</a>

									<div className="share">
										<ul className="social-media">
											<li>
												<a href="https://www.facebook.com/">
													<i className="fa-brands fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/">
													<i className="fa-brands fa-youtube"></i>
												</a>
											</li>
											<li>
												<a href="https://www.x.com/">
													<i className="fa-brands fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/">
													<i className="fa-brands fa-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="product-description">
								<h3>product Description</h3>
								<div className="desc">
									<p>
										Phasellus eget fermentum mauris. Suspendisse nec dignissim
										nulla. Integer non quam commodo, scelerisque felis id,
										eleifend turpis. Phasellus in nulla quis erat tempor
										tristique eget vel purus. Nulla pharetra pharetra pharetra.
										Praesent varius eget justo ut lacinia. Phasellus pharetra,
										velit viverra lacinia consequat, ipsum odio mollis dolor,
										nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus
										nunc. Vivamus sit amet efficitur velit. Phasellus eget
										fermentum mauris. Suspendisse nec dignissim nulla. Integer
										non quam commodo, scelerisque felis id, eleifend turpis.
										Phasellus in nulla quis erat tempor tristique eget vel
										purus. Nulla pharetra pharetra pharetra. Praesent varius
										eget justo ut lacinia. Phasellus pharetra, velit viverra
										lacinia consequat, ipsum odio mollis dolor, nec facilisis
										arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus
										sit amet efficitur velit.
									</p>
									<br />
									<p>
										Phasellus eget fermentum mauris. Suspendisse nec dignissim
										nulla. Integer non quam commodo, scelerisque felis id,
										eleifend turpis. Phasellus in nulla quis erat tempor
										tristique eget vel purus. Nulla pharetra pharetra pharetra.
										Praesent varius eget justo ut lacinia. Phasellus pharetra,
										velit viverra lacinia consequat, ipsum odio mollis dolor,
										nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus
										nunc. Vivamus sit amet efficitur velit. Phasellus eget
										fermentum mauris. Suspendisse nec dignissim nulla. Integer
										non quam commodo, scelerisque felis id, eleifend turpis
									</p>
								</div>
							</div>
							<div className="product-review">
								<h3>02 Reviews</h3>
								<ul className="comment-list">
									<li className="review comment-item">
										<div className="post-comment">
											<div className="comment-avater">
												<Image
													loading="lazy"
													src={commentAuthor1}
													alt="Comment Author"
												/>
											</div>
											<div className="comment-content">
												<h4 className="name">Masirul Islam</h4>
												<div className="commented-on">
													March 20, 2024 at 2:37 pm
												</div>
												<ul className="star">
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
												</ul>
												<p className="text">
													Neque porro est qui dolorem ipsum quia quaed inventor
													veritatis et quasi architecto beatae vitae dicta sunt
													explicabo. Aelltes port lacus quis enim var sed
													efficitur turpis gilla sed sit amet finibus eros.
													Lorem Ipsum is simply dummy
												</p>

												<a className="theme-btn" href="#!">
													Reply
												</a>
											</div>
										</div>
									</li>
									<li className="review comment-item">
										<div className="post-comment">
											<div className="comment-avater">
												<Image
													loading="lazy"
													src={commentAuthor2}
													alt="Comment Author"
												/>
											</div>
											<div className="comment-content">
												<h4 className="name">Daniel Adam</h4>
												<div className="commented-on">
													March 30, 2024 at 2:37 pm
												</div>
												<ul className="star">
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
													<li>
														<i className="fa-solid fa-star"></i>
													</li>
												</ul>
												<p className="text">
													Neque porro est qui dolorem ipsum quia quaed inventor
													veritatis et quasi architecto beatae vitae dicta sunt
													explicabo. Aelltes port lacus quis enim var sed
													efficitur turpis gilla sed sit amet finibus eros.
													Lorem Ipsum is simply dummy
												</p>

												<a className="theme-btn" href="#!">
													Reply
												</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="comment-form">
								<div className="form-title">
									<h3 className="inner-title">Add a Review</h3>
									<p>
										Your email address will not be published. Required fields
										are marked *
									</p>
									<div className="rating">
										<p>Rate this product? *</p>
										<ul className="star">
											<li>
												<i className="fa-regular fa-star"></i>
											</li>
											<li>
												<i className="fa-regular fa-star"></i>
											</li>
											<li>
												<i className="fa-regular fa-star"></i>
											</li>
											<li>
												<i className="fa-regular fa-star"></i>
											</li>
											<li>
												<i className="fa-regular fa-star"></i>
											</li>
										</ul>
									</div>
								</div>
								<div className="grid md:grid-cols-2 gap-5">
									<div className="form-group style-white2">
										<div className="w-full bg-white py-4 px-5 flex items-center gap-0 rounded-sm">
											<input
												type="text"
												placeholder="Your Name"
												className="bg-transparent p-0 m-0 border-none ring-0 flex-1 w-full"
											/>
											<i className="text-text-3 far fa-user"></i>
										</div>
									</div>
									<div className="form-group style-white2">
										<div className="w-full bg-white py-4 px-5 flex items-center gap-0 rounded-sm">
											<input
												type="email"
												placeholder="Your Email"
												className="bg-transparent p-0 m-0 border-none ring-0 flex-1 w-full"
											/>
											<i className="text-text-3 far fa-envelope"></i>
										</div>
									</div>
									<div className="md:col-span-2 form-group style-white2">
										<div className="w-full bg-white py-4 px-5 flex gap-0 rounded-sm">
											<textarea
												placeholder="Write a Message"
												className="bg-transparent p-0 m-0 border-none ring-0 flex-1 w-full"
											></textarea>
											<i className="text-text-3 far fa-pencil-alt"></i>
										</div>
									</div>
									<div className="md:col-span-2 form-group">
										<input
											id="reviewcheck"
											name="reviewcheck"
											type="checkbox"
										/>
										<label htmlFor="reviewcheck">
											Save my name, email, and website in this browser for the
											next time I comment.<span className="checkmark"></span>
										</label>
									</div>
									<div className="md:col-span-2 form-group mb-0">
										<button className="theme-btn">
											Post A Comment
											<i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- shop details one ended --> */}
			{/* <!-- top rated products started --> */}
			<section className="beauty-care-product-section section-padding-100 bg-bg-4 overflow-hidden">
				<div className="beauty-care-product-container-wrapper style4">
					<div className="container">
						<div className="grid md:grid-cols-2 gap-y-6 items-center mb-10">
							<div>
								<div className="section-title">
									<div className="subtitle style4">TOP BRAND</div>
									<h2 className="title">Beauty Care Products</h2>
								</div>
							</div>
							<div className="flex md:justify-end">
								<div className="btn-wrapper">
									<a
										className="theme-btn style10"
										href="shop-right-sidebar.html"
									>
										View All
									</a>
								</div>
							</div>
						</div>
						<div className="grid gap-6 xl:grid-cols-4 md:grid-cols-2">
							<div className="best-seller-product-items-two style-seller-3">
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
										src={beautyCareProductThumb4_1}
										alt="thumb"
									/>
								</div>
								<div className="best-seller-product-items-two__content">
									<div className="best-seller-product-items-two__details">
										<p className="best-seller-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="best-seller-product-items-two__details--title">
											<a href="shop-details-one.html">Brightening Face Oil</a>
										</h6>
										<div className="best-seller-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="best-seller-product-items-two style-seller-3">
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
										src={beautyCareProductThumb4_2}
										alt="thumb"
									/>
								</div>
								<div className="best-seller-product-items-two__content">
									<div className="best-seller-product-items-two__details">
										<p className="best-seller-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="best-seller-product-items-two__details--title">
											<a href="shop-details-one.html">Eternal Youth Serum</a>
										</h6>
										<div className="best-seller-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="best-seller-product-items-two style-seller-3">
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
								<div className="best-seller-product-items-two__badge1">NEW</div>
								<div className="best-seller-product-items-two__thumb">
									<Image
										loading="lazy"
										src={beautyCareProductThumb4_3}
										alt="thumb"
									/>
								</div>
								<div className="best-seller-product-items-two__content">
									<div className="best-seller-product-items-two__details">
										<p className="best-seller-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="best-seller-product-items-two__details--title">
											<a href="shop-details-one.html">Elite Whitening Serum</a>
										</h6>
										<div className="best-seller-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="best-seller-product-items-two style-seller-3">
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
										src={beautyCareProductThumb4_4}
										alt="thumb"
									/>
								</div>
								<div className="best-seller-product-items-two__content">
									<div className="best-seller-product-items-two__details">
										<p className="best-seller-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="best-seller-product-items-two__details--title">
											<a href="shop-details-one.html">Exclusive Body Lotion</a>
										</h6>
										<div className="best-seller-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- top rated products ended --> */}
			<Partials />
		</>
	);
}
