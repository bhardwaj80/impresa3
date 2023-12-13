import React from 'react'
import { Link } from 'react-router-dom';

const CommanBanner = (props) => {
    return (
        <div className="slidearea bannerside">
            <div className="side-contact-info">
                <ul>
                    <li><i className="fas fa-phone-alt"></i> +919988227050  +919015170299</li>
                    <li><i className="fas fa-envelope"></i>   info@impresabuildtech.com</li>
                </ul>
            </div>
            <div className="dz-bnr-inr style-1 overlay-left"
                style={{ backgroundImage: `url(${props.bgImage})` }}
            >
                <div className="container-fluid">
                    <div className="dz-bnr-inr-entry">
                        <h1 style={{fontSize:"60px"}}>{props.mainTitle}</h1>
                     {
                        props.showPlush ? "":   <nav  className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>{props.parentTitle}</Link></li>
                            <li className="breadcrumb-item">{props.pageName}</li>
                        </ul>
                    </nav>
                     }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommanBanner