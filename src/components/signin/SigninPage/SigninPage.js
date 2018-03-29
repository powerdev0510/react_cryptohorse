import React from 'react';
import styles from './SigninPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import Web3 from 'web3';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import profile_14 from 'static/image/profile-14.png'

const cx = classNames.bind(styles);

export default class SigninPage extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            email: '',
            nickname: '',
            redirect: false
        }
        this.web3 =  new Web3(window.web3.currentProvider);
        this.handleClick = this.handleClick.bind(this);
        this.handletostatus = this.handletostatus.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlnicknameChange = this.handlnicknameChange.bind(this);
      }

      componentWillUpdate(web3) {
        const metastatus = this.web3.currentProvider.publicConfigStore._state.networkVersion;
        if (metastatus != 3){
            this.props.history.push('/statustest');
            // this.setState({ redirect: true });
        }
      }

      handletostatus(){

      }

      
      handleemailChange(e) {
        this.setState({
            email: e.target.value,
        });
      }
      
      handlnicknameChange(e) {
        this.setState({
            nickname: e.target.value,
        });
      }

      handleClick(event, context){
        if( event.target.className.includes('not-changing-css-class') && 
            this.state.activeSelected !== '' 
        ) this.setState( { activeSelected : '' } )
      }

    render() {
        // if (this.state.redirect) {
        //     return <Redirect to='/statustest'/>
        // }
        // if (metastatusid != 3) {
        //     return <Redirect to='/statustest'/>
        // }
        const cx = classNames.bind(styles);
        let { activeSelected } = this.state;
        const metastatus = this.context.web3.network;
        const metastatusid = this.context.web3.networkId;
        const account = this.context.web3.selectedAccount;
        console.log(document.referrer);
        
      return (
        <PageTemplate header={<HeaderContainer Container__full metastatus={metastatus}/>}  padding responsive>
        <div className={cx('signin-page')}>
            <div className={cx('Hero')}>
                <div className={cx('Container','Container--sm','Container--center')}>
                    <h2 className={cx('Hero-h2')}>One last thing...</h2>
                    <p className={cx('Hero-description')}>We need an email address for your account.</p>
                    <form>
                        <div className={cx('Section')}>
                            <img className={cx('ProfileHeader-image','ProfileHeader-image--clickable')} src={profile_14} />
                        </div>
                        <div className={cx('Section')}>
                            <p className={cx('InputButtons-group')}>
                                <label>Wallet address</label>
                                <input type="text" id="address" name="address" className={cx('InputButtons','InputButtons-input','InputButtons--readonly')} placeholder="Wallet Address" defaultValue={account} />
                            </p>
                            <p className={cx('InputButtons-group')}>
                                <label>Email *</label>
                                <input type="text" id="email" name="email" className={cx('InputButtons','InputButtons-input')} placeholder="e.g.: kitty@universe.com" value = {this.state.email} onChange = {this.handleemailChange} />
                            </p>
                            <p className={cx('InputButtons-group')}>
                                <label>Nickname</label>
                                <input type="text" id="nickname" name="nickname" className={cx('InputButtons','InputButtons-input')} placeholder="e.g.: KittyPie" value="" value = {this.state.nickname} onChange = {this.handlnicknameChange} />
                            </p>
                        </div>
                        <div className={cx('Section')}>
                            <div className={cx('Note','Note--margins','Note--warning')}>Make sure to save your MetaMask login information and account recovery details! We can’t help you regain access if you lose it.</div>
                            <button className={cx('Button','Button--love','Button--larger','Button--disabled')} disabled="">Save account info</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
        </PageTemplate>
    );
};
}

SigninPage.contextTypes = {
    web3: PropTypes.object
};
