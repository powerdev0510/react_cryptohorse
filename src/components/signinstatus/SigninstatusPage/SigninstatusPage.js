import React from 'react';
import styles from './SigninstatusPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import Web3 from 'web3';

import main_network from 'static/image/main-network.png'

const cx = classNames.bind(styles);

export default class SigninstatusPage extends React.Component {
  constructor(props, context){
      super(props, context)
      this.state = {
        activeSelected : '',
        redirect: false
      }
      this.web3 =  new Web3(window.web3.currentProvider);
      this.handleClick = this.handleClick.bind(this)
    }

    componentWillUpdate(web3) {
      const metastatus = this.web3.currentProvider.publicConfigStore._state.networkVersion;
      if (metastatus == 3){
         this.props.history.push('/racing');
          // this.setState({ redirect: true });
      }
    }

    componentDidMount(){
      global.document.addEventListener( 'click', this.handleClick, false )
    }

    componentWillUnmount(){
      global.document.removeEventListener( 'click', this.handleClick, false )
    }

    handleClick(event){
      if( event.target.className.includes('not-changing-css-class') && 
          this.state.activeSelected !== '' 
      ) this.setState( { activeSelected : '' } )
    }
  render() {
    // if (this.state.redirect) {
    //   return <Redirect to='/signin'/>
    // }
    // if (metastatusid == 3) {
    //   return <Redirect to='/signin' />
    // }
      let { activeSelected } = this.state
      const cx = classNames.bind(styles);
      const metastatus = this.context.web3.network;
      const metastatusid = this.context.web3.networkId;
      
    return (
      <PageTemplate header={<HeaderContainer Container__full metastatus={metastatus}/>}  padding responsive>
        <div className={cx('signin-page')}>
          <div className={cx('Hero')}>
            <div className={cx('Container','Container--sm','Container--center')}>
              <h2 className={cx('Hero-h2')}>Oops, you’re on the wrong network</h2>
              <p className={cx('Hero-description')}>Simply open MetaMask and switch over to the <strong>Ropsten Test Network</strong></p>
              <img className={cx('Hero-image')} src={main_network} alt="Main Ethereum Network" />
            </div>
          </div> 
        </div>
      </PageTemplate>
    );
  };
}

SigninstatusPage.contextTypes = {
  web3: PropTypes.object
};