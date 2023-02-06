import React from 'react'

const Sidebar = () => {
  return (
    <div>
	<section id="sidebar">
		<a href="/" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Rite Way</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="/rider">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Riders</span>
				</a>
			</li>
			<li>
				<a href="/driver">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">Drivers</span>
				</a>
			</li>
			<li>
				<a href="/app-route">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Routes</span>
				</a>
			</li>
			<li>
				<a href="/fares">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Fares</span>
				</a>
			</li>
			<li>
				<a href="/receipt">
					<i class='bx bxs-message-dots'></i>
					<span class="text">Receipts</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
    </div>
  )
}

export default Sidebar
