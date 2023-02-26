import React from 'react'
import Layout from '../components/layout'

const Driver = () => {
  return (
    <div>
      <Layout>
        <main>
          <div className="head-title">
				
			</div>
			<ul>
				<li>
				<link to="/Driver"></link>
				 </li>
			</ul>
			<ul>
				<li>
				<link to="/Rider"></link>
				 </li>
			</ul>
			<ul>
				<li>
				<link to="/Routes"></link>
				 </li>
			</ul>
			<ul>
				<li>
				<link to="/Fares"></link>
				 </li>
			</ul>
			<ul>
				<li>
				<link to="/Receipt"></link>
				 </li>
			</ul>

			<ul className="box-info">
				
				
			</ul>
        <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Registered Drivers</h3>
						
					</div>
					<table>
						<thead>
							<tr>
								<th>DRIVER</th>
								<th>Vehicle No </th>
								<th>Phone no</th>
								<th>Allocated Route</th>
								<th>license no</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png" />
									<p>Muhammad sami </p>
								</td>
								<td>ARZ-1001</td>
								<td>0332100000</td>
								<td>Route 3</td>
								<td>12345</td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png" />
									<p>Muhammad umair </p>
								</td>
								<td>ABD-6565</td>
								<td>03211000000</td>
								<td>Route 2</td>
								<td>12345</td>
							</tr>
							
							<tr>
								<td>
									<img src="img/people.png" />
									<p> M Hassaan Shafique</p>
								</td>
								<td>GFD-2873</td>
								<td>0325111111</td>
								<td>Route 6</td>
								<td>12345</td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png" />
									<p> M Hassaan Shafique</p>
								</td>
								<td>XSA-1231</td>
								<td>0325111111</td>
								<td>Route 5</td>
								<td>12345</td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png" />
									<p> M Hassaan Shafique</p>
								</td>
								<td>AVQ-1993</td>
								<td>0325111111</td>
								<td>Route 4</td>
								<td>12345</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		    </main>
      </Layout>
    </div>
  )
}

export default Driver
