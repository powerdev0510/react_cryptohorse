import React from 'react';
import styles from './RacingPage.scss';
import classNames from 'classnames/bind';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import { Web3Provider } from 'react-web3';
import { Redirect, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {red500, yellow500, blue500, green300, white} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import Progress from 'react-progressbar';

import { PageTemplate } from 'components';
import { Marketingheader } from 'components'
import { HeaderContainer } from 'containers';

import Web3 from 'web3';

import kitty_love_1 from 'static/image/landing_horse1.png';
import landing_horse07 from 'static/image/landing_horse7.png';
import landing_horse02 from 'static/image/landing_horse2.png';
import landing_horse11 from 'static/image/landing_horse11.png';


// let intervalId = null;

export default class RacingPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 1,
            selected: -1,
            row_selected_state0: false,
            row_selected_state1: false,
            row_selected_state2: false,
            keyword: '',
            amount: 0.1,
            transaction_result: '',
            click_button_result: '',
            redirect: false,
            random_progres_value : 0,
            random_progres_value1 : 0,
            random_progres_value2 : 0,
            bet_button_state : false,
            loading: true,
            lucky: 'n/a',
            transaction: 'n/a'
        }
        /* this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); */
        this.web3 =  new Web3(window.web3.currentProvider);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.claimChange = this.claimChange.bind(this);
        this.claimClick = this.claimClick.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.amountClick = this.amountClick.bind(this);
        this.onChangeAccount = this.onChangeAccount.bind(this);
        this.changeState = this.changeState.bind(this);
        this.random_progress = this.random_progress.bind(this);
    }

    componentWillUpdate(web3) {
        const metastatus = this.web3.currentProvider.publicConfigStore._state.networkVersion;
        if (metastatus != 3){
            this.props.history.push('/statustest');
            // this.setState({ redirect: true });
        }
    }

    handleClick(context) {
        console.log(this.context.web3);
    }
    handleChange(event, index, value){
        this.setState({
            value,
        });
    }
    claimChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    amountChange(e) {
        this.setState({
            amount: e.target.value
        });
        
    }

    onChangeAccount(nextAddress){
        console.log(nextAddress)
    }

    claimClick() {
        this.setState({keyword : ""});
        this.setState({click_button_result : ""});
        if (this.web3.currentProvider.publicConfigStore._state.networkVersion != 3){
            alert("Change your Metamask status to 'Ropsten Test Network'!");
            return 0;
        }
        this.setState({keyword : ""});
        this.setState({transaction_result : "Requesting for my Result..."});
        this.setState({click_button_result : "Requesting for my Result..."});
        const contract_address = '0x7ae22542f359e4bef02b88e99d20ffdf0ccc7ce5';
        const selected_address = this.web3.eth.accounts[0];
        const full_object = this;
        const contractABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"}],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"receiver","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogTransfer","type":"event"}];
        const contract = this.web3.eth.contract(contractABI);
        const myContractInstance = contract.at(contract_address);
        const getData = myContractInstance.withdraw.getData();
        this.web3.eth.sendTransaction({to:contract_address, from:selected_address, data: getData
            }, function(error, result) {
                if (error){
                    full_object.setState({transaction_result : ""});
                    full_object.state.selected = -1;
                }
                else{
                    full_object.state.bet_button_state = true;
                    var interval = setInterval(function(){
                        full_object.web3.eth.getTransactionReceipt(result, function(err, transaction) {
                            console.info(transaction);
                            if(transaction !== null)
                            {
                                if(transaction.status == 0x1)
                                {
                                    clearInterval(interval);
                                    full_object.state.bet_button_state = false;
                                    full_object.state.selected = -1;
                                    console.log("Request success");
                                    full_object.setState({transaction_result : 'Transaction ID : '+result, click_button_result : 'Succeed! Check your ETH wallet!'});
                                    full_object.setState({keyword : "in mvp version we simply refund what you bet"});
                                }
                                else
                                {   
                                    full_object.state.bet_button_state = false;
                                    clearInterval(interval);
                                    full_object.state.selected = -1;
                                    console.log("transaction failed");
                                    full_object.setState({transaction_result : 'Transaction error. Retry!'});
                                }
                            }
                        });
                    }, 3000);
                    /* full_object.setState({transaction_result : 'Transaction ID : '+result, click_button_result : 'Click "CLAIM" Button. You will get the ETH on your current wallet!'}); */
                }
                console.log(error, result);
            });
        console.log(getData);
        
    }

    amountClick() {
        this.setState({keyword : ""});
        this.setState({click_button_result : ""});
        if (this.state.amount<0.1 || this.state.amount>1){
            this.state.amount=0.1;
            alert("Bet minimum 0.1 ETH and a maximum of 1 ETH");
            return 0;
        }
        else if (this.web3.currentProvider.publicConfigStore._state.networkVersion != 3){
            alert("Change your Metamask status to 'Ropsten Test Network'!");
            return 0;
        }

        else if (this.state.selected === -1){
            alert("Choose a Pony");
            return 0;
        }
        
        else {
            this.setState({transaction_result : "Placing Bet..."});
            this.setState({click_button_result : ""});
            this.state.selected = -1;
            const contract_address = '0x7ae22542f359e4bef02b88e99d20ffdf0ccc7ce5';
            const full_object = this;
            this.web3.eth.sendTransaction({
                from: this.web3.eth.accounts[0],
                to: contract_address,
                value: this.web3.toWei(this.state.amount, "ether")
            }, function(error, result) {
                console.log(error, result);
                if (error){
                    full_object.setState({transaction_result : ""});
                    full_object.state.selected = -1;
                }
                else{
                    full_object.state.bet_button_state = true;
                    full_object.random_progress();
                    var interval = setInterval(function(){
                        full_object.web3.eth.getTransactionReceipt(result, function(err, transaction) {
                            console.info(transaction);
                            if(transaction !== null)
                            {
                                if(transaction.status == 0x1)
                                {
                                    clearInterval(interval);
                                    full_object.state.bet_button_state = false;
                                    full_object.state.selected = -1;
                                    console.log("transaction success");
                                    full_object.setState({transaction_result : 'Transaction ID : '+result, click_button_result : 'Click "CLAIM" Button. You will get the ETH on your current wallet!'});
                                }
                                else
                                {   
                                    clearInterval(interval);
                                    full_object.state.selected = -1;
                                    console.log("transaction failed");
                                    full_object.setState({transaction_result : 'Transaction error. Retry!'});
                                }
                            }
                        });
                    }, 3000);
                    /* full_object.setState({transaction_result : 'Transaction ID : '+result, click_button_result : 'Click "CLAIM" Button. You will get the ETH on your current wallet!'}); */
                }
            });
            console.log(this.web3);
            // console.log(this.web3.currentProvider.publicConfigStore._state.networkVersion);
        }
    }
    
    changeState(){
        alert("this");
    }

    handleRowSelection(selectedRows) {
        this.setState({
            selected: selectedRows[0],
        });
        // console.log(selectedRows[0]);
    };

    
    func  = (intervalId, stateValue) => {
        var i;

        i = this.state[stateValue];

        if(i > 99){
            if(intervalId)
                clearInterval(intervalId);

            // console.log(`clearInterval invoked!`);
            return;
        }

        this.setState({[stateValue] : i+1});

        // console.log(`timer counter  = ${i}`);
    }
    
    

    random_progress = () => {
        this.setState({random_progres_value:0, random_progres_value1:0, random_progres_value2:0});
        const rndInterval = Math.floor(Math.random() * 150)+50;
        const rndInterval1 = Math.floor(Math.random() * 150)+50;
        const rndInterval2 = Math.floor(Math.random() * 150)+50;
        console.log(`rnd1:${rndInterval} rnd2:${rndInterval1} rnd3:${rndInterval2} `);
        const intervalId = setInterval(() => this.func(intervalId, 'random_progres_value'), rndInterval);
        const intervalId1 = setInterval(() => this.func(intervalId1, 'random_progres_value1'), rndInterval1);
        const intervalId2 = setInterval(() => this.func(intervalId2, 'random_progres_value2'), rndInterval2);
    }
    
    render() {
        // if (this.state.redirect) {
        //     return <Redirect to='/statustest'/>
        // }
        const cx = classNames.bind(styles);
        const metastatus = this.context.web3.network;
        const iconStyles = {
            marginRight: 24,
        };
        const metastatusid = this.context.web3.networkId;

        // if (metastatusid != 3) {
        //     return <Redirect to='/statustest'/>
        // }
        return (
            <PageTemplate header={<HeaderContainer Container__full metastatus={metastatus}/>}  padding responsive>
                <div className={cx('BrowsePage')}>
                    <Marketingheader type="racing">
                    </Marketingheader>
                </div>
                <div className={cx('KittiesGallery')}>
                <MuiThemeProvider>
                    <div className={cx('Container','Container--lg')}>
                        <div className={cx('row')}>
                            <div className={cx('betting_container')}>
                                <span className={cx('live_text')}>Live&nbsp;<sup><i className={cx('fa','fa-circle')} aria-hidden="true"></i></sup></span>
                                <ActionFlightTakeoff style={iconStyles} color={blue500} />
                                <div className={cx('dropdown-controller')}>
                                    <div><span className={cx('change_race')}>Change Race : </span></div>
                                    <div>
                                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                            <MenuItem value={1} primaryText="Mon Jan 15 2018 03:57:58 GMT+0800 (CST)" />
                                            <MenuItem value={2} primaryText="Sat Jan 13 2018 03:36:16 GMT+0800 (CST)" />
                                            <MenuItem value={3} primaryText="Thu Jan 11 2018 16:39:37 GMT+0800 (CST)" />
                                            <MenuItem value={4} primaryText="Wed Jan 10 2018 15:38:44 GMT+0800 (CST)" />
                                            <MenuItem value={5} primaryText="Tue Jan 09 2018 14:36:54 GMT+0800 (CST)" />
                                        </DropDownMenu>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-12','mx-auto')}>
                                <div>
                                    <Table onRowSelection={this.handleRowSelection} className={cx('table_background')}>
                                        <TableHeader className={cx('table_header_background')}>
                                        <TableRow>
                                            <TableHeaderColumn>Select a Pony</TableHeaderColumn>
                                            <TableHeaderColumn>Odds</TableHeaderColumn>
                                            <TableHeaderColumn>Accumlate pool total</TableHeaderColumn>
                                            <TableHeaderColumn>Race Line</TableHeaderColumn>
                                        </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                        <TableRow  selected={this.state.selected === 0}>
                                            <TableRowColumn><div><img className={cx('betting_image')} src={landing_horse07} alt="" /></div></TableRowColumn>
                                            <TableRowColumn>7</TableRowColumn>
                                            <TableRowColumn>15</TableRowColumn>
                                            <TableRowColumn className={cx('progress_background')}><span>{this.state.random_progres_value}%</span><Progress  completed={this.state.random_progres_value} /></TableRowColumn>
                                        </TableRow>
                                        <TableRow  selected={this.state.selected === 1}>
                                            <TableRowColumn><img className={cx('betting_image')} src={landing_horse11} alt="" /></TableRowColumn>
                                            <TableRowColumn>5</TableRowColumn>
                                            <TableRowColumn>23</TableRowColumn>
                                            <TableRowColumn className={cx('progress_background')}><span>{this.state.random_progres_value1}%</span><Progress className={cx('progress_color_2')} completed={this.state.random_progres_value1} /></TableRowColumn>
                                        </TableRow>
                                        <TableRow  selected={this.state.selected === 2}>
                                            <TableRowColumn><img className={cx('betting_image')} src={landing_horse02} alt="" /></TableRowColumn>
                                            <TableRowColumn>10</TableRowColumn>
                                            <TableRowColumn>19</TableRowColumn>
                                            <TableRowColumn className={cx('progress_background')}><span>{this.state.random_progres_value2}%</span><Progress className={cx('progress_color_3')} completed={this.state.random_progres_value2} /></TableRowColumn>
                                        </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className={cx('input-group','input-group-place-bet')}>
                                    <div className={cx('input-group-addon')}>Ξ</div>
                                    <input type="number" step="0.01" min="0.1" max="1" placeholdername="Amount" value = {this.state.amount} onChange = {this.amountChange} id="Amount" title="Enter the amount to bet in ether" className={cx('form-control')} />
                                    <div className={cx('input-group-btn')}>
                                        <a id="PlaceBetTooltip">
                                            <RaisedButton className={cx('place_bet')} onClick={this.amountClick} disabled={this.state.bet_button_state} label="Place bet" primary={true} />
                                        </a>
                                    </div>
                                </div>
                                <br/>
                                <div className={cx('pending_label')}>
                                    <label>{this.state.transaction_result}</label>
                                </div>
                                <div className={cx('click_claim_label')}>
                                    <label>{this.state.click_button_result}</label>
                                </div>
                                <div className={cx('input-group','input-group-claim')}>
                                    <div className={cx('input-group-btn')}>
                                        <a id="CheckResultTooltip">
                                            Result : 
                                        </a>
                                    </div>
                                    <input type="text" placeholder="Available after race ends" value = {this.state.keyword} onChange = {this.claimChange} className={cx('form-control')} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className={cx('input-group-btn')}>
                                        <a id="ClaimTooltip">
                                            <RaisedButton className={cx('Claim_btn')} onClick={this.claimClick} disabled={this.state.bet_button_state} backgroundColor={green300} label="Claim" labelColor={white} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
                </div>
            </PageTemplate>
        ); 
    }
    }
    RacingPage.contextTypes = {
    web3: PropTypes.object
};