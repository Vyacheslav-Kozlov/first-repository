import React from "react";
import playStoreButton from '../media/PlayStoreButton.png';
import iStoreButton from '../media/iStoreButton.png';
import SvgGenerator from "./SvgGenerator";

const LowerMiddleContent = () => {
  return (
    <div className="container pt-5 pb-5 position-relatives">

      <div className="row row-cols-1 row-cols-xl-2 pb-5">
        <div className="col text-center mb-5 mb-xl-0 ">
          <SvgGenerator
            className="col-6 col-md-4 col-lg-3 col-xl-5 h-auto"
            id="phoneLarge"
          />
          <SvgGenerator
            className="col-6 col-md-4 col-lg-3 col-xl-5 h-auto"
            id="phoneSmall"
          />
        </div>

        <div className="col m-auto pb-5 pb-xl-0">
          <p className="fs-1">Now Available</p>
          <p className="col col-lg-8 col-xl-10 text-muted lh-lg">
            Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quam vehicula elementum
            sed sit ametsuada.
          </p>
          <div className="col-6 col-sm-12 mt-5">
            <img src={playStoreButton} alt="Button PlayStore"/>
            <img className="mx-0 my-2 my-sm-0 my mx-sm-3" src={iStoreButton} alt="Button iStore"/>
          </div>
        </div>
      </div>

      <button
        style={{left: '50%', transform: 'translate(-50%, -50%)'}}
        className="btn btn-lg py-2 py-sm-4 custom-color-bg mt-5
        row col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 position-absolute"
      >
        GET THE APP TODAY
      </button>

    </div>
  )
}

export default LowerMiddleContent;