import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import { Footer } from 'components';
import PropTypes from 'prop-types';


export default class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(context) {
      console.log(this.context.web3);
  }
  render() {
    const cx = classNames.bind(styles);
    const { header, meta_status, children, responsive, padding } = this.props;
      return (
        <div className={cx('page')}>
          <header>
            {header}
          </header>
          <main className={cx('content', {
            padding: padding, // sets 3.5 rem padding-top
            responsive
          })}>
            {children}
          </main>
          <Footer/>
        </div>
      );
    };
}

PageTemplate.contextTypes = {
  web3: PropTypes.object
};