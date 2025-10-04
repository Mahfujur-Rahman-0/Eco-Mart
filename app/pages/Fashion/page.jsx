import Image from "next/image";
import Partials from "../../components/Partials";
import BrandSlider from "../../components/BrandSlider";
import TrendyItems from "../../components/TrendyItems";
import NewProductsSlide from "../../components/NewProductsSlide";
import PackageShopPreviewSlider from "../../components/PackageShopPreviewSlider";
import GallerySliderTwo from "../../components/GallerySliderTwo";

import featureShop from "../../../public/assets/images/homepage-2/feature-shop.jpg";

//Featured Images start
import featuredProductThumb2_1 from "../../../public/assets/images/homepage-2/featured-product-thumb2_1.png";
import featuredProductThumb2_2 from "../../../public/assets/images/homepage-2/featured-product-thumb2_2.png";
import featuredProductThumb2_3 from "../../../public/assets/images/homepage-2/featured-product-thumb2_3.png";
import featuredProductThumb2_4 from "../../../public/assets/images/homepage-2/featured-product-thumb2_4.png";
//Featured Images End
import introThumb2_1 from "../../../public/assets/images/homepage-2/introThumb2_1.jpg";
import introThumb2_2 from "../../../public/assets/images/homepage-2/introThumb2_2.jpg";
import introThumb2_3 from "../../../public/assets/images/homepage-2/introThumb2_3.jpg";
import introThumb2_4 from "../../../public/assets/images/homepage-2/introThumb2_4.jpg";
import introThumb2_5 from "../../../public/assets/images/homepage-2/introThumb2_5.jpg";
import offer_1 from "../../../public/assets/images/homepage-2/offer-1.png";
import offer_2 from "../../../public/assets/images/homepage-2/offer-2.png";
import offer_3 from "../../../public/assets/images/homepage-2/offer-3.jpg";
import offerThumb2_1 from "../../../public/assets/images/homepage-2/offerThumb2_1.png";
import packageShop1_1 from "../../../public/assets/images/homepage-2/package-shop1_1.png";
import packageShop1_2 from "../../../public/assets/images/homepage-2/package-shop1_2.png";
import packageShop1_3 from "../../../public/assets/images/homepage-2/package-shop1_3.png";
import packageShop1_4 from "../../../public/assets/images/homepage-2/package-shop1_4.png";
import packageShop1_5 from "../../../public/assets/images/homepage-2/package-shop1_5.png";
import packageShop1_6 from "../../../public/assets/images/homepage-2/package-shop1_6.png";
import packageShop1_7 from "../../../public/assets/images/homepage-2/package-shop1_7.png";
import packageShop1_8 from "../../../public/assets/images/homepage-2/package-shop1_8.png";

//shop featured started
import featureIcon4_1 from "../../../public/assets/icon/featureIcon4_1.svg";
import featureIcon4_2 from "../../../public/assets/icon/featureIcon4_2.svg";
import featureIcon4_3 from "../../../public/assets/icon/featureIcon4_3.svg";
import featureIcon4_4 from "../../../public/assets/icon/featureIcon4_4.svg";
//shop featured ended

