import React,{Component} from "react";
import './assets/images/xyzxyz-logo.svg'
import "./assets/images/1603724.jpg"




class finalVerification extends Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div>

                <section className="menu cid-rYRn5v2pnT  " nonce="menu" id="menu2-g" >


                    <nav
                        className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="menu-logo">
                            <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="#">
                       XYZ
                    </a>
                </span>

                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                                <li className="nav-item">
                                    <a className="nav-link link text-black display-7" href="#">
                                        XYZ.org</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-black display-7" href="#">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar-buttons mbr-section-btn">
                                <a className="btn btn-sm btn-primary display-7" href="tel:+1-234-567-8901">
                    <span className="btn-icon mbri-mobile mbr-iconfont mbr-iconfont-btn">
                    </span>
                                    print receipt
                                </a>
                            </div>
                        </div>
                    </nav>
                </section>

                <div className="container pt-4 mt-2">
                    <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-3">
                    <br/>Verification Completed</h2>
                    <h3 className="mbr-section-subtitle pb-5 align-center mbr-fonts-style display-6">
                        verification completed. use your secret hash for further communication.
                    </h3>
                    <h2>{this.props.keyHashtoUserHash}</h2>
                    <h1>{this.props.userArr.name}</h1>
                    <h1>{this.props.userArr.email}</h1>
                    <h1>{this.props.userArr.phone}</h1>
                    <h1>{this.props.userArr.additionalDetails}</h1>

                </div>


                <script src="assets/web/assets/jquery/jquery.min.js"/>
                <script src="assets/popper/popper.min.js"/>
                <script src="assets/bootstrap/js/bootstrap.min.js"/>
                <script src="assets/tether/tether.min.js"/>
                <script src="assets/smoothscroll/smooth-scroll.js"/>
                <script src="assets/dropdown/js/nav-dropdown.js"/>
                <script src="assets/dropdown/js/navbar-dropdown.js"/>
                <script src="assets/touchswipe/jquery.touch-swipe.min.js"/>
                <script src="assets/parallax/jarallax.min.js"/>
                <script src="assets/theme/js/script.js"/>

            </div>




        )
    }


}
export default finalVerification;