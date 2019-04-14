import React, { Component } from "react";
import "./../Styles/HomePage.css";
import rotate1 from "../Images/rotate-logo_1.svg";
import rotate2 from "../Images/rotate-logo_2.svg";
import rotate3 from "../Images/rotate-logo_3.svg";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="col-xs-12 no-horizantal home-page">
                <div className="background"></div>
                <div className="bg-animation"></div>
                <h1 className="col-xs-12 text-center page-title">
                    Pay only for what you use
                </h1>
                <p className="col-xs-12 text-center go-to-dashboard"><Link to="/dashboard">Dashboard</Link></p>
                <div className="col-xs-12 main-video text-center">
                    <p>an introduction</p>
                    <span className="video-animate" data-toggle="modal" data-target="#myModal">
                        <img className="first-image" src={rotate1} alt="circle" />
                        <img className="second-image" src={rotate2} alt="circle" />
                        <img className="third-image" src={rotate3} alt="circle" />
                        <i className="fa fa-play" aria-hidden="true"></i>

                    </span>
                </div>


            </div>
        )
    }
}

export default Home;