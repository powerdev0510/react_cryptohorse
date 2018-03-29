import React from 'react';
import styles from './PressPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import logo from 'static/image/logo.png'
import press from 'static/image/press.svg'
import wrench from 'static/image/wrench.svg'
import paper from 'static/image/paper.svg'

import celebrate from 'static/image/celebrate.svg'
import teamDieter from 'static/image/teamDieter.png'
import teamBenny from 'static/image/teamBenny.png'
import mascot01 from 'static/image/mascot01.png'
import mascot02 from 'static/image/mascot02.png'
import mascot03 from 'static/image/mascot03.png'
import logo_1 from 'static/image/logo(1).svg'
import logomark from 'static/image/logomark.svg'
import spelling from 'static/image/spelling.svg'
import logoTechcrunch from 'static/image/logoTechcrunch.svg'
import logoMotherboard from 'static/image/logoMotherboard.svg'
import logoBlockbeat from 'static/image/logoBlockbeat.png'
import logoForbes from 'static/image/logoForbes.svg'



export default class PressPage extends React.Component {
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
                <div className={cx('PressPage')}>
                <div className={cx('SubpageNav')}>
                    <a className={cx('SubpageNav-btn','SubpageNav-btn--active')} aria-current="true" href="/about"><img src={logo} alt="" />About</a>
                    <a className={cx('SubpageNav-btn')} aria-current="false" href="/press"><img src={press} alt="" />Press</a>
                    <a className={cx('SubpageNav-btn')} aria-current="false" href="/technical"><img src={wrench} alt="" />Technical Details</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={cx('SubpageNav-btn')}><img src={paper} alt="" />White Pa-purr</a>
                </div>
                    <div className={cx('Container','Container--sm')}>
                        <div className={cx('PressPage-section')}>
                            <h1 className={cx('u-margin-bottom-md')}>For Press</h1>
                            <p>CryptoKitties are collectible and breedable digital cats. It’s the world’s first game built on the Ethereum network. When two CryptoKitties breed, their offspring’s appearance and cattributes are determined by each parent’s 256-bit genome and an element of chance, leading to 4-billion possible genetic variations.</p>
                            <p>CryptoKitties was created to explore the concept of digital scarcity, implement a non-fungible token within smart contracts&nbsp;<span className={cx('PressPage-highlight')}>ERC #721</span>, and make blockchain technology accessible to everyday consumers.</p>
                        </div>
                        <div className={cx('PressPage-section','PressPage-cardWrapper','PressPage-cardWrapper--expandMd')}>
                            <div className={cx('PressPage-card')}><img src={celebrate} alt="" />
                                <p className={cx('PressPage-card-p')}>Founded:</p>
                                <h2 className={cx('PressPage-card-h2')}>2017</h2></div><div className={cx('PressPage-card')}>

                                <p className={cx('PressPage-card-p')}>Location:</p>
                                <h2 className={cx('PressPage-card-h2')}>Vancouver, BC</h2>
                            </div>
                            <div className={cx('PressPage-card')}>
                            <p className={cx('PressPage-card-p')}>Funding:</p>
                            <h2 className={cx('PressPage-card-h2')}>Sustainable Revenue Model</h2>
                            <p className={cx('PressPage-card-p')}>Instead of an ICO.</p>
                        </div>
                    </div>
                </div>
                <div className={cx('PressPage-section','PressPage-bg')}>
                    <div className={cx('Container','Container--center')}>
                        <h1 className={cx('u-margin-bottom-md')}>CryptoKitties Team</h1>
                        <p className={cx('PressPage-description')}>The CryptoKitties team includes over a dozen startup founders, crypto-enthusiasts, and award-winning developers. While premiering the CryptoKitties alpha at ETHWaterloo, the team won the world’s largest Ethereum hackathon with their project.</p>
                        <p className={cx('PressPage-description')}>CryptoKitties was created by <a className={cx('u-link-text')} href="https://www.axiomzen.co/" target="_blank" rel="noopener noreferrer">Axiom Zen</a></p>
                    </div>
                    <div className={cx('Container','Container--lg')}>
                        <div className={cx('PressPage-cardWrapper','PressPage-cardWrapper--expandLg')}>
                            <div className={cx('PressPage-card')}>
                                <h2>Elsa Wilk</h2>
                                <p className={cx('u-margin-bottom-sm')}>Marketing</p>
                                <p>Elsa was Marketing Director during Civic Technologies’ 2017 ICO. Her efforts lead to the ICO selling out in less than a day, netting $33 million USD and earning it praise as one of the most reputable ICO efforts to date.</p>
                                <p><a className={cx('u-link-text')} href="mailto:elsa@axiomzen.co">elsa@axiomzen.co</a></p>
                            </div>
                            <div className={cx('PressPage-card')}>
                                <img className={cx('PressPage-profilePhoto')} src={teamDieter} alt="" />
                                <h2>Dieter Shirley</h2>
                                <p className={cx('u-margin-bottom-sm')}>Development</p>
                                <p>Dieter’s experience in blockchain dates back to 2010, when he mined his first Bitcoin block. His 15 years of experience include shipping software for industry giants, including Apple, BlackBerry, and Microsoft.</p>
                                <p><a className={cx('u-link-text')} href="mailto:dieter@axiomzen.co">dieter@axiomzen.co</a></p>
                            </div>
                            <div className={cx('PressPage-card')}>
                                <img className={cx('PressPage-profilePhoto')} src={teamBenny} alt="" />
                                <h2>Benny Giang</h2>
                                <p className={cx('u-margin-bottom-sm')}>Community</p>
                                <p>Benny is the co-founder of Toby, Product Hunt and Google’s Extension of the Year. He helped grow the product to 100,000 users in ten months, and he launched a closed beta program with IBM, Twitter, and Starbucks.</p>
                                <p><a className={cx('u-link-text')} href="mailto:benny@axiomzen.co">benny@axiomzen.co</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Container')}>
                    <div className={cx('PressPage-section')}>
                        <h1 className={cx('u-margin-bottom-lg')}>Product and brand assets</h1>
                        <div className={cx('PressPage-assetWrapper')}>
                            <a className={cx('PressPage-asset','PressPage-asset--wide')} href="https://www.cryptokitties.co/downloads/logo.zip"><img className={cx('PressPage-asset-img')} src={logo_1} alt="" /><div className={cx('PressPage-asset-footer')}>CryptoKitties logo</div></a>
                            <a className={cx('PressPage-asset')} href="https://www.cryptokitties.co/downloads/logomark.zip"><img className={cx('PressPage-asset-img')} src={logomark} alt="" /><div className={cx('PressPage-asset-footer')}>CryptoKitties logomark</div></a>
                            <a className={cx('PressPage-asset')} href={mascot01}>
                                <img className={cx('PressPage-asset-img')} src={mascot01} alt="" />
                                <div className={cx('PressPage-asset-footer')}>Twitch</div>
                            </a>
                            <a className={cx('PressPage-asset')} href={mascot02}>
                                <img className={cx('PressPage-asset-img')} src={mascot02} alt="" />
                                <div className={cx('PressPage-asset-footer')}>Lola</div>
                            </a>
                            <a className={cx('PressPage-asset')} href={mascot03}>
                                <img className={cx('PressPage-asset-img')} src={mascot03} alt="" />
                                <div className={cx('PressPage-asset-footer')}>Panthar</div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('PressPage-section','PressPage-section--spelling')}>
                        <h1 className={cx('u-margin-bottom-md')}>Spelling</h1>
                        <p className={cx('u-margin-bottom-md')}>When referencing us, CryptoKitties is always written as a single word, with an uppercase <span className={cx('PressPage-highlight')}>C</span> and an uppercase <span className={cx('PressPage-highlight')}>K</span>.</p>
                        <img className={cx('u-margin-top-md')} src={spelling} alt="" />
                    </div>
                </div>
                <div className={cx('PressPage-bg','PressPage-section')}>
                    <div className={cx('Container','Container--lg','Container--center')}>
                        <h1 className={cx('u-margin-bottom-md')}>Press and Coverage</h1>
                        <div className={cx('PressPage-cardWrapper','PressPage-cardWrapper--expandMd')}>
                            <a className={cx('PressPage-card')} href="http://fortune.com/2017/12/04/blockchain-cryptokitties-ethereum/" target="_blank" rel="noopener noreferrer">
                                <img src={logomark} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>Introducing “CryptoKitties,” the New Digital Pets Taking Ethereum by Storm</h2>
                                <p className={cx('u-margin-top-lg')}>—&nbsp;Joseph Hincks for Fortune</p>
                            </a>
                            <a className={cx('PressPage-card')} href="https://techcrunch.com/2017/12/03/people-have-spent-over-1m-buying-virtual-cats-on-the-ethereum-blockchain/" target="_blank" rel="noopener noreferrer">
                                <img src={logoTechcrunch} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>People have spent over $1M buying virtual cats on the Ethereum blockchain</h2><p className={cx('u-margin-top-lg')}>—&nbsp;Fitz Tepper for TechCrunch</p>
                            </a>
                            <a className={cx('PressPage-card')} href="https://qz.com/1144169/the-ethereum-world-is-now-obsessed-with-breeding-cartoon-cats/" target="_blank" rel="noopener noreferrer"><img src={logoForbes} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>The ethereum world is now obsessed with breeding cartoon cats</h2>
                                <p className={cx('u-margin-top-lg')}>—&nbsp;Joon Ian Wong for Quartz</p>
                            </a>
                            <a className={cx('PressPage-card')} href="https://motherboard.vice.com/en_us/article/bj78jv/cryptokitties-blockchain-cats-axiom-zen-game" target="_blank" rel="noopener noreferrer">
                                <img src={logoMotherboard} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>I Bred ‘Crypto Kitties’ on the Ethereum Blockchain</h2>
                                <p className={cx('u-margin-top-lg')}>—&nbsp;Daniel Oberhaus for Motherboard</p>
                            </a>
                            <a className={cx('PressPage-card')} href="https://theblockbeat.com/cryptokitties-is-the-cutest-application-of-blockchain-weve-ever-seen/" target="_blank" rel="noopener noreferrer">
                                <img src={logoBlockbeat} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>CryptoKitties is the Cutest Application of Blockchain We’ve Ever Seen</h2>
                                <p className={cx('u-margin-top-lg')}>—&nbsp;Sherilynn Macale for Blockbeat</p>
                            </a>
                            <a className={cx('PressPage-card')} href="https://www.forbes.com/sites/ksamani/2017/10/20/what-happens-when-you-lock-400-crypto-nerds-in-a-room-for-the-weekend/#693b6bff4feb" target="_blank" rel="noopener noreferrer">
                                <img src={logoForbes} alt="" />
                                <h2 className={cx('PressPage-card-h2')}>What Happens When You Lock 400 Crypto Nerds In A Room For The Weekend</h2>
                                <p className={cx('u-margin-top-lg')}>—&nbsp;Kyle Samani for Forbes</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('Container','Container--sm"')}>
                    <div className={cx('PressPage-section')}>
                        <h1 className={cx('u-margin-bottom-lg')}>News and Insights</h1>
                        <a href="http://www.newswire.ca/news-releases/cryptokitties-the-worlds-first-ethereum-game-launches-today-660494073.html" className={cx('PressPage-link')} target="_blank" rel="noopener noreferrer">
                        <span className={cx('u-link-text')}>CryptoKitties: The World’s First Ethereum Game Launches</span>
                        </a>
                        <a href="https://hackernoon.com/building-a-bridge-between-blockchain-and-consumers-with-cats-104ac6655563" className={cx('PressPage-link')} target="_blank" rel="noopener noreferrer"><span className={cx('u-link-text')}>Building a Bridge Between Blockchain and Consumers with Cats</span></a>
                        <a href="https://medium.com/@bennygiang/why-were-not-doing-an-initial-coin-offering-ico-5a6d6dfedca1" className={cx('PressPage-link')} target="_blank" rel="noopener noreferrer"><span className={cx('u-link-text')}>Why We’re Not Doing An Initial Coin Offering (ICO)</span></a>
                        <a href="http://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html" className={cx('PressPage-link')} target="_blank" rel="noopener noreferrer"><span className={cx('u-link-text')}>Cats Invade World’s Largest Ethereum Hackathon</span></a>
                    </div>
                </div>
                <div className={cx('Container','Container--sm','Container--center')}>
                    <div className={cx('PressPage-section')}>
                        <p>Want additional quotes or context?</p>
                        <a className={cx('Button','Button--larger','Button--buy','Button--cta')} href="mailto:press@axiomzen.co">Please get in touch</a>
                    </div>
                </div>
            </div>
    </PageTemplate>
    );
    }
}
PressPage.contextTypes = {
    web3: PropTypes.object
};
