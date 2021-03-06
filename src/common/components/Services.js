import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Prototypes/MVPs</h3>

      	  	<p>I can build you a prototype or a minimal viable product (MVP)for your idea. An MVP can validate your idea and help you raise funding.
      	  	</p>

      	  	<p>The code I deliver will be the best possible foundations from which your application and idea can grow.</p>

	      </div>

	      <div className="services">

      	  	<h3>Enterprise Web Apps</h3>

      	  	<p>Whether you are a Start-up or Bluechip company, I can help you build you a production ready web application.
      	  	</p>

      	  	<p>The web application will be built with the best technologies and will be scalable, secure and maintainable.</p>

	      </div>

      </div>
    );
  }
}

export default Services;
