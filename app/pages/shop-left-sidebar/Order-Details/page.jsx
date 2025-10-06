import Partials from "../../../components/Partials";

export default function OrderDetails() {
	return (
		<>
			{/* <!-- order details one started --> */}
			<div className="dashboard-section section-padding fix">
				<div className="container">
					<div className="grid gap-6 xl:grid-cols-4">
						<div className="dashboard-navigation-sidebar">
							<h3>Navigation</h3>
							<div>
								<div className="flex-col flex nav-pills" role="tablist">
									<a
										className="nav-link"
										type="button"
										role="tab"
										href="dashboard.html"
									>
										<i className="fa-sharp fa-solid fa-grid-2"></i>Dashboard
									</a>

									<a
										href="order-history.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-sync"></i>Order History
									</a>

									<a
										href="order-details-one.html"
										className="nav-link active"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-list"></i>Order Details
									</a>

									<a
										href="wishlist.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-light fa-heart"></i>Wishlist
									</a>

									<a
										href="settings.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-regular fa-gear"></i>Settings
									</a>

									<button className="nav-link" type="button" role="tab">
										<i className="fa-solid fa-sign-out-alt"></i>Log Out
									</button>
								</div>
							</div>
						</div>
						<div className="xl:col-span-3">
							<div className="tab-content">
								<div role="tabpanel" tabindex="0">
									<div className="order-details">
										<div className="header">
											<h2>
												Order Details
												<span>• April 24, 2021 • 3 Products</span>
											</h2>
											<a href="#" className="back-to-list">
												Back to List
											</a>
										</div>
										<div className="details-wrapper">
											<div className="address-section">
												<div className="box">
													<h4>Billing Address</h4>
													<div className="content">
														<h5>Dainne Russell</h5>
														<p>4140 Parker Rd. Allentown, New Mexico 31134</p>
														<p>
															Email:
															<a href="mailto:dainne.russell@gmail.com">
																dainne.russell@gmail.com
															</a>
														</p>
														<p>
															Phone:
															<a href="tel:435346543r">(671) 555–0110</a>
														</p>
													</div>
												</div>
												<div className="box">
													<h4>Shipping Address</h4>
													<div className="content">
														<h5>Dainne Russell</h5>
														<p>4140 Parker Rd. Allentown, New Mexico 31134</p>
														<p>
															Email:
															<a href="mailto:dainne.russell@gmail.com">
																dainne.russell@gmail.com
															</a>
														</p>
														<p>
															Phone:
															<a href="tel:435346543r">(671) 555–0110</a>
														</p>
													</div>
												</div>
											</div>
											<div className="summary-section">
												<h5>Order Summary</h5>
												<p>
													<strong>Order ID:</strong> #4152
												</p>
												<p>
													<strong>Payment Method:</strong> Paypal
												</p>
												<p>
													<strong>Subtotal:</strong> $365.00
												</p>
												<p>
													<strong>Discount:</strong> 20%
												</p>
												<p>
													<strong>Shipping:</strong> Free
												</p>
												<p>
													<strong>Total:</strong>
													<span className="total-amount">$84.00</span>
												</p>
											</div>
										</div>
										<div className="progress-bar">
											<div className="step completed">
												<span className="circle">
													<i className="fa-solid fa-check"></i>
												</span>
												<span className="text color-2">Order Received</span>
											</div>
											<div className="step active">
												<span className="circle">02</span>
												<span className="text color-2">Processing</span>
											</div>
											<div className="step">
												<span className="circle">03</span>
												<span className="text">On the Way</span>
											</div>
											<div className="step">
												<span className="circle">04</span>
												<span className="text">Delivered</span>
											</div>
										</div>
										<div className="product-table">
											<table>
												<thead>
													<tr>
														<th>PRODUCT</th>
														<th>PRICE</th>
														<th>QUANTITY</th>
														<th>SUBTOTAL</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="flex items-center flex-wrap lg:flex-nowrap">
																<img
																	loading="lazy"
																	src="assets/images/dashboard/dashboard-order-product1.png"
																	alt="Product"
																/>
																<span className="text-text capitalize">
																	High-Neck puff jacket
																</span>
															</div>
														</td>
														<td>$14.00</td>
														<td>x5</td>
														<td>$70.00</td>
													</tr>
													<tr>
														<td>
															<div className="flex items-center flex-wrap lg:flex-nowrap">
																<img
																	loading="lazy"
																	src="assets/images/dashboard/dashboard-order-product2.png"
																	alt="Product"
																/>
																<span className="text-text capitalize">
																	flowy dress that often
																</span>
															</div>
														</td>
														<td>$14.00</td>
														<td>x2</td>
														<td>$28.00</td>
													</tr>
													<tr>
														<td>
															<div className="flex items-center flex-wrap lg:flex-nowrap">
																<img
																	loading="lazy"
																	src="assets/images/dashboard/dashboard-order-product3.png"
																	alt="Product"
																/>
																<span className="text-text capitalize">
																	close-fitting dress
																</span>
															</div>
														</td>
														<td>$26.70</td>
														<td>x10</td>
														<td>$267.00</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- order details one ended --> */}
			<Partials />
		</>
	);
}
