import React,{Component} from "react";
import {Link} from "react-router-dom";


class providerS extends Component{

    constructor(props) {
        super(props);
        this.state={
            boo:true
        }

        if(this.props.asSt==='0x758ae668a44cc04dc741f0e2543344f55042e19bf615cd03f2adadbafa3e24e2') {
            this.state.boo = false
            console.log(this.state.boo)
        }
    }


    render() {
        return(
            <div>
                <section className="menu cid-qTkzRZLJNu" nonce="menu" id="menu1-3">

                    <nav
                        className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger"/>
                        </button>
                        <div className="menu-logo">
                            <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="#m">
                         <img
                             src="assets/images/kisspng-blockchain-vector-graphics-computer-icons-illustra-flvr-calculator-chasing-coins-5bf69839402611.9278574715428874812628-220x220.png"
                             alt="KeyBlock" title="" style={{height: '3.8rem'}}/>
                    </a>
                </span>
                                <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-7">KeyBlock<br/></a></span>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <div className="navbar-buttons mbr-section-btn"><a
                                className="btn btn-sm btn-success display-7" href="#"><span
                                className="mbri-sites mbr-iconfont mbr-iconfont-btn"/>
                                {console.log("HEY",this.props.asSt)}
                                {this.state.boo?this.props.asSt:'Master Account'}
                            </a></div>
                        </div>
                    </nav>
                </section>

                <section className="engine"><a href="#">website templates</a></section>
                <section className="engine"><a href="https://mobirise.info/d">web maker</a></section>
                <section className="header5 cid-rYUnBghKhZ mbr-fullscreen" id="header5-m">


                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="mbr-white col-md-10">
                                <h1 className="mbr-section-title align-center pb-3 mbr-fonts-style display-1"><em>SELECT
                                    ID PROVIDER</em></h1>
                                <p className="mbr-text align-center display-5 pb-3 mbr-fonts-style"><em>Following are
                                    the &nbsp;identity providers working with us. Choose one of the following ID
                                    providers through which you want to authenticate youself.</em></p>
                                {!this.state.boo?
                                <div className="mbr-section-btn align-center"><a
                                    className="btn btn-md btn-white-outline display-4"
                                    to={'/verified'}>Bank</a> <a
                                    className="btn btn-md btn-white-outline display-4"
                                    to={'/verified'}>UIDAI</a> <a
                                    className="btn btn-md btn-white-outline display-4"
                                    to={'/verified'}>ECI<br/></a> <a
                                    className="btn btn-md btn-white-outline display-4"
                                    to={'/verified'}>keySecure</a></div>:
                                    <div className="mbr-section-btn align-center"><button
                                        className="btn btn-md btn-white-outline display-4"
                                        href="#" disabled>Bank</button> <button
                                        className="btn btn-md btn-white-outline display-4"
                                        href="#" disabled>UIDAI</button> <button
                                        className="btn btn-md btn-white-outline display-4"
                                        href="#" disabled>ECI<br/></button> <Link
                                        className="btn btn-md btn-white-outline display-4"
                                        to={'/verified'}>keySecure</Link></div>

                                }
                            </div>
                        </div>
                    </div>

                </section>

                <section nonce="footers" className="cid-rYL9zWHCpP" id="footer6-d">


                    <div className="container">
                        <div className="media-container-row align-center mbr-white">
                            <div className="col-12">
                                <p className="mbr-text mb-0 mbr-fonts-style display-7">
                                    © Copyright 2020 KeyBlock- All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/web/assets/jquery/jquery.min.js"/>
                <script src="assets/popper/popper.min.js"/>
                <script src="assets/bootstrap/js/bootstrap.min.js"/>
                <script src="assets/tether/tether.min.js"/>
                <script src="assets/smoothscroll/smooth-scroll.js"/>
                <script src="assets/dropdown/js/nav-dropdown.js"/>
                <script src="assets/dropdown/js/navbar-dropdown.js"/>
                <script src="assets/touchswipe/jquery.touch-swipe.min.js"/>
                <script src="assets/theme/js/script.js"/>
            </div>





        )
    }

}

export default providerS;