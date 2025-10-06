import Image from "next/image";
import cartThumb1_2 from "../../../../public/assets/images/shop/cart-thumb1_1.jpg";
import Partials from "../../../components/Partials";

export default function wishlist() {
	return (
		<>
			{/* <!-- wishlist started --> */}
			<div className="wishlist-wrapper section-padding fix bg-white">
				<div className="container">
					<form action="#" className="woocommerce-cart-form">
						<div className="wishlist-table-wrapper">
							<table className="wishlist_table">
								<thead>
									<tr>
										<th className="cart-col-image">Product</th>
										<th className="cart-col-price">Price</th>
										<th className="cart-col-total">Sub total</th>
										<th className="cart-col-stock">Stock</th>
										<th className="cart-col-stock">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className="cart_item">
										<td className="product">
											<a className="cartimage" href="shop-details.html">
												<Image loading="lazy" src={cartThumb1_2} alt="Image" />
											</a>
											<p>Close-fitting dress</p>
										</td>
										<td data-title="Price">
											<span className="amount">
												<bdi>
													<span>$</span>50.00
												</bdi>
											</span>
										</td>
										<td data-title="Total">
											<span className="amount">
												<bdi>
													<span>$</span>60.00
												</bdi>
											</span>
										</td>
										<td data-title="stock">
											<a href="#" className="stock_out">
												Stock out
											</a>
										</td>
										<td data-title="Action">
											<a
												classNameName="theme-btn style7 border-0 wishlist-Btn"
												href="wishlist.html"
											>
												Add to Cart{" "}
												<i className="fa-solid fa-cart-shopping"></i>
											</a>
										</td>
										<td classNameName="Delete_Btn">
											<button classNameName=" ">
												<i className="fa-solid fa-trash"></i>
											</button>
										</td>
									</tr>

									<tr className="cart_item">
										<td className="product">
											<a className="cartimage" href="shop-details.html">
												<Image loading="lazy" src={cartThumb1_2} alt="Image" />
											</a>
											<p>Close-fitting dress</p>
										</td>
										<td data-title="Price">
											<span className="amount">
												<bdi>
													<span>$</span>50.00
												</bdi>
											</span>
										</td>
										<td data-title="Total">
											<span className="amount">
												<bdi>
													<span>$</span>60.00
												</bdi>
											</span>
										</td>
										<td data-title="stock">
											<a href="#" className="stock">
												Stock
											</a>
										</td>
										<td data-title="Action">
											<a
												classNameName="theme-btn style7 border-0 wishlist-Btn"
												href="wishlist.html"
											>
												Add to Cart{" "}
												<i className="fa-solid fa-cart-shopping"></i>
											</a>
										</td>
										<td classNameName="Delete_Btn">
											<button classNameName=" ">
												<i className="fa-solid fa-trash"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</form>
				</div>
			</div>

			{/* <!-- wishlist ended --> */}

			<Partials />
		</>
	);
}
