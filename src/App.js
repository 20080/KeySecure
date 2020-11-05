import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3'
import Page1 from "./indexx";
import './css/bootstrap.min.css'
import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './images/background4.jpg'
import VerificationPage from "./verificationPage";
import Final from "./finalVerification";
import SignUp from "./signUp"
import LogiN from "./logiN"
import thirdPV from "./thirdPartyV"
import Providers from "./providerS";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {TXN_ABI, TXN_ADDRESS} from "./Config";
import {Accounts} from "web3-eth-accounts";


class App extends Component {


    componentWillMount(){
    this.loadBlockChainData()   
    }
    //'0x0000000000000000000000000000000000000000000000000000000000000000'
    async loadBlockChainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const network = await web3.eth.net.getNetworkType()
        console.log("network:", network)
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})

        console.log(this.state.account)
        const Txn = new web3.eth.Contract(TXN_ABI, TXN_ADDRESS)
        this.setState({Txn})
        console.log(Txn)

        const uc = await Txn.methods.userCount().call()
        this.setState({uc: uc})
        console.log("UserCounts: ", this.state.uc)

        const lastLog = await Txn.methods.lastLog().call()
        this.setState({lastLog: lastLog})
        const asSt = await Txn.methods.asSt().call()

        this.asSt = '0x0000000000000000000000000000000000000000000000000000000000000000'
        this.setState({asSt: asSt})
        const keyHashtoUserHash = await Txn.methods.keyHashtoUserHash(asSt).call()
        this.setState({keyHashtoUserHash});
        {
            console.log(asSt)
        }
//        console.log(.asSt)
        const userList = await Txn.methods.userList(keyHashtoUserHash).call()
        this.setState({userList})
        console.log(userList)


    }




    constructor(props) {
        super(props)
        this.state={
            account:'',
            uc:0,
            con:true,
            lastLog:"",
            keyHashtoUserHash:"",
            asSt:'',
            userList:[]
        }
        console.log("LLLL",this.props.lastLL)

        this.createUser = this.createUser.bind(this)
        this.keyHashtoUserHashMapping = this.keyHashtoUserHashMapping.bind(this)
        this.setLastLog= this.setLastLog.bind(this)
        this.asS = this.asS.bind(this)
    }

    asS(dataa){
        this.state.Txn.methods.asS(dataa).send({from:this.state.account})
            .once('receipt',(receipt)=>{
                console.log("createUserReceipt",receipt)
            })
    }

    createUser(name,email,phone,additional){

       this.state.Txn.methods.createUser(name,email,phone,additional).send({from:this.state.account})
            .once('receipt',(receipt)=>{
                console.log("createUserReceipt",receipt)
            })
    }

    keyHashtoUserHashMapping(addresss,privateKey,name,email,phone,additional){
        this.state.Txn.methods.keyHashtoUserHashMapping(addresss,privateKey,name,email,phone,additional)
            .send({from:this.state.account})
            .once('receipt',(receipt)=>{
                console.log("keyHashMapping: ",receipt)
            })
    }

    setLastLog(key,add){
        this.state.Txn.methods.setLastLog(key,add).send({from:this.state.account})
            .once('receipt',(receipt)=>{
                console.log("Re  LL",receipt)
            })
    }





  render() {
    return (
        <Router>
                <Route path={"/"} exact component={thirdPV} />
                <Route path={"/Home"} exact  component={Page1}/>
                <Route path={"/Verification"} exact component={VerificationPage}/>


                <Route path={"/verified"} component={()=><Final keyHashtoUserHash={this.state.keyHashtoUserHash}
                    userArr={this.state.userList}/>}/>

                <Route path={"/SignUp"} component={()=><SignUp createUser={this.createUser} uc={this.state.uc}
            keyHashtoUserHashMapping={this.keyHashtoUserHashMapping} lastLog={this.state.lastLog}
            asS={this.asS} asSt={this.state.asSt}/>} />
                       {/*//render={()=><SignUp createUser={this.createUser}/>} />*/}
                <Route path={"/Login"} exact component={()=><LogiN keyHashtoUserHash={this.state.keyHashtoUserHash}
                lastLog={this.state.lastLog} uc={this.state.uc}
                keyHashtoUserHashMapping={this.keyHashtoUserHashMapping}
                asS={this.asS} asSt={this.state.asSt}/>}
                />
                <Route path={"/provider"}  component={() => <Providers keyHashtoUserHash={this.state.keyHashtoUserHash}
                                                            lastLog={this.state.lastLog} uc={this.state.uc}
                                                            keyHashtoUserHashMapping={this.keyHashtoUserHashMapping}
                                                            asS={this.asS} asSt={this.state.asSt}/>}/>
                                                            <Route/>
            </Router>


    );
  }
}

export default App;
