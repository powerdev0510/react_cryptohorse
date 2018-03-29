import React from 'react';
import styles from './InstallerPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import screenshot_locked from 'static/image/screenshot-locked.png'
import screenshot_buy_usa from 'static/image/screenshot-buy-usa.png'
import kitty_confused from 'static/image/kitty-confused.svg'

const cx = classNames.bind(styles);

export default class InstallerPage extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
          activeSelected : ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handletostatus = this.handletostatus.bind(this);
      }
      componentDidMount(context){
      }
      componentWillMount(context){
      }
      handletostatus(){
      }
      handleClick(event, context){
        if( event.target.className.includes('not-changing-css-class') && 
            this.state.activeSelected !== '' 
        ) this.setState( { activeSelected : '' } )
      }
    render() {
        const cx = classNames.bind(styles);
        let { activeSelected } = this.state;
        const metastatus = this.context.web3.network;
        const metastatusid = this.context.web3.networkId;
        if (metastatusid > 2) {
            return <Redirect to='/statustest'/>
        }
      return (
        <PageTemplate header={<HeaderContainer Container__full metastatus={metastatus}/>}  padding responsive>
        <div className={cx('signin-page')}>
            <div className={cx('Hero')}>
                <div className={cx('Container','Container--sm')}>
                    <div className={cx('u-center','u-margin-bottom-xl')}>
                        <h1 className={cx('Hero-h1')}>Wanna play?</h1>
                        <p className={cx('Hero-description')}>You’ll need a safe place to store all of your adorable CryptoKitties! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed).</p><a className={cx('Button','Button--largest','Button--love','Button--cta','u-margin-bottom-sm')} rel='noopener noreferrer' target='_blank'>Install MetaMask</a>
                    </div>
                    <div className={cx('FaqGroup')}>
                        <h2 className={cx('FaqGroup-title')}>Need help?</h2>
                        <div className={cx('FaqGroup-questions')}>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item1'}) } role='button' id='What-do-I-need-to-play-CryptoKitties' onClick={ event => this.setState({ activeSelected : activeSelected === 'item1' ? '' : 'item1' }) }>
                                <h3 className={cx('Faq-question')}>What do I need to play CryptoKitties?</h3>
                                <div className={cx('Faq-answer')}>
                                    <p>Here’s what you need to get started:</p>
                                    <ul>
                                        <li>A computer or laptop running the desktop version of Chrome or Firefox</li>
                                        <li>MetaMask, a digital wallet used specifically with web apps</li>
                                        <li>Ether, a form of digital payment that powers CryptoKitties</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item2'}) } role='button' id='Installing-MetaMask-your-digital-wallet' onClick={ event => this.setState({ activeSelected : activeSelected === 'item2' ? '' : 'item2' }) }>
                                <h3 className={cx('Faq-question')}>Installing MetaMask, your digital wallet</h3>
                                <div className={cx('Faq-answer')}>
                                    <p>To use CryptoKitties, you will need to install MetaMask, a digital wallet. You will need to put money in it to make your first purchase.</p>
                                    <p><strong>Note:</strong> A digital wallet like MetaMask acts like a bank account—treat it with respect and make sure you don’t forget your password or the seed words.</p>
                                    <iframe width='100%' height='315' src='https://www.youtube.com/embed/tfETpi-9ORs?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen='' role="img" title="asd"></iframe>
                                </div>
                            </div>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item3'}) } role='button' id='Why-is-MetaMask-locked' onClick={ event => this.setState({ activeSelected : activeSelected === 'item3' ? '' : 'item3' }) }>
                                <h3 className={cx('Faq-question')}>Why is MetaMask locked?</h3>
                                <div className={cx('Faq-answer')}>
                                    <p>Occasionally the ‘My Kitties’ page displays a lock screen. This happens because MetaMask locks your account after a certain period of time automatically. To unlock simply click on the MetaMask extension and type in your password.</p><img src={screenshot_locked} alt="" /></div>
                            </div>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item4'}) } role='button' id='Getting-Ether-your-digital-currency' onClick={ event => this.setState({ activeSelected : activeSelected === 'item4' ? '' : 'item4' }) }>
                                <h3 className={cx('Faq-question')}>Getting Ether, your digital currency</h3>
                                <div className={cx('Faq-answer')}>
                                    <p><strong>For U.S. citizens only:</strong> you can buy ether (ETH) in MetaMask. ETH is a digital currency that enables our game to run.</p><img src={screenshot_buy_usa} alt="" />
                                    <p><strong>For everyone else:</strong> you will need to purchase ETH from an exchange. The easiest way is using Coinbase and then transferring the ETH from your Coinbase wallet to your MetaMask wallet. Unfortunately, you cannot play CryptoKitties with a Coinbase wallet or any other wallets.</p>
                                    <p>You cannot use USD/CAD to buy a CryptoKitty—currencies need to be converted into ETH first.</p>
                                </div>
                            </div>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item5'}) } role='button' id='How-to-send-ETH-to-MetaMask' onClick={ event => this.setState({ activeSelected : activeSelected === 'item5' ? '' : 'item5' }) }>
                                <h3 className={cx('Faq-question')}>How to send ETH to MetaMask</h3>
                                <div className={cx('Faq-answer')}>
                                    <p><strong>For U.S. citizens only:</strong> you are able to purchase ETH directly from the MetaMask wallet using the Coinbase widget. This is more convenient and doesn’t require you to create two accounts.</p>
                                    <p><strong>For everyone else:</strong> you need to buy ETH from an exchange using normal fiat currency. Coinbase is the easiest to setup however the choice is ultimately up to you. Copy your MetaMask address but clicking on the ‘...’ then ‘Copy Address to clipboard’. Go to Coinbase and click ‘Accounts’ and select your ETH Wallet and then click ‘send’. Paste the MetaMask address in the box with the amount you’d like to transfer.</p>                                        
                                    <iframe width='100%' height='315' src='https://www.youtube.com/embed/PtdMDtCVck0?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen='' title="asddf"></iframe>
                                </div>
                            </div>
                            <div className={cx({'Faq' : true,'Faq--open' : activeSelected === 'item6'}) } role='button' id='Why-is-MetaMask-being-so-slow' onClick={ event => this.setState({ activeSelected : activeSelected === 'item6' ? '' : 'item6' }) }>
                                <h3 className={cx('Faq-question')}>Why is MetaMask being so slow?</h3>
                                <div className={cx('Faq-answer')}>
                                    <p>If you have a lot of tabs open, MetaMask will suffer memory leaks and slow down. To fix this issue, close all your tabs, restart the browser, and things should improve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('CtaFaq')}><img src={kitty_confused} alt="" />
                        <h1 className={cx('CtaFaq-title')}>Still confused?</h1><a className={cx('Button','Button--larger','Button--buy','Button--cta')} aria-current='false'>View full FAQ</a></div>
                </div>
            </div> 
        </div>
        </PageTemplate>
    );
};
}

InstallerPage.contextTypes = {
    web3: PropTypes.object
};