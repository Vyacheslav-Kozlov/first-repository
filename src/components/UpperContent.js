import React from "react";
import SvgGenerator from "./SvgGenerator";

const UpperContent = () => {
    return (
        <div class="container pt-5">
            <div className="row my-md-5">
                <div className="col-md-7 col-xl-6 pb-5 pb-md-0">
                    <div className="col-10 col-lg-10 col-xxl-8 mx-auto text-white">
                        <p className="fs-1 mt-5 mb-3 text-start">Choose a better way to represent your app</p>
                        <p className="lh-lg text-start my-5">
                            Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Curabitur aliquet quam id dui posu
                        </p>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-sm w-100 fw-bolder custom-color-bg">Download free today
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-light btn-sm w-100 fw-bolder">Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 col-xl-6 text-center">
                    <SvgGenerator className="col-5 col-md-12 col-lg-10 col-xl-6 h-auto" id="phoneLarge"/>
                </div>
            </div>
        </div>
    )
}

export default UpperContent;