import React, { Component } from 'react';

// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

import { Header } from 'components';

class HeaderContainer extends Component {
  handleButtonClick = () => {
    console.log('haha');
    const { BaseActions } = this.props;
    BaseActions.doTestAction();
  }

  render() {
    const { handleButtonClick } = this;
    const { container_half } = this.props;
    const { Container__full } = this.props;
    const { metastatus } = this.props;
    return (
      <div>
        <Header onClickButton={handleButtonClick} container_half={container_half} Container__full={Container__full} metastatus={metastatus}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);