import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import { LandingPage } from 'components';

class SigninMenu extends React.Component {
  render() {
    const cx = classNames.bind(styles);
    return (
      <a className={cx('Header-navigation-item')} aria-current="false" href="/statustest">Signin</a>
    );
  }
}

class MyhorseMenu extends React.Component {
  render() {
    const cx = classNames.bind(styles);
    return (
      <a className={cx('Header-navigation-item')} aria-current="false" href="/signin">Signin</a>
    );
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
      console.log(this.props.metastatus);
  }
  handleChange() {
      return <MyhorseMenu/>;
  }
  
  render() {
    const { container_half, Container__full, metastatus } = this.props;
    const cx = classNames.bind(styles);
    let status = null;
    if (metastatus == "MAINNET") {
      status = <MyhorseMenu />;
    } else {
      status = <SigninMenu />;
    }
    return (
      <div className={cx('header')}>
        <div className={cx('Container', {container_half}, {Container__full} )} id="header">
          <div className={cx('Header')}>
            <a className={cx('Header-home','active')} aria-current="true" href="/">
                <div className={cx('Header-logoWrapper')}>
                    <div className={cx('Header-logo')}></div>
                </div>
                <h1 className={cx('Header-wordmark')}>CryptoPonies</h1></a>
            <nav className={cx('Header-navigation')}>
                
                <a className={cx('Header-navigation-item')} aria-current="false" href="/signin">Signin</a>
                <a className={cx('Header-navigation-item')} aria-current="false" href="/marketplace">Marketplace</a>     
                <a className={cx('Header-navigation-item')} aria-current="false" href="/racing">Racing</a>
                  <a className={cx('Header-navigation-item')} aria-current="false" href="/ico">ICO</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  web3: PropTypes.object
};