import React from 'react';
import styles from './Marketingheader.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Marketing_header = ({type}) => {
  return (
    <div className={cx('marketing_header')}>
        <div className={cx('Container','Container--lg','Container--spread')}>
                  <div className={cx('InputButtons','InputButtons--searchSmall')}>
                      <input type="text" className={cx('InputButtons-input')} placeholder="Search Ponies..." value="" />
                      <div className={cx('InputButtons-buttons')}>
                          <button className={cx('InputButtons-button','InputButtons-button--primary')}>Search</button>
                          <button className={cx('InputButtons-button','InputButtons-button--dismiss')}>Clear</button>
                      </div>
                  </div>
                  <div className={cx('BrowseDropdown')}>
                  </div>
        </div>
        <div className={cx('BrowseFilterBar')}>
            <div className={cx('Filter')}>
                <div className={cx('Filter-container')}>
                    <select className={cx('Filter-select')} placeholder="Sorting order">
                        <option value="">Youngest first</option>
                        <option value="old-first">Oldest first</option>
                        <option value="cheap">Cheapest first</option>
                        <option value="expensive">Most expensive first</option>
                    </select>
                    <div className="Filter-sortBy">Sort</div>
                    {(type === "for_sale") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    {(type === "siring") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    {(type === "gen0") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    {(type === "all_kitties") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    {(type === "racing") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    {(type === "ico") &&
                        <div className={cx('Filter-tabs')}>                                        
                            <span className={cx('Filter-tab')}><a href="marketplace">For Sale</a></span>
                            <span className={cx('Filter-tab')}><a href="/siring">Siring</a></span>
                            <span className={cx('Filter-tab')}><a href="/gen0">Gen 0</a></span>
                            <span className={cx('Filter-tab')}><a href="/all_kitties">All Ponies</a></span>
                            <span className={cx('Filter-tab')}><a href="/racing">Racing</a></span>
                            <span className={cx('Filter-tab','Filter-tab--active')}><a href="/ico">ICO</a></span>
                        </div>
                    }
                    <div className={cx('Filter-selectors')}></div>
                </div>
            </div>
        </div>
        </div>
  );
};

export default Marketing_header;