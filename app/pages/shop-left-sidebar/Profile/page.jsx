import Image from "next/image";
import Partials from "../../../components/Partials";
import profileThumb from "../../../../public/assets/images/dashboard/dashboard-profileThumb.jpg";

export default function Profile() {
	return (
		<>
			{/* <!-- dashboard started --> */}
			<div className="dashboard-section section-padding fix">
				<div className="container">
					<div className="grid xl:grid-cols-4 gap-6">
						<div className="dashboard-navigation-sidebar">
							<h3>Navigation</h3>
							<div>
								<div
									className="flex flex-col nav-pills"
									id="v-pills-tab"
									role="tablist"
								>
									<a
										className="nav-link active"
										id="v-pills-dashboard-tab"
										type="button"
										role="tab"
										href="dashboard.html"
									>
										<i className="fa-sharp fa-solid fa-grid-2"></i>Dashboard
									</a>

									<a
										className="nav-link"
										id="v-pills-order-history-tab"
										type="button"
										role="tab"
										href="order-history.html"
									>
										<i className="fa-solid fa-sync"></i>Order History
									</a>

									<a
										className="nav-link"
										id="v-pills-order-details-tab"
										type="button"
										role="tab"
										href="order-details-one.html"
									>
										<i className="fa-solid fa-list"></i>Order Details
									</a>

									<a
										className="nav-link"
										id="v-pills-wishlist-tab"
										type="button"
										role="tab"
										href="wishlist.html"
									>
										<i className="fa-light fa-heart"></i>Wishlist
									</a>

									<a
										className="nav-link"
										id="v-pills-settings-tab"
										type="button"
										role="tab"
										href="settings.html"
									>
										<i className="fa-regular fa-gear"></i>Settings
									</a>

									<button
										className="nav-link"
										id="v-pills-logout-tab"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-sign-out-alt"></i>Log Out
									</button>
								</div>
							</div>
						</div>
						<div className="xl:col-span-3 xl:mt-0 mt-6">
							<div className="tab-content" id="v-pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="v-pills-dashboard"
									role="tabpanel"
								>
									<div className="dashboard-wrapper">
										<div className="dashboard-top">
											<div className="grid md:grid-cols-2 xl:grid-cols-12 gap-6">
												<div className="col-xl-7 xl:col-span-7">
													<div className="dashboard-profile">
														<div className="thumb">
															<Image
																loading="lazy"
																src={profileThumb}
																alt="thumb"
															/>
														</div>
														<h3>Dianne Russell</h3>
														<p>Customer</p>
														<a href="#">Edit Profile</a>
													</div>
												</div>
												<div className="xl:col-span-5 mt-6 md:mt-0">
													<div className="dashboard-profile-info">
														<h6>Billing Address</h6>
														<h5>Dainne Russell</h5>
														<a href="#" className="address">
															4140 Parker Rd. Allentown, New Mexico 31134
														</a>
														<a href="mailto:abcd@gmail.com" className="email">
															dainne.ressell@gmail.com
														</a>
														<a href="tel:234343423" className="phone">
															(671) 555-0110
														</a>
														<button className="edit">Edit Address</button>
													</div>
												</div>
											</div>
										</div>
										<div className="order-history">
											<div className="header">
												<h2>Recent Order History</h2>
												<a href="order-history.html" className="view-all">
													View All
												</a>
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
														<td>#738</td>
														<td>8 Sep, 2024</td>
														<td>$135.00 (5 Products)</td>
														<td>
															<span className="status processing">
																Processing
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
													<tr>
														<td>#703</td>
														<td>24 May, 2024</td>
														<td>$25.00 (1 Product)</td>
														<td>
															<span className="status on-the-way">
																On the way
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
													<tr>
														<td>#130</td>
														<td>22 Oct, 2024</td>
														<td>$250.00 (4 Products)</td>
														<td>
															<span className="status completed">
																Completed
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
													<tr>
														<td>#561</td>
														<td>1 Feb, 2024</td>
														<td>$35.00 (1 Product)</td>
														<td>
															<span className="status completed">
																Completed
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
													<tr>
														<td>#536</td>
														<td>21 Sep, 2024</td>
														<td>$578.00 (13 Products)</td>
														<td>
															<span className="status completed">
																Completed
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
													<tr>
														<td>#492</td>
														<td>22 Oct, 2024</td>
														<td>$345.00 (7 Products)</td>
														<td>
															<span className="status completed">
																Completed
															</span>
															<a href="#">View Details</a>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>

								<div
									className="tab-pane fade"
									id="v-pills-logout"
									role="tabpanel"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- dashboard ended --> */}

			<Partials />
		</>
	);
}