export default function Fashion() {
	return (
		<>
			{/* <!-- intro started --> */}
			<section className="intro-section">
				<div className="intro-container-wrapper style2">
					<div className="container">
						<div className="intro-wrapper style2">
							<div className="intro-subtitle">
								Unmatched fashion trend 2024 at Ecomarts
							</div>
							<h1 className="intro-title">
								Make your fashion look more charming
							</h1>
							<div className="intro-thumbs">
								<div className="thumb1">
									<Image loading="lazy" src={introThumb2_1} alt="thumb" />
								</div>
								<div className="thumb2">
									<Image loading="lazy" src={introThumb2_2} alt="thumb" />
								</div>
								<div className="thumb3">
									<Image loading="lazy" src={introThumb2_3} alt="thumb" />
								</div>
								<div className="thumb4">
									<Image loading="lazy" src={introThumb2_4} alt="thumb" />
								</div>
								<div className="thumb5">
									<Image loading="lazy" src={introThumb2_5} alt="thumb" />
								</div>
							</div>
							<div className="collections">
								<div className="summer-collections">
									<div className="subtitle">Summer collection</div>
									<div className="title">Trendy & clussi for new season</div>
									<a href="shop-left-sidebar.html">
										view products
										<i className="fa-solid fa-chevrons-right"></i>
									</a>
								</div>
								<div className="winter-collections">
									<div className="subtitle">Winter collection</div>
									<div className="title">Trendy & clussi for new season</div>
									<a href="shop-left-sidebar.html">
										view products
										<i className="fa-solid fa-chevrons-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- intro ended --> */}

			{/* <!-- offer started --> */}
			<section className="offer-section section-padding-70">
				<div className="container">
					<div className="offer-card-items-fashon-two">
						<div className="grid md:grid-cols-2 gap-5">
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="offer-card-items-fashon-two1-info1">
									<div className="offer-card-items-fashon-two1-info1__thumb">
										<Image loading="lazy" src={offer_1} alt="thumb" />
									</div>
									<div className="offer-card-items-fashon-two1-info1__content">
										<p className="offer-card-items-fashon-two1-info1__content--subtitle">
											Sale Up to 50% Off
										</p>
										<h6 className="offer-card-items-fashon-two1-info1__content--title">
											The Latest men’s
											<br />
											<span>trends this season</span>
										</h6>
										<div className="offer-card-items-fashon-two1-info1__content--btn-wrapper mt-5">
											<a className="button-dark" href="shop-details-one.html">
												Shop Now
											</a>
										</div>
									</div>
								</div>
								<div className="offer-card-items-fashon-two1-info1 mt-4 style2">
									<div className="offer-card-items-fashon-two1-info1__thumb">
										<Image loading="lazy" src={offer_2} alt="thumb" />
									</div>
									<div className="offer-card-items-fashon-two1-info1__content">
										<p className="offer-card-items-fashon-two1-info1__content--subtitle">
											Sale Up to 50% Off
										</p>
										<h6 className="offer-card-items-fashon-two1-info1__content--title">
											Big Patterns are
											<br />
											<span>Back In Fashion</span>
										</h6>
										<div className="offer-card-items-fashon-two1-info1__content--btn-wrapper mt-5">
											<a className="button-one" href="shop-details-one.html">
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="offer-card-items-fashon-two2">
									<div className="offer-card-items-fashon-two2__thumb">
										<Image loading="lazy" src={offer_3} alt="thumb" />
									</div>
									<div className="offer-card-items-fashon-two2__content">
										<span className="offer-card-items-fashon-two2__content--subtitle">
											New Product
										</span>
										<h6 className="offer-card-items-fashon-two2__content--title">
											Get Up To 40% Off Clothing
										</h6>
										<p className="offer-card-items-fashon-two2__content--text">
											Consectetur adipiscing elit. Integer nunc viverra laoreet
											est,
										</p>
										<div className="offer-card-items-fashon-two2__content--btn-wrapper">
											<a className="button-light" href="shop-details-one.html">
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- offer ended --> */}

			{/* <!-- best seller started --> */}
			<section className="best-seller-product-items-section bg-[#FFF5F4] section-padding-70">
				<div className="best-seller-product-items-container-wrapper style4">
					<div className="container max-w-[1410px]">
						<div className="pb-[30px] text-center">
							<div className="flex items-center flex-col justify-center gap-2.5">
								<div className="tag">Trendy Items</div>
								<h3>our trendy fasion products</h3>
							</div>
						</div>
						<div className="feature-flex-tab-wrapper py-[30px]">
							<div className="feature-tab-btn-wrapper">
								<ul
									className="nav nav-pills flex items-center gap-2.5 flex-wrap justify-center md:justify-baseline"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link active bs-1-filter-btns"
											type="button"
											role="tab"
										>
											All
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link bs-1-filter-btns"
											type="button"
											role="tab"
										>
											T-Shirt
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link bs-1-filter-btns"
											type="button"
											role="tab"
										>
											Jacket
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link bs-1-filter-btns"
											type="button"
											role="tab"
										>
											Panjabi
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link bs-1-filter-btns"
											type="button"
											role="tab"
										>
											Hoody
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link bs-1-filter-btns"
											type="button"
											role="tab"
										>
											Pant
										</button>
									</li>
								</ul>
							</div>
							<div>
								<select className="custom-select">
									<option>Select Brand Name</option>
									<option>Apple</option>
									<option>Dell</option>
									<option>LG</option>
									<option>ASUS</option>
								</select>
							</div>
						</div>

						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-one"
								role="tabpanel"
								aria-labelledby="pills-one-tab"
							>
								<TrendyItems />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- best seller ended --> */}

			{/* <!-- feature started --> */}
			<section className="featured-item-section section-padding-70">
				<div className="container">
					<div className="featured-item-wrapper style1">
						<div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2">
							<div className="featured_item_two bg-theme-1">
								<div className="featured_item_two__content">
									<span className="featured_item_two__content--subtitle">
										Hot Fashion
									</span>
									<h4 className="featured_item_two__content--title">
										Buy Now Wear Forever
									</h4>
									<p className="featured_item_two__content--text">
										Accessories Up To 20% Off
									</p>
									<div className="btn-wrapper">
										<a className="button-light" href="shop-details-one.html">
											Shop Now
										</a>
									</div>
								</div>
								<div className="featured_item_two__thumb">
									<Image
										loading="lazy"
										//src="../../public/assets/images/homepage-2/featured-product-thumb2_1.png"
										src={featuredProductThumb2_1}
										alt="thumb"
									/>
									<div className="featured_item_two__thumb--shape"></div>
								</div>
							</div>
							<div className="featured_item_two bg-orange2">
								<div className="featured_item_two__content">
									<span className="featured_item_two__content--subtitle">
										MINIMAL STYLE
									</span>
									<h4 className="featured_item_two__content--title">
										Buy Now Wear Forever
									</h4>
									<p className="featured_item_two__content--text">
										Accessories Up To 20% Off
									</p>
									<div className="btn-wrapper">
										<a className="button-light" href="shop-details-one.html">
											Shop Now
										</a>
									</div>
								</div>
								<div className="featured_item_two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_2}
										alt="thumb"
									/>
									<div className="featured_item_two__thumb--shape"></div>
								</div>
							</div>
							<div className="featured_item_two bg-[#84ABF5]">
								<div className="featured_item_two__content">
									<span className="featured_item_two__content--subtitle">
										Best DEAL
									</span>
									<h4 className="featured_item_two__content--title">
										Traditional Ethnic Dress
									</h4>
									<p className="featured_item_two__content--text">
										Accessories Up To 20% Off
									</p>
									<div className="btn-wrapper">
										<a className="button-light" href="shop-details-one.html">
											Shop Now
										</a>
									</div>
								</div>
								<div className="featured_item_two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_3}
										alt="thumb"
									/>
									<div className="featured_item_two__thumb--shape"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- featured ended --> */}

			{/* <!-- offer 2 started --> */}
			<section className="offer-section fix bg-[#FEDFDC]">
				<div className="offer-container-wrapper style2">
					<div className="container">
						<div className="offer-wrapper style2">
							<div className="gy-lg-0 grid items-center gap-x-10 gap-y-10 lg:gap-y-0 xl:grid-cols-2">
								<div className="col-xl-7">
									<div className="thumb">
										<Image loading="lazy" src={offerThumb2_1} alt="Ecomarts" />
									</div>
								</div>
								<div className="col-xl-5">
									<div className="offer-content">
										<h6>Clearing Sale</h6>
										<h2>{"60% sale on selected products"}</h2>
										<p>
											Consectetur adipiscing elit. Integer nunc viverra laoreet
											est, a pretium metus aliquam eget. Maecenas porta is nunc
										</p>

										<div className="timer-box2">
											<div className="box">
												<div className="number count-days">15</div>
												<div className="text">Day</div>
											</div>
											<div className="box">
												<div className="number count-hours">59</div>
												<div className="text">Hour</div>
											</div>
											<div className="box">
												<div className="number count-minutes">45</div>
												<div className="text">Min</div>
											</div>
											<div className="box">
												<div className="number count-seconds">49</div>
												<div className="text">Sec</div>
											</div>
										</div>

										<div className="btn-wrapper">
											<a className="button-one" href="cart.html">
												Shop Now
											</a>
										</div>

										<h6 className="bottom-text">
											Limited time offer. The deal will expires on
											<span className="date">December 11, 2024</span> HURRY UP!
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- offer 2 ended --> */}

			{/* <!-- package shop started --> */}
			<section className="package-shop-section section-padding-70">
				<div className="container">
					<div className="section-top-wrapper mb-5">
						<div className="flex gap-3.5 flex-col md:flex-row md:justify-between md:items-center pb-7.5">
							<div className="section-title">
								<div className="tag mb-2">Package and save</div>
								<h3 className="text-title !text-3xl">Shop This Look</h3>
							</div>
							<a className="button-dark" href="shop-left-sidebar.html">
								View all <i className="fa-solid fa-chevron-right"></i>
							</a>
						</div>
					</div>

					<div className="md:grid gap-7.5 md:grid-cols-2 xl:grid-cols-4">
						<div className="max-w-full">
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_1} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Handle fashionable</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_2} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Wrapped present</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_3} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Hand Ring</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_4} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Diamond crown</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-5 md:mb-0">
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_5} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Sunglasses on the</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_6} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Gold watch with</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one mb-7.5">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_7} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Stylish fedora hat</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="package-shop-one">
								<div className="package-shop-one__thumb">
									<Image loading="lazy" src={packageShop1_8} alt="thumb" />
								</div>
								<div className="package-shop-one__content">
									<h4 className="package-shop-one__content-title">
										<a href="shop-details-one.html">Handle fashionable</a>
									</h4>
									<div className="package-shop-one__star-wrap">
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>0 Review</span>
									</div>
									<h4 className="package-shop-one__content-price">
										<span className="offer-price">$25.00</span>
										<span className="original-price">$85.00</span>
									</h4>
									<div className="package-shop-one__icons">
										<a href="wishlist.html">
											<i className="fa-light fa-heart"></i>
										</a>
										<a href="cart.html">
											<i className="fa-light fa-bag-shopping"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-6 col-md-12 md:col-span-2 xl:col-span-2">
							<div className="package-shop-preview">
								<PackageShopPreviewSlider />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- package shop ended --> */}

			{/* <!-- featured 2 started --> */}
			<section className="feature-product-items-section section-padding-70 bg-bg-2">
				<div className="feature-product-items-container-wrapper style2">
					<div className="container">
						<div className="mb-10 flex items-center justify-center flex-col">
							<div className="mb-2 tag">Featured Items</div>
							<h3 className="title-heading">our featured products</h3>
						</div>

						<div className="gap-6 grid md:grid-cols-2 xl:grid-cols-4">
							<div className="feature-product-items-two">
								<div className="feature-product-items-two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_1}
										alt="thumb"
									/>
								</div>
								<div className="feature-product-items-two__content">
									<div className="feature-product-items-two__details">
										<p className="feature-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="feature-product-items-two__details--title">
											<a href="shop-details-one.html">High-Neck puff jacket</a>
										</h6>
										<div className="feature-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="feature-product-items-two">
								<div className="feature-product-items-two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_2}
										alt="thumb"
									/>
								</div>
								<div className="feature-product-items-two__content">
									<div className="feature-product-items-two__details">
										<p className="feature-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="feature-product-items-two__details--title">
											<a href="shop-details-one.html">High-Neck puff jacket</a>
										</h6>
										<div className="feature-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="feature-product-items-two">
								<div className="feature-product-items-two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_3}
										alt="thumb"
									/>
								</div>
								<div className="feature-product-items-two__content">
									<div className="feature-product-items-two__details">
										<p className="feature-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="feature-product-items-two__details--title">
											<a href="shop-details-one.html">High-Neck puff jacket</a>
										</h6>
										<div className="feature-product-items-two__details--price">
											<span className="offer-price">$79.00</span>
											<span className="original-price">$99.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="feature-product-items-two">
								<div className="feature-product-items-two__thumb">
									<Image
										loading="lazy"
										src={featuredProductThumb2_4}
										alt="thumb"
									/>
								</div>
								<div className="feature-product-items-two__content">
									<div className="feature-product-items-two__details">
										<p className="feature-product-items-two__details--subtitle">
											FASHION BAG
										</p>
										<h6 className="feature-product-items-two__details--title">
											<a href="shop-details-one.html">High-Neck puff jacket</a>
										</h6>
										<div className="feature-product-items-two__details--price">
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
			{/* <!-- featured 2 ended --> */}

			{/* <!-- featured shop started --> */}
			<section className="feature-shop-section section-padding-70 overflow-hidden">
				<div className="feature-shop-wrapper">
					<div className="xl:grid xl:items-center xl:grid-cols-2">
						<div>
							<div className="feature-shop-thumb">
								<Image loading="lazy" src={featureShop} alt="EcomArts" />
							</div>
						</div>
						<div>
							<div className="feature-shop-wrapper mt-6 lg:mt-0">
								<div className="section-title mb-10">
									<div className="tag !bg-white mb-2">New Products</div>
									<h3 className="!text-white !text-3xl !font-bold">
										Meet New Arrivals
									</h3>
								</div>
								<NewProductsSlide />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- featured shop ended --> */}

			{/* <!-- brand started --> */}
			<div className="brand-slider-section section-padding-70 pt-0 overflow-hidden">
				<div className="container">
					<div className="brand-wrapper-two style1">
						<BrandSlider />
					</div>
				</div>
			</div>
			{/* <!-- brand ended --> */}

			{/* <!-- gallery started --> */}
			<section className="gallery-section overflow-hidden">
				<div className="container">
					<div className="gallery-wrapper-two">
						<div className="section-title text-center mb-12.5">
							<div className="subtitle style2">Top Rated</div>
							<h3 className="title">Incredible Products</h3>
						</div>
						<GallerySliderTwo />
					</div>
				</div>
			</section>
			{/* <!-- gallery ended --> */}

			{/* <!-- shop featured started --> */}
			<section className="feature-section section-padding-70 overflow-hidden">
				<div className="container">
					<div className="grid gap-[48px] xl:grid-cols-4 md:grid-cols-2">
						<div className="feature-box-item-three">
							<div className="feature-box-item-three__icon">
								<Image loading="lazy" src={featureIcon4_1} alt="icon" />
							</div>
							<div className="feature-box-item-three__content">
								<h6>High Quality</h6>
								<p className="feature-box-item-three__content--text">
									Crafted from top materials
								</p>
							</div>
						</div>
						<div className="feature-box-item-three">
							<div className="feature-box-item-three__icon">
								<Image loading="lazy" src={featureIcon4_2} alt="icon" />
							</div>
							<div className="feature-box-item-three__content">
								<h6>Warrany Protection</h6>
								<p className="feature-box-item-three__content--text">
									Over 2 years
								</p>
							</div>
						</div>
						<div className="feature-box-item-three">
							<div className="feature-box-item-three__icon">
								<Image loading="lazy" src={featureIcon4_3} alt="icon" />
							</div>
							<div className="feature-box-item-three__content">
								<h6>Free Shipping</h6>
								<p className="feature-box-item-three__content--text">
									Order over 150 $
								</p>
							</div>
						</div>
						<div className="feature-box-item-three">
							<div className="feature-box-item-three__icon">
								<Image loading="lazy" src={featureIcon4_4} alt="icon" />
							</div>
							<div className="feature-box-item-three__content">
								<h6>24 / 7 Support</h6>
								<p className="feature-box-item-three__content--text">
									Dedicated support
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- shop featured ended --> */}

			<Partials />
		</>
	);
}
