import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
            <div className="photo">
            </div>
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications.</h1>
    			<p>for <em>start-ups</em>, <em>bluechips</em>, and sometimes, <em>myself</em>. <a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em><b>*</b><b>*</b>React</em></li>
						<li><em>AngularJS</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>Highcharts</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
								<li><em>Java</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
            <li><em>Qunit</em></li>
            <li><em>JUnit</em></li>
						<li><em>Jasmine</em></li>
						<li><em>Karma</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
            <li><em>Heroku</em></li>
            <li><em>AWS</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/immortalstar7/portfolio">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="goldmans-logo">Auryc</li>
					<li className="orange-logo">Autodesk</li>
					<li className="tesco-logo">Adinath Offset</li>
					<li className="timeout-logo">GenapSys</li>
					<li className="wiley-logo">Signet Media</li>
				</ul>

			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;
