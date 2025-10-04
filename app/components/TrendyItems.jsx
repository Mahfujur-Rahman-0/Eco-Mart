"use client";
import Image from "next/image";
import bestSellerProductThumb2_1 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_1.png";
import bestSellerProductThumb2_2 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_2.png";
import bestSellerProductThumb2_3 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_3.png";
import bestSellerProductThumb2_4 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_4.png";
import bestSellerProductThumb2_5 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_5.png";
import bestSellerProductThumb2_6 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_6.png";
import bestSellerProductThumb2_7 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_7.png";
import bestSellerProductThumb2_8 from "../../public/assets/images/homepage-2/bestSellerProductThumb2_8.png";

export default function TrendyItems() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			<div>
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
						<Image loading="lazy" src={bestSellerProductThumb2_1} alt="thumb" />
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
			</div>
			<div>
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
					<div className="best-seller-product-items-two__badge1">TRANDING</div>
					<div className="best-seller-product-items-two__thumb">
						<Image loading="lazy" src={bestSellerProductThumb2_2} alt="thumb" />
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
			</div>
			<div>
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
					<div className="best-seller-product-items-two__badge1">NEW</div>
					<div className="best-seller-product-items-two__thumb">
						<Image loading="lazy" src={bestSellerProductThumb2_3} alt="thumb" />
					</div>
					<div className="best-seller-product-items-two__content">
						<div className="best-seller-product-items-two__details">
							<p className="best-seller-product-items-two__details--subtitle">
								FASHION BAG
							</p>
							<h6 className="best-seller-product-items-two__details--title">
								<a href="shop-details-one.html">Overshirt With Pocket</a>
							</h6>
							<div className="best-seller-product-items-two__details--price">
								<span className="original-price">$99.00</span>
								<span className="offer-price">$79.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
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
						<Image loading="lazy" src={bestSellerProductThumb2_4} alt="thumb" />
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
			<div>
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
						<Image loading="lazy" src={bestSellerProductThumb2_5} alt="thumb" />
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
								<span className="original-price">$99.00</span>
								<span className="offer-price">$79.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
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
					<div className="best-seller-product-items-two__badge1">TRANDING</div>
					<div className="best-seller-product-items-two__thumb">
						<Image loading="lazy" src={bestSellerProductThumb2_6} alt="thumb" />
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
			</div>
			<div>
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
					<div className="best-seller-product-items-two__badge1">NEW</div>
					<div className="best-seller-product-items-two__thumb">
						<Image loading="lazy" src={bestSellerProductThumb2_7} alt="thumb" />
					</div>
					<div className="best-seller-product-items-two__content">
						<div className="best-seller-product-items-two__details">
							<p className="best-seller-product-items-two__details--subtitle">
								FASHION BAG
							</p>
							<h6 className="best-seller-product-items-two__details--title">
								<a href="shop-details-one.html">Overshirt With Pocket</a>
							</h6>
							<div className="best-seller-product-items-two__details--price">
								<span className="original-price">$99.00</span>
								<span className="offer-price">$79.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
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
						<Image loading="lazy" src={bestSellerProductThumb2_8} alt="thumb" />
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
		</div>
	);
}
