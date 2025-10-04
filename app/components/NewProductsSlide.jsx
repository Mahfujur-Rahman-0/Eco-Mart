"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import boy1 from "../../public/assets/images/homepage-2/boy-1.png";
import boy2 from "../../public/assets/images/homepage-2/boy-2.png";

export default function NewProductsSlide() {
	return (
		<>
			<Swiper
				speed={2000}
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={3}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1, // mobile
					},
					640: {
						slidesPerView: 2, // small tablet
					},
					768: {
						slidesPerView: 3, // tablet
					},
				}}
			>
				<SwiperSlide>
					<div className="best-seller-product-items-two">
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
						<div className="best-seller-product-items-two__thumb">
							<Image loading="lazy" src={boy1} alt="thumb" />
						</div>
						<div className="best-seller-product-items-two__content">
							<div className="best-seller-product-items-two__details">
								<p className="best-seller-product-items-two__details--subtitle">
									FASHION BAG
								</p>
								<h6 className="best-seller-product-items-two__details--title">
									<a href="shop-details-one.html">High-Neck puff jacket</a>
								</h6>
								<div className="best-seller-product-items-two__details--price">
									<span className="offer-price">$79.00</span>
									<span className="original-price">$99.00</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="best-seller-product-items-two">
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
						<div className="best-seller-product-items-two__thumb">
							<Image loading="lazy" src={boy2} alt="thumb" />
						</div>
						<div className="best-seller-product-items-two__content">
							<div className="best-seller-product-items-two__details">
								<p className="best-seller-product-items-two__details--subtitle">
									FASHION BAG
								</p>
								<h6 className="best-seller-product-items-two__details--title">
									<a href="shop-details-one.html">High-Neck puff jacket</a>
								</h6>
								<div className="best-seller-product-items-two__details--price">
									<span className="offer-price">$79.00</span>
									<span className="original-price">$99.00</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="best-seller-product-items-two">
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
						<div className="best-seller-product-items-two__badge1">25% off</div>
						<div className="best-seller-product-items-two__thumb">
							<Image loading="lazy" src={boy1} alt="thumb" />
						</div>
						<div className="best-seller-product-items-two__content">
							<div className="best-seller-product-items-two__details">
								<p className="best-seller-product-items-two__details--subtitle">
									FASHION BAG
								</p>
								<h6 className="best-seller-product-items-two__details--title">
									<a href="shop-details-one.html">High-Neck puff jacket</a>
								</h6>
								<div className="best-seller-product-items-two__details--price">
									<span className="offer-price">$79.00</span>
									<span className="original-price">$99.00</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="best-seller-product-items-two">
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
						<div className="best-seller-product-items-two__badge1">25% off</div>
						<div className="best-seller-product-items-two__thumb">
							<Image loading="lazy" src={boy1} alt="thumb" />
						</div>
						<div className="best-seller-product-items-two__content">
							<div className="best-seller-product-items-two__details">
								<p className="best-seller-product-items-two__details--subtitle">
									FASHION BAG
								</p>
								<h6 className="best-seller-product-items-two__details--title">
									<a href="shop-details-one.html">High-Neck puff jacket</a>
								</h6>
								<div className="best-seller-product-items-two__details--price">
									<span className="offer-price">$79.00</span>
									<span className="original-price">$99.00</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
