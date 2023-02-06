import React from 'react'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'

const Rider = () => {
  return (
    <div>
     <Layout>
        <main>
          <div class="head-title">
				
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

			<ul class="box-info">
				
				
			</ul>
        <div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Registered Students</h3>
						
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png" />
									<p>Sami pepsi</p>
								</td>
								<td>01-10-2022</td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png" />
									<p>Hassaan</p>
								</td>
								<td>01-10-2022</td>
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

export default Rider
