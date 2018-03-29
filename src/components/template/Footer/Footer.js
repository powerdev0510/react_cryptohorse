import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

import paw from 'static/image/paw.svg'
import icon_message from 'static/image/icon-message.svg'
import icon_discord_white from 'static/image/icon-discord-white.svg'

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <footer className={cx('Footer')}>
        <div className={cx('Container','Container--lg')}>
            <div className={cx('Footer-primary')}>
                <div className={cx('Footer-nav','Footer-nav--primary')}>
                    <ul className={cx('Footer-nav-items')}>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--mykitties')} aria-current="false">My Ponies</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--activity')} aria-current="false">Activity</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--marketplace')} aria-current="false" href="marketplace">Marketplace</a></li>
                    </ul>
                </div>
                <div className={cx('Footer-nav','Footer-nav--secondary')}>
                    <ul className={cx('Footer-nav-items')}>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--faq')} aria-current="false" href="faq">FAQs</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--about')} aria-current="false" href="about">About</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--press')} aria-current="false" href="press">Press</a></li>
                    </ul>
                </div>
                <div className={cx('Footer-nav','Footer-nav--social')}>
                    <ul className={cx('Footer-nav-items')}>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--facebook')} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CryptoPonies/">Facebook</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--reddit')} target="_blank" rel="noopener noreferrer">Reddit</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--twitter')} target="_blank" rel="noopener noreferrer" href="https://twitter.com/CryptoPonies">Twitter</a></li>
                        <li className={cx('Footer-nav-item')}><a className={cx('Footer-nav-link','Footer-nav-link--discord')} target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/TYe6pJU">Discord</a></li>
                    </ul>
                </div>
                <div className={cx('Footer-primary-love')}>
                    Pick of the litter at
                    <a target="_blank" rel="noopener noreferrer"> Axiom Zen</a>
                    <img src={paw} alt="Purrrrr" />
                </div>
            </div>
            <div className={cx('Footer-secondary')}><a className={cx('Footer-secondary-link')} aria-current="false" href="https://www.cryptokitties.co/terms-of-use">Terms of use</a><a className={cx('Footer-secondary-link')} aria-current="false" href="https://www.cryptokitties.co/privacy-policy">Privacy policy</a></div>
        </div>
      </footer>
      <a className={cx('FloatingSupportLink')} target="_blank" rel="noopener noreferrer"><img className={cx('FloatingSupportLink-icon','FloatingSupportLink-icon--message')} src={icon_message} alt="" /><img className={cx('FloatingSupportLink-icon','FloatingSupportLink-icon--plane')} src={icon_discord_white} alt="" />
        <div className={cx('FloatingSupportLink-text')}><span>Talk to us on<br/><strong>Discord</strong></span></div>
      </a>
    </div>
  );
};

export default Footer;