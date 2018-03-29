import React, { Component } from 'react';
import { Web3Provider } from 'react-web3';
import { LandingPage, SigninPage, AboutPage, technicaldetailPage, PressPage, MarketingPage, SigninstatusPage, SiringPage, Gen0Page, AllkittiesPage, RacingPage, IcoPage, InstallerPage } from 'components';
import { Redirect, Route } from 'react-router-dom';

import Web3 from 'web3';

const baseUrl = process.env.PUBLIC_URL;
export default class App extends React.Component {

  constructor(props, context){
    super(props, context)
    this.web3 =  new Web3(window.web3.currentProvider);
  }
  
  render() {
    return (
      <div>
      <Web3Provider passive="true"  >
        <Route exact path="/" component={LandingPage}/>
        <Route path={baseUrl + "/signin"} component={SigninPage}/>
        <Route path={baseUrl + "/about"} component={AboutPage}/>
        <Route path={baseUrl + "/technical"} component={technicaldetailPage}/>
        <Route path={baseUrl + "/press"} component={PressPage}/>
        <Route path={baseUrl + "/marketplace"} component={MarketingPage}/> 
        <Route path={baseUrl + "/siring"} component={SiringPage}/>
        <Route path={baseUrl + "/gen0"} component={Gen0Page}/>
        <Route path={baseUrl + "/all_kitties"} component={AllkittiesPage}/>
        <Route path={baseUrl + "/racing"} component={RacingPage}/>
        <Route path={baseUrl + "/ico"} component={IcoPage}/>
        <Route path={baseUrl + "/statustest"} component={SigninstatusPage}/>
        <Route path={baseUrl + "/installer"} component={InstallerPage}/>
        </Web3Provider>
      </div>
    );
  }
}