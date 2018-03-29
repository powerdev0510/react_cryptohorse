import React from 'react';
import styles from './LandingPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import landing_horse01 from 'static/image/landing_horse1.png';
import landing_horse02 from 'static/image/landing_horse2.png';
import landing_horse03 from 'static/image/landing_horse3.png';
import landing_horse04 from 'static/image/landing_horse4.png';
import landing_horse05 from 'static/image/landing_horse5.png';
import landing_horse06 from 'static/image/landing_horse6.png';
import landing_horse07 from 'static/image/landing_horse7.png';
import landing_horse08 from 'static/image/landing_horse8.png';
import landing_horse09 from 'static/image/landing_horse9.png';
import landing_horse10 from 'static/image/landing_horse10.png';
import landing_horse11 from 'static/image/landing_horse11.png'; 
import landing_horse12 from 'static/image/landing_horse12.png';

import kitty_eth from 'static/image/horse-eth.png';
import kitty_love_1 from 'static/image/horse_love1.png';
import kitty_love_2 from 'static/image/horse_love2.png';
import kitty_love_3 from 'static/image/horse_result.png';

export default class LandingPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(context) {
        console.log(this.context.web3);
    }
    render() {
        const cx = classNames.bind(styles);
        const metastatus = this.context.web3.network;
        return (
            <PageTemplate header={<HeaderContainer container_half metastatus={metastatus}/>}  padding responsive>
            <div>
                <div className={cx('Landing')}>
                    <div className={cx('Landing-description')}>
                        <h1 className={cx('Landing-headline')}>Collect.</h1>
                        <h1 className={cx('Landing-headline')}>Breed.</h1>
                        <h1 className={cx('Landing-headline')}>Race.</h1>
                        <h1 className={cx('Landing-headline')}>Bet.</h1>
                        <p className={cx('Landing-subheadline')}>Collect and breed digital ponies.</p><button className={cx('Button','Button--largest','Button--love','Button--cta')} onClick={this.handleClick} aria-current="false">Start Now</button></div>
                    <div className={cx('Landing-slots')}>
                        <div className={cx('Landing-pattern')}><img className={cx('landing_horse')} src={landing_horse02} alt="" /><img className={cx('landing_horse')} src={landing_horse11} alt="" /><img className={cx('landing_horse')} src={landing_horse01} alt="" /><img className={cx('landing_horse')} src={landing_horse12} alt="" /><img className={cx('landing_horse')} src={landing_horse07} alt="" /><img className={cx('landing_horse')} src={landing_horse04} alt="" /><img className={cx('landing_horse')} src={landing_horse07} alt="" /><img className={cx('landing_horse')} src={landing_horse07} alt="" /><img className={cx('landing_horse')} src={landing_horse08} alt="" /></div>
                        <div className={cx('Landing-pattern')}><img className={cx('landing_horse')} src={landing_horse07} alt="" /><img className={cx('landing_horse')} src={landing_horse05} alt="" /><img className={cx('landing_horse')} src={landing_horse04} alt="" /><img className={cx('landing_horse')} src={landing_horse08} alt="" /><img className={cx('landing_horse')} src={landing_horse11} alt="" /><img className={cx('landing_horse')} src={landing_horse05} alt="" /><img className={cx('landing_horse')} src={landing_horse02} alt="" /><img className={cx('landing_horse')} src={landing_horse03} alt="" /><img className={cx('landing_horse')} src={landing_horse06} alt="" /></div>
                        <div className={cx('Landing-pattern')}><img className={cx('landing_horse')} src={landing_horse03} alt="" /><img className={cx('landing_horse')} src={landing_horse10} alt=""/><img className={cx('landing_horse')} src={landing_horse06} alt="" /><img className={cx('landing_horse')} src={landing_horse09} alt="" /><img className={cx('landing_horse')} src={landing_horse03} alt="" /><img className={cx('landing_horse')} src={landing_horse06} alt="" /><img className={cx('landing_horse')} src={landing_horse01} alt="" /><img className={cx('landing_horse')} src={landing_horse02} alt="" /><img className={cx('landing_horse')} src={landing_horse03} alt="" /></div>
                    </div>
                </div>
                <div className={cx('Explainer')}>
                    <div className={cx('Explainer-bg')}>
                        <div className={cx('Container','Container--lg')}>
                            <div className={cx('Explainer-what')}>
                                <div className={cx('Explainer-ethKitty')}><img src={kitty_eth} alt="" /></div>
                                <div className={cx('Explainer-what-text')}>
                                    <h2 className={cx('Explainer-headline')}>What is Pony?</h2>
                                    <p className={cx('Explainer-description')}>Pony is a game centered around breedable, collectible, and oh-so-adorable creatures we call Pony! Each pony is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container','Container--center')}>
                        <div className={cx('Explainer-why')}>
                            <h2 className={cx('Explainer-headline')}>What’s the big deal?</h2>
                            <p className={cx('Explainer-description')}>CryptoPonies is one of the world’s first horse racing games to be built on blockchain technology—the same breakthrough that makes things like Bitcoin and Ethereum possible. Bitcoin and ether are cryptocurrencies but ponies are cryptocollectibles. You can buy, sell, or trade your ponies like it was a traditional collectible, secure in the knowledge that blockchain will track ownership securely.</p>
                        </div>
                    </div>
                    <div className={cx('Explainer-bg')}>
                        <div className={cx('Container','Container--lg')}>
                            <div className={cx('Explainer-breed')}>
                                <div className={cx('Explainer-breedKitty', 'famale_pony', 'image_70')}><img className={cx('image_70_img')} src={kitty_love_2} alt="" /></div>
                                <div className={cx('Explainer-breedKitty', 'Explainer-breedKitty--icons', 'male_pony', 'image_70')}><img className={cx('image_70_img')} src={kitty_love_1} alt="" /></div>
                                <div className={cx('Explainer-breedKitty', 'result_pony', 'image_70')}><img className={cx('image_70_img')} src={kitty_love_3} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container','Container--center')}>
                        <div className={cx('Explainer-cta')}>
                            <p className={cx('Explainer-description2')}>You can also send your ponies to racing and bet on which pony will win  races!  Stay follow us and stay tuned.</p>
                            <p className={cx('Explainer-description2')}><strong>It results in something special—just like you!</strong></p><button className={cx('Button','Button-largest','Button--love','Button--cta')} onClick={this.handleClick} aria-current="false"> Start Now </button></div>
                    </div>
                </div>
            </div>
            </PageTemplate>
        )
    }
  // return (
  //   <div>asdf</div>
  // );
}
LandingPage.contextTypes = {
    web3: PropTypes.object
};
