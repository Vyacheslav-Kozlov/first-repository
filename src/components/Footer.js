import React from "react";
import SvgGenerator from "./SvgGenerator";

const Footer = () => {
    return (
        <div className="border-top custom-color-bg-header">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 justify-content-between pt-4 pb-4">
                    <p className="col text-white text-center text-sm-start">&reg;2018 - {new Date().getFullYear()},All Right Reserved</p>
                    <div className="col-10 col-sm-5 col-md-4 col-xl-3 mx-auto mx-sm-0 d-flex justify-content-between">
                        <SvgGenerator id="iconFacebook"/>
                        <SvgGenerator id="iconTwitter"/>
                        <SvgGenerator id="iconDribble"/>
                        <SvgGenerator id="iconGoogle"/>
                        <SvgGenerator id="iconYoutube"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;