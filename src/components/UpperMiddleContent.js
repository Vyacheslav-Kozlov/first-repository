import React from "react";
import SvgGenerator from "./SvgGenerator";

const UpperMiddleContent = () => {
    return (
        <div className="container mt-5 mb-5">

            <div className="row col-10 col-sm-8 col-md-6 col-xl-4 m-auto pt-5">
                <p className="fs-2 text-center mt-5 pt-5 pb-5">Everything needed to power your app brend
                    online</p>
                <hr className="col-3 m-auto custom-color-bg" size="6"/>
            </div>

            <div className="row row-cols-2 row-cols-md-4 mt-5">
                <div className="col">
                    <div className="mt-4 mb-4 pt-3 pb-3 shadow-sm">
                        <SvgGenerator id="iconOne"/>
                        <p className="mt-5 fw-bold text-center">Modern Flat Design</p>
                        <p className="col col-sm-10 m-auto text-muted text-center">
                            Cras ultricies ligula sed magna dictum porta.
                            Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo.
                        </p>
                    </div>
                </div>

                <div className="col text-center">
                    <div className="mt-4 mb-4 pt-3 pb-3 shadow-sm">
                        <SvgGenerator id="iconTwo"/>
                        <p className="mt-5 fw-bold text-center">First 7 Days Free</p>
                        <p className="col col-sm-10 m-auto text-muted text-center">
                            Cras ultricies ligula sed magna dictum porta.
                            Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo.
                        </p>
                    </div>
                </div>

                <div className="col text-center">
                    <div className="mt-4 mb-4 pt-3 pb-3 shadow-sm">
                        <SvgGenerator id="iconThree"/>
                        <p className="mt-5 fw-bold text-center">Fully Support</p>
                        <p className="col col-sm-10 m-auto text-muted text-center">
                            Cras ultricies ligula sed magna dictum porta.
                            Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo.
                        </p>
                    </div>
                </div>

                <div className="col text-center">
                    <div className="mt-4 mb-4 pt-3 pb-3 shadow-sm">
                        <SvgGenerator id="iconFour"/>
                        <p className="mt-5 fw-bold text-center">User Friendly</p>
                        <p className="col col-sm-10 m-auto text-muted text-center">
                            Cras ultricies ligula sed magna dictum porta.
                            Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpperMiddleContent;