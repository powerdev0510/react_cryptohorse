import React from 'react';
import styles from './AboutPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import logo from 'static/image/logo.png'
import press from 'static/image/press.svg'
import wrench from 'static/image/wrench.svg'
import paper from 'static/image/paper.svg'
import letterHead from 'static/image/letterHead.png'

export default class AboutPage extends React.Component {
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
            <PageTemplate header={<HeaderContainer Container__full metastatus={metastatus}/>}  padding responsive>
            <div>
                <div className={cx('AboutPage')}>
                <div className={cx('SubpageNav')}>
                    <a className={cx('SubpageNav-btn','SubpageNav-btn--active')} aria-current="true" href="/about"><img src={logo} alt=""/>About</a>
                    <a className={cx('SubpageNav-btn')} aria-current="false" href="/press"><img src={press} alt="" />Press</a>
                    <a className={cx('SubpageNav-btn')} aria-current="false" href="/technical"><img src={wrench} alt="" />Technical Details</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={cx('SubpageNav-btn')}><img src={paper} alt="" />White Pa-purr</a>
                </div>

                <div className={cx('AboutPage-section')}>
                    <div className={cx('AboutPage-header')}>
                        <div className={cx('AboutPage-letterHead')}>
                            <img src={letterHead} alt=""/>
                        </div>
                        <p className={cx('AboutPage-bodyText')}>In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties! Each kitty has a unique genome that defines its appearance and traits. Players can breed their kitties to create new furry friends and unlock rare cattributes.</p>
                        <p className={cx('AboutPage-bodyText')}>CryptoKitties is one of the world’s first blockchain games. ‘Blockchain’ is the technology that makes things like Bitcoin possible. While CryptoKitties isn’t a digital currency, it does offer the same security: each CryptoKitty is one-of-a-kind and 100% owned by you. It cannot be replicated, taken away, or destroyed.</p>
                    </div>
                </div>
                <div className={cx('AboutPage-section')}>
                    <div className={cx('AboutPage-catifesto')}>
                        <h4 className={cx('AboutPage-label')}>The CryptoKitties Catifesto</h4>
                        <h2 className={cx('AboutPage-headline')}>What we believe in, what we stand for, and why we’re building CryptoKitties.</h2>
                        <div className={cx('AboutPage-columns')}>
                            <p className={cx('AboutPage-bodyText')}><strong>The future is exciting.</strong></p>
                            <p className={cx('AboutPage-bodyText')}>And we believe that blockchain is the future—but blockchain is about as approachable as a bunch of ones and zeroes.</p>
                            <p className={cx('AboutPage-bodyText')}>We want a future for everyone, not one exclusive to Bitcoin miners, VCs, ICOs, and other equally fun acronyms.</p>
                            <p className={cx('AboutPage-bodyText')}><strong>So why cats?</strong></p>
                            <p className={cx('AboutPage-bodyText')}>Pop quiz, hotshot: why not?</p>
                            <p className={cx('AboutPage-bodyText')}>Cats are impossible to understand. They’re ambassadors for pharaohs, memes, and your mom’s facebook page. They don’t discriminate; they despise everyone equally.</p>
                            <p className={cx('AboutPage-bodyText')}>Cats are perfect killing machines, with retractable claws, night vision, and teeth on their tongue. But cats also nap whenever they feel like it, and we respect that.</p>
                            <p className={cx('AboutPage-bodyText')}>More than anything, cats are different. They’re weird, funny, and hopelessly entertaining. You don’t have to understand cats to appreciate them.</p>
                            <p className={cx('AboutPage-bodyText')}>We’re not trying to build the future—we’re trying to have fun with it.</p>
                        </div>
                        <p className={cx('AboutPage-signature')}>The future is meow.</p>
                    </div>
                </div>
                </div>
            </div>
            </PageTemplate>
        );
    }
}
AboutPage.contextTypes = {
    web3: PropTypes.object
};