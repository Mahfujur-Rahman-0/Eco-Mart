import Image from "next/image";
import cartThumb1_2 from "../../../../public/assets/images/shop/cart-thumb1_1.jpg";
import Partials from "@/app/components/Partials";

export default function Cart() {
	return (
		<>
			{/* <!-- cart started --> */}
			<div classNameName="cart-wrapper section-padding fix bg-white">
				<div classNameName="container">
					<div classNameName="grid grid-cols-12">
						<div classNameName="lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
							<div classNameName="table_desc">
								<div classNameName="table_page table-responsive">
									<table className="Cart_Table wishlist_table">
										<thead>
											<tr>
												<th className="cart-col-image">Product</th>
												<th className="cart-col-price">Price</th>
												<th className="cart-col-total">Quantity</th>
												<th className="cart-col-stock">Sub total</th>
												<th className="cart-col-stock">Remove</th>
											</tr>
										</thead>
										<tbody>
											<tr className="cart_item">
												<td className="product">
													<a className="cartimage" href="shop-details.html">
														<Image
															loading="lazy"
															src={cartThumb1_2}
															alt="Image"
														/>
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

												<td
													classNameName="product_quantity"
													data-title="Quantity"
												>
													<div classNameName="plus-minus-input">
														<div classNameName="input-group-button">
															<button
																type="button"
																classNameName="button"
																data-quantity="minus"
																data-field="quantity1"
															>
																<i
																	classNameName="fa fa-minus"
																	aria-hidden="true"
																></i>
															</button>
														</div>
														<input
															classNameName="form-control"
															type="number"
															name="quantity1"
															value="0"
														/>
														<div classNameName="input-group-button">
															<button
																type="button"
																classNameName="button"
																data-quantity="plus"
																data-field="quantity1"
															>
																<i
																	classNameName="fa fa-plus"
																	aria-hidden="true"
																></i>
															</button>
														</div>
													</div>
												</td>
												<td data-title="Total">
													<span className="amount">
														<bdi>
															<span>$</span>60.00
														</bdi>
													</span>
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
														<Image
															loading="lazy"
															src={cartThumb1_2}
															alt="Image"
														/>
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

												<td classNameName="product_quantity">
													<div classNameName="plus-minus-input">
														<div classNameName="input-group-button">
															<button
																type="button"
																classNameName="button"
																data-quantity="minus"
																data-field="quantity1"
															>
																<i
																	classNameName="fa fa-minus"
																	aria-hidden="true"
																></i>
															</button>
														</div>
														<input
															classNameName="form-control"
															type="number"
															name="quantity1"
															value="0"
														/>
														<div classNameName="input-group-button">
															<button
																type="button"
																classNameName="button"
																data-quantity="plus"
																data-field="quantity1"
															>
																<i
																	classNameName="fa fa-plus"
																	aria-hidden="true"
																></i>
															</button>
														</div>
													</div>
												</td>
												<td data-title="Total">
													<span className="amount">
														<bdi>
															<span>$</span>60.00
														</bdi>
													</span>
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
							</div>
							<div classNameName="coupon-inner">
								<div classNameName="coupon-left">
									<h4>Coupon:</h4>
									<div classNameName="coupon-input">
										<input
											classNameName="mb-2"
											placeholder="Coupon code"
											type="text"
										/>
										<button type="submit" classNameName="theme-btn style6">
											Apply coupon
										</button>
									</div>
								</div>
								<div classNameName="coupon-right">
									<div classNameName="cart_submit">
										<button classNameName="theme-btn style6" type="submit">
											update cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div classNameName="cart-checkout-wrapper">
						<div
							classNameName="coupon_code right"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<h3>Subtotal</h3>
							<div classNameName="coupon_inner">
								<div classNameName="cart-subtotal">
									<p>Subtotal</p>
									<p classNameName="cart_amount">$999.00</p>
								</div>
								<div classNameName="cart_subtotal">
									<p>Shipping Address</p>
									<p classNameName="cart-location pt-2">
										2801 Lafayette Blvd, Norfolk, Vermont <br />
										23509, united state
									</p>
								</div>

								<div classNameName="cart-subtotal">
									<p>Total</p>
									<p classNameName="cart_amount">$999.00</p>
								</div>
								<div classNameName="checkout-btn">
									<a href="checkout.html" classNameName="theme-btn style6">
										Proceed to Checkout
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- cart ended --> */}
			<Partials />
		</>
	);
}
