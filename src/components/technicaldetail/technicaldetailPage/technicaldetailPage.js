import React from 'react';
import styles from './technicaldetailPage.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import logo from 'static/image/logo.png'
import press from 'static/image/press.svg'
import wrench from 'static/image/wrench.svg'
import paper from 'static/image/paper.svg'



export default class technicaldetailPage extends React.Component {
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
                <div className={cx('TechnicalPage')}>
                <div className={cx('SubpageNav')}>
                        <a className={cx('SubpageNav-btn','SubpageNav-btn--active')} aria-current="true" href="/about"><img src={logo} alt="" />About</a>
                        <a className={cx('SubpageNav-btn')} aria-current="false" href="/press"><img src={press} alt="" />Press</a>
                        <a className={cx('SubpageNav-btn')} aria-current="false" href="/technical"><img src={wrench} alt="" />Technical Details</a>
                        <a href="" target="_blank" rel="noopener noreferrer" className={cx('SubpageNav-btn')}><img src={paper} alt="" />White Pa-purr</a>
                </div>
                <div className={cx('Container','Container--sm')}>
                <div className={cx('TechnicalPage-section')}>
                    <h1 className={cx('TechnicalPage-title')}>Key Information</h1>
                        <div className={cx('TechnicalPage-keyCardWrapper')}>
                            <div className={cx('TechnicalPage-keyCard')}>
                                <div className={cx('TechnicalPage-number','u-bg-pumpkin')}>1</div>
                                <p>CryptoKitties is a <strong>non-fungible token</strong>
                                <span className={cx('TechnicalPage-highlight')}>ERC #721</span> that is indivisible and unique.</p>
                            </div>
                            <div className={cx('TechnicalPage-keyCard')}>
                                <div className={cx('TechnicalPage-number','u-bg-babyblue')}>2</div>
                                <p>The smart contracts have over <strong>4-billion variations of phenotypes</strong> (what you see) and <strong>genotypes</strong> (what you don’t see).</p>
                            </div>
                            <div className={cx('TechnicalPage-keyCard')}>
                                <div className={cx('TechnicalPage-number','u-bg-mintgreen')}>3</div>
                                <p>CryptoKitties is <strong>built on the ethereum network</strong>; ether is necessary to fuel transactions, which include purchasing and breeding CryptoKitties.</p>
                            </div>
                            <div className={cx('TechnicalPage-keyCard')}>
                                <div className={cx('TechnicalPage-number','u-bg-sizzurp')}>4</div>
                                <p>Two CryptoKitties can <strong>breed a new CryptoKitty offspring</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('TechnicalPage-section')}>
                    <div className={cx('TechnicalPage-bg')}>
                        <div className={cx('Container')}>
                            <div className={cx('TechnicalPage-timeline')}>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--center')}>
                                    <h2>CryptoKitties Timeline</h2>
                                </div>
                                <div className={cx('TechnicalPage-year','u-bg-babyblue')}>2010</div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date','u-color-babyblue')}>Early 2010</span>
                                    <p><strong>CryptoKitties Lead Architect buys his first Bitcoin</strong></p>
                                </div>
                                <div className={cx('TechnicalPage-year','u-bg-mintgreen')}>2014</div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--right')}>
                                    <span className={cx('TechnicalPage-date','u-color-mintgreen')}>Summer 2014</span>
                                    <p>Members of the CryptoKitties team participate (and win) the inaugral Money20/20 hackathon; two of their three projects are based on blockchain technology</p>
                                </div>
                                <div className={cx('TechnicalPage-year','u-bg-sizzurp')}>2017</div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date','u-color-sizzurp')}>September 2017</span>
                                    <p>CryptoKitties <strong>launches its alpha test</strong> at ETHWaterloo. Hundreds of users bred thousands of cats.</p>
                                    <p>The CryptoKitties team also <strong>won the ETHWaterloo hackathon with Rufflet</strong>, a blockchain analytics application</p>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--right')}>
                                    <span className={cx('TechnicalPage-date u-color-sizzurp')}>November 22, 2017</span>
                                    <h3>The CryptoKitties Smart Contract is deployed</h3>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date u-color-sizzurp')}>November 23, 2017</span>
                                    <p>CryptoKitties is one of the Top 3 most active Ethereum contracts within three hours of its closed beta launch</p>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--right')}>
                                    <span className={cx('TechnicalPage-date u-color-sizzurp')}>November 28, 2017</span>
                                    <h3>CryptoKitties launches</h3>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date u-color-sizzurp')}>December 2, 2017</span>
                                    <p><strong>Genesis Cat CryptoKitty #1 is adopted!</strong></p>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--right')}>
                                    <span className={cx('TechnicalPage-date u-color-sizzurp')}>December 5, 2017</span>
                                    <p>Roughly <strong>60k</strong> registered users</p>
                                    <p>Nearly <strong>100k</strong> cats exist</p>
                                    <p>Over <strong>$5M USD</strong> in transactions processed so far</p>
                                    <p>CryptoKitties accounts for roughly <strong>25%</strong> of <strong>Ethereum traffic</strong></p>
                                </div>
                            </div>
                            <div className={cx('TechnicalPage-timeline')}>
                            <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--center')}>
                                <h2>Roadmap</h2>
                            </div>
                            <div className={cx('TechnicalPage-year','u-bg-pumpkin')}>2018</div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date u-color-pumpkin')}>Spring 2018</span>
                                    <h3>The CryptoKitties mobile app launches</h3>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--right')}>
                                    <span className={cx('TechnicalPage-date u-color-pumpkin')}>Early 2018</span>
                                    <p><strong>We aim to accept FIAT currency or credit cards as soon as possible.</strong></p>
                                </div>
                                <div className={cx('TechnicalPage-timelineCard','TechnicalPage-timelineCard--left')}>
                                    <span className={cx('TechnicalPage-date','u-color-pumpkin')}>November 2018</span>
                                    <p>The last of the <strong>Gen0</strong> CryptoKitties are released to the network. At this point, new CryptoKitties will only be created by breeding.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Container','Container--sm')}>
                    <div className={cx('TechnicalPage-section')}>
                        <h1 className={cx('TechnicalPage-title')}>Key Mechanics</h1>
                        <p>CryptoKitties ownership will be tracked via a smart contract on the Ethereum blockchain. CryptoKitties will be distributed automatically, via smart contract, at the rate of one every 15 minutes (672 per week) for one year.</p>
                        <p>Each cat will have a distinct visual appearance (“phenotype”) determined by its immutable genes (“genotype”) stored in the smart contract. Because cats are tokens on a blockchain, they can be bought, sold, or transferred digitally, with strong guarantees of ownership.</p>
                        <p>Additionally, any two CryptoKitties can breed together to produce an offspring, which is a genetic combination of the two parents. In each pairing, one CryptoKitty will act as the sire and will have a short recovery period (which increases each time they sire) before being able to engage in another pairing. The other CryptoKitty will incubate the new kitten, during which it can’t engage in other breeding. After this gestation period, the CryptoKitten will be born and its genotype and phenotype revealed. This new CryptoKitten will be automatically assigned to the owner of the dame cat at the time of birth. Both the mother and the new CryptoKitten will being available for further breeding immediately after birth.</p>
                        <div className={cx('Note')}>
                            <strong>Note:</strong>CryptoKitties do not have a permanently assigned gender. While they can only engage in one breeding session at one time, each cat is able to act as either matron or sire. The owner chooses with each breeding interaction.</div>
                    </div>
                    <div className={cx('TechnicalPage-section')}>
                        <h1 className={cx('TechnicalPage-title')}>Contract Structure</h1>
                        <p>The Core CryptoKitties smart contract will track the genotype and ownership of all CryptoKitties. Because of the difficulty of amending or replacing smart contracts, we will endeavour to split as much functionality out from the Core Contract as possible into “library” contracts.</p>
                        <p><strong>The Core Contract is responsible for the following activities:</strong></p>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-babyblue')}>1</div>
                            <p>Keeping track of ownership and ownership transfers for all extant CryptoKitties (including newly bred cats)</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-coral')}>2</div>
                            <p>Keeping track of approved transfers and approved siring</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-topaz')}>3</div>
                            <p>Providing a mechanism for transferring all information to a future Core Contract version (if some critical bug is discovered).</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-mintgreen')}>4</div>
                            <p>Maintaining pointers to the current versions of all library contracts (which can be dynamically updated).</p>
                        </div>
                        <p><strong>The day-one functionality of the library contracts includes:</strong></p>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-babyblue')}>1</div>
                            <p>Keep track of the genes of upcoming gen0 CryptoKitties</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-coral')}>2</div>
                                <p>Introducing the genes of gen0 CryptoKitties to the Core Contract</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-topaz')}>3</div>
                            <p>Launching the auctions for gen0 CryptoKitties (including price determination)</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-mintgreen')}>4</div>
                            <p>Combining the genotypes of two parent CryptoKitties to determine the genotype of the new CryptoKitten</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-babypuke')}>5</div>
                            <p>Managing the auctions of CryptoKitties (both gen-0 cats being auctioned to users and user-to-user auctions) and siring tokens</p>
                        </div>
                        <div className={cx('TechnicalPage-keyCard','TechnicalPage-keyCard--flex')}>
                            <div className={cx('TechnicalPage-number','u-bg-chestnut')}>6</div>
                            <p>Managing siring auctions (including initiating the breeding when successful).</p>
                        </div>
                    </div>
                    <div className={cx('TechnicalPage-section')}>
                        <p>All functionality for breeding, buying, selling, and transferring cats will be possible for any user by interacting directly with the smart contracts on the blockchain. Any auctions or sales conducted through our auction contract will include a <strong>3.75%</strong> commission (no minimum) taken from the seller’s portion.</p>
                    </div>
                </div>
            </div>
    </PageTemplate>
    );
    }
}

technicaldetailPage.contextTypes = {
    web3: PropTypes.object
};
