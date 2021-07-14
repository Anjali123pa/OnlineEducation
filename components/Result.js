import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Result extends Component{
    render() {
        return (
    <div className="div-btn">
                     <div className="mb-3 row">
                       <label htmlFor="score" className="col-sm-4 col-form-label">
                        Score
                      </label>
                    </div>
                    </div>

        );
    }

}