import React,{Component} from "react";
import {Link} from "react-router-dom";

class logiN extends Component{


    constructor(props) {
        const lastLL = '';
        super(props);
        this.state={
            boooL:true,
            add:["0x6A588888c348F17148Cb2B4B61004397251F7695",
                "0x90F7Ad7C22B4f9e2faf5cd8FfEF29dFcE1168FcF",
                "0xa065e37c9Fcb35370e549D8ab3a60f7cF37923e9",
                "0x6E6BAaefe8eC496e76B22a9cf163E738981c0f1C",
                "0x2D8B1A002cd2817313F38F0A1ac23Fb0A61339D6",
                "0x8D7ACf6963F8e48f31234289B75c4EA3B45da1Bd",
                "0xc5E7D77925Dd4d7485a1b24c0f9F131672b8a977",
                "0x636a427AF19E42FF0FB341f6ae53bfBc308EaB05",
                "0xFcD4A4A13D33efe9749b79Ef68Ed2E1C6923A6A0",
                "0x3073Abc5Ed58b75D9B9Ca6B22DC3AecbB75da38D"],
            key:["d00aa08cf5f2d3216b7ea2c3020a7855ab84ed75451c23ed05ff3a8c0aa42996",
                "f6c76a50c1031669fc56ddc245a77dab74dfb944d5727241b874d16eff132922",
                "bd3acd5194c24a503cd810bbdf6a2b8aa841c6dcf807a94033ed3a795247f14a",
                "223861927894b1ea12f720cf21af386d7c860e8451dbfceda50f42153d87f86d",
                "ca6ba20fca727d54343ec908b0667bc747ea9fb871eb93af5c1006e86fa83cbb",
                "54775783e0a1798c1cc1d5163695289c429792e137c24715cd655c711b078fd0",
                "2b8a2b35ee58f649b53ab9d9b1cf1ddc7a376617649ff2cb8872a46ec5765a6c",
                "72b12b46f9c9ae2ed432122b0eafa06d4e4bab57161d96533328ae164bdbdfd0",
                "198b634082a9be3c9f5dab4a2d78d46c183e555b29473fd187ce96dea8ea1550",
                "850e457d2c0457d0433dda6ad0eb8042a20ffa792b840d5796cd36655171026f"],
            hash:['0x758ae668a44cc04dc741f0e2543344f55042e19bf615cd03f2adadbafa3e24e2',
                '0xad13171b4e74d421a3c8fb2879fce51290d38fdb15dd41fd61262c4bf44ca7e5',
                '0xb400744230e12278408a1ceb0723783cd9cbdc999928dbce3f5dcef86a8b7756',
                '0x687c53a2dac2640d098ef709049b0bdd9cf5fef8e6e52bd83ce498cc36fa41f3',
                '0x16f19b9dfeddb690f7ef353e60813258583c344572eeb591d4a420a8e9c1175d',
                '0xbfc35268bc9e759c7d9dd5550c80aea6fc1cb5aa32b6d9fc24e237a6f23125f7',
                '0x5a89ec09aca17fcb00c8854aff57d8a96eae4f862139213d0935f841d0981700'],

            lastLL:''
        }
// this.setState({lastLL:lastLL})
    }


    render() {
        return(
            <div>
                <section className="menu cid-qTkzRZLJNu" nonce="menu" id="menu1-a">


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
                    <a href="#">
                         <img
                             src="assets/images/kisspng-blockchain-vector-graphics-computer-icons-illustra-flvr-calculator-chasing-coins-5bf69839402611.9278574715428874812628-220x220.png"
                             alt="Mobirise" title="" style={{height: "3.8rem"}}/>
                    </a>
                </span>
                                <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-7"
                                                                         href="#">KeyBlock<br/></a></span>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                                <li className="nav-item">
                                    <a className="nav-link link text-white display-7" >
                                        <span className=""/>
                                        <span className="mbri-home mbr-iconfont mbr-iconfont-btn"/>
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-white display-7" >
                                        <span className="mbri-search mbr-iconfont mbr-iconfont-btn"/>
                                        About Us
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar-buttons mbr-section-btn">
                                <a className="btn btn-sm btn-success display-4">
                                    <span className="mbri-sites mbr-iconfont mbr-iconfont-btn"/>
                                    Try It Now!
                                </a></div>
                        </div>
                    </nav>
                </section>

                <section className="engine"><a href="#">make a website</a></section>


                <section className="mbr-section form3 cid-rYL8CxVVbu" id="form3-c">


                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="title col-12 col-lg-8">
                                <h2 className="align-center pb-2 mbr-fonts-style display-2">LOGIN</h2>
                                <h3 className="mbr-section-subtitle align-center pb-5 mbr-light mbr-fonts-style display-5">
                                    Please Provide the account hash provided to you during the account setup
                                    process
                                </h3>

                            </div>
                        </div>

                        <div className="row py-2 justify-content-center">
                            <div className="col-12 col-lg-6  col-md-8 " data-form-type="formoid">

                                <form action="#" className="mbr-form form-with-styler"
                                     onSubmit={(e=>{

                                         e.preventDefault()
                                         this.state.lastLL=this.email.value
                                         this.props.asS(this.state.lastLL)
                                       //  this.setState({lastLL:this.email.value})
                                            console.log(this.props.asSt)
                                         // if(this.props.keyHashtoUserHashMapping)

                                     })}
                                      ><input type="hidden" name="HashVal"/>
                                    <div className="row">

                                    </div>
                                    <div className="dragArea row">
                                        <div className="form-group col" data-for="email">
                                            <input type="name" name="email"
                                                   ref={(input)=>{
                                                        this.email=input;
                                                   }}
                                                   placeholder="Hash. . . . . . . . . . . . . "
                                                   required="required"
                                                   className="form-control display-7" id="email-form3-c"/>
                                        </div>
                                        <div className="col-auto input-group-btn">
                                            {}
                                            <Link to={'/provider'} type="submit" onClick={(e=>{
                                                console.log("Link")
                                                // console.log(this.props.asSt)
                                            })} className="btn  btn-success display-4">SUBMIT</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mbr-section info2 cid-rYLdfET08F" id="info2-e">
                <div className="container">
                        <div className="row main justify-content-center">
                            <div className="media-container-column col-12 col-lg-3 col-md-4">
                                <div className="mbr-section-btn align-left py-4"><a
                                    className="btn btn-primary display-4" href="#">New User</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;</div>
                            </div>
                            <div className="media-container-column title col-12 col-lg-7 col-md-6">
                                <h2 className="align-right mbr-bold mbr-white pb-3 mbr-fonts-style display-2">NEW USER
                                    CREATION</h2>
                                <h3 className="mbr-section-subtitle align-right mbr-light mbr-white mbr-fonts-style display-5">Click
                                    the button to get started with our KeySecure Dapp</h3>
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
                <script src="assets/formoid/formoid.min.js"/>
            </div>
        )
    }
}

export default logiN;