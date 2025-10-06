"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import galleryThumb2_1 from "../../public/assets/images/homepage-2/gallery-Thumb2_1.jpg";
import galleryThumb2_2 from "../../public/assets/images/homepage-2/gallery-Thumb2_2.jpg";
import galleryThumb2_3 from "../../public/assets/images/homepage-2/gallery-Thumb2_3.jpg";
import galleryThumb2_4 from "../../public/assets/images/homepage-2/gallery-Thumb2_4.jpg";
import galleryThumb2_5 from "../../public/assets/images/homepage-2/gallery-Thumb2_5.jpg";
import galleryThumb2_6 from "../../public/assets/images/homepage-2/gallery-Thumb2_6.jpg";
import galleryThumb2_7 from "../../public/assets/images/homepage-2/gallery-Thumb2_7.jpg";
import galleryThumb2_8 from "../../public/assets/images/homepage-2/gallery-Thumb2_8.jpg";

import Image from "next/image";

export default function GallerySliderTwo() {
	return (
		<>
			<Swiper
				// speed={2000}
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={6}
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
					1024: {
						slidesPerView: 4, // desktop
					},
					1280: {
						slidesPerView: 6, // large desktop
					},
				}}
			>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_1} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_2} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_3} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_4} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_5} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_6} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_7} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-thumb">
						<Image loading="lazy" src={galleryThumb2_8} alt="thumb" />
						<div className="icon">
							<i className="fa-brands fa-instagram"></i>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
