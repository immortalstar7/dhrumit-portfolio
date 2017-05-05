import React, { PropTypes, Component } from 'react';

export default class Repos extends Component {
  render () {
    return (
      <div>
        {/*this.props.results.map((repo, i) =>
          <div className="repo-item" key={i}>
            <a href={repo.html_url}>{repo.name}</a><br/>
            {repo.description}
          </div>
        )*/}
        <div className="repo-item" >
          <a href="https://github.com/immortalstar7/todo">todo App</a><br/>
          A simple todo app developed in ReactJS and Redux.
        </div>
        <div className="repo-item" >
          <a href="https://github.com/immortalstar7/homeautomation">Home Automation Panel</a><br/>
          <a href="https://immortalstar7.github.io/homeautomation/"><b>Demo link: </b></a>
          A JavaScript application simulating house automation: pressing a button on a control panel would visually turn on a light, change the temperature or close the curtains.
        </div>
        <div className="repo-item" >
          <a href="https://github.com/immortalstar7/BulletinBoardwithReactJS">Bulletin Board App</a><br/>
          A simple Bulletin Board App using React.JS components which implements basic CRUD operations on the Notes.
        </div>
        <div className="repo-item" >
          <a href="https://github.com/immortalstar7/sfmunitrans">SF Muni Transit</a><br/>
          <a href="http://sfmunitransit.herokuapp.com/"><b>Demo link </b></a>
           An app to visualize the real time positions of the SF Muni Transits by consuming nextBus Public XML Feed.
        </div>
        <div className="repo-item" >
          <a href="https://github.com/immortalstar7/EHR">SF Muni Transit</a><br/>
          Web-Application that allows the end user to view metrics about their physical Activities that display the data collected of the user with the wearable to visualize the data in the form of graphs and charts.
        </div>
        <div className="repo-item" >
        <a href="https://github.com/immortalstar7/datavisualizationwithBackbone">Data Visualization using BackboneJS</a><br/>
        <a href="https://immortalstar7.github.io/"><b>Demo link </b></a>
          Data visualization of Sales data using BackboneJS and Highcharts.
        </div>
        <div className="repo-item" >
        <a href="https://github.com/immortalstar7/LookUpApplicationAngular">Look Up Application</a><br/>
        <a href="http://lookup-application-angular.herokuapp.com/"><b>Demo</b></a>
          A Simple Look up application for any user using AngularJS.
        </div>
        <div className="repo-item" >
        <a href="https://github.com/immortalstar7/BulletinBoardwithReactJS">Stick Notes / Bulletin Board</a><br/>
        <a href="http://mybulletinboard.herokuapp.com/"><b>Demo link</b></a>
          A simple Bulletin Board App which will have stick notes on it.
        </div>

      </div>
    );
  }
}

Repos.propTypes = {
  results: PropTypes.array.isRequired
};
