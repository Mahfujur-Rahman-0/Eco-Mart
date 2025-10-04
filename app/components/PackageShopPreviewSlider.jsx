"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import packageShopPreview from "../../public/assets/images/homepage-2/package-shop-preview.png";

export default function PackageShopPreviewSlider() {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				navigation={{
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				}}
			>
				<SwiperSlide>
					<Image loading="lazy" src={packageShopPreview} alt="thumb" />
					<div className="content">
						<h4>
							Fashionable Bags For <br />
							Women
						</h4>
						<p>$179.00</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image loading="lazy" src={packageShopPreview} alt="thumb" />
					<div className="content">
						<h4>
							Fashionable Bags For <br />
							Women
						</h4>
						<p>$179.00</p>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className="arrow-btn">
				<button className="slider-arrow slider-prev" id="packageShopSlider1Prev">
					<i className="fa-sharp fa-light fa-chevron-left"></i>
				</button>
				<button className="slider-arrow slider-next" id="packageShopSlider1Next">
					<i className="fa-sharp fa-light fa-chevron-right"></i>
				</button>
			</div>
		</>
	);
}
