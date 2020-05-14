import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3'
import Page1 from "./indexx";
import './css/bootstrap.min.css'
import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './images/background4.jpg'
import VerificationPage from "./verificationPage";
import SignUp from "./signUp"
import LogiN from "./logiN"
import thirdPV from "./thirdPartyV"
import providers from "./providerS";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {


    componentWillMount(){
        this.loadBlockChainData()
    }

    async loadBlockChainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const network = await web3.eth.net.getNetworkType()
        console.log("network:", network)
        const accounts = await web3.eth.getAccounts()
        this.setState({Account:accounts[0]})
        console.log("Accounts", accounts[0])
        this.setState({loading:false})
    }
    constructor(props) {
        super(props);
        this.state={
            Account:''
        }
    }

  render() {
    return (
        <Router>


                <Route path={"/"} exact component={thirdPV} />
                <Route path={"/Home"}   component={Page1}/>
                <Route path={"/Verification"} component={VerificationPage}/>
                <Route path={"/SignUp"} component={SignUp}/>
                <Route path={"/Login"} component={LogiN}/>
                <Route path={"/provider"} component={providers}/>

            </Router>


    );
  }
}

export default App;
