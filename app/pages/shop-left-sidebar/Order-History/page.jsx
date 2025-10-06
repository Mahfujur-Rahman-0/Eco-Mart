import Partials from "@/app/components/Partials";

export default function OrderHistory() {
	return (
		<>
			{/* <!-- order details started --> */}
			<div className="dashboard-section section-padding fix">
				<div className="container">
					<div className="grid gap-6 xl:grid-cols-4">
						<div className="dashboard-navigation-sidebar">
							<h3>Navigation</h3>
							<div>
								<div className="flex flex-col nav-pills" role="tablist">
									<a
										href="dashboard.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-sharp fa-solid fa-grid-2"></i>Dashboard
									</a>

									<a
										href="order-history.html"
										className="nav-link active"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-sync"></i>Order History
									</a>

									<a
										href="order-details-one.html"
										className="nav-link"
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
									<div className="order-history2">
										<div className="header">
											<h2>Order History</h2>
										</div>
										<table>
											<thead>
												<tr>
													<th>ORDER ID</th>
													<th>DATE</th>
													<th>TOTAL</th>
													<th>STATUS</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#3933</td>
													<td>4 April, 2024</td>
													<td>$135.00 (5 Products)</td>
													<td>
														<span className="status processing">
															Processing
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5045</td>
													<td>27 Mar, 2024</td>
													<td>$25.00 (1 Product)</td>
													<td>
														<span className="status on-the-way">
															On the way
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5028</td>
													<td>20 Mar, 2024</td>
													<td>$250.00 (4 Products)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#4600</td>
													<td>19 Mar, 2024</td>
													<td>$35.00 (1 Product)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#3933</td>
													<td>4 April, 2024</td>
													<td>$135.00 (5 Products)</td>
													<td>
														<span className="status processing">
															Processing
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5045</td>
													<td>27 Mar, 2024</td>
													<td>$25.00 (1 Product)</td>
													<td>
														<span className="status on-the-way">
															On the way
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5028</td>
													<td>20 Mar, 2024</td>
													<td>$250.00 (4 Products)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#4600</td>
													<td>19 Mar, 2024</td>
													<td>$35.00 (1 Product)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#3933</td>
													<td>4 April, 2024</td>
													<td>$135.00 (5 Products)</td>
													<td>
														<span className="status processing">
															Processing
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5045</td>
													<td>27 Mar, 2024</td>
													<td>$25.00 (1 Product)</td>
													<td>
														<span className="status on-the-way">
															On the way
														</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#5028</td>
													<td>20 Mar, 2024</td>
													<td>$250.00 (4 Products)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>
												<tr>
													<td>#4600</td>
													<td>19 Mar, 2024</td>
													<td>$35.00 (1 Product)</td>
													<td>
														<span className="status completed">Completed</span>
														<a href="#">View Details</a>
													</td>
												</tr>

												{/* <!-- Add more rows as necessary --> */}
											</tbody>
										</table>
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
						</div>
					</div>
				</div>
			</div>
			{/* <!-- order details ended --> */}
			<Partials />
		</>
	);
}
