import { Component } from 'react';
import React from 'react';
import './css/home.scss'
import {
    registerItems,
    // timelineItems,
    prizeItems,
    themes,
    GoldSponsors,
    PlatSponsors,
    // PlatformPartners,
    // Sponsors,
    // CommunityPartners,
    FAQs,
} from './js/homeData'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Devfoliobutton from './Devfoliobutton';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            page: "home",
        };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    carouselBreakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1 }
    ];



    render() {
        const { items } = this.state;
        return (
            <>
                <span hidden="true" id="page-name">Home</span>
                {/* Header */}

                <header className="header">
                    <div className="header-content">
                        <div className="header-logo">
                            <img alt="codeforgood" src="./img/cfgg.png" />
                        </div>
                        
                        <h1>CodeForGood</h1>
                        <div className="Dev-Home">
                            <Devfoliobutton></Devfoliobutton>
                        </div>
                    </div>
                </header>
                {/* body */}


                <a name="about"></a>
                <section className="body-content about-swoc" id="about">
                    <div className="about-content col-lg-7">
                        <h3>About <span>CodeForGood</span></h3>
                        <p>
                            CodeForGood is an exciting hackathon event taking place on 29-230th April. This 12-hour event is 
                            designed to give attendees the opportunity to explore and learn how hackers build innovative ideas.
                        </p>
                        <p>
                            At CodeForGood, participants will have the chance to work with some of the leading experts in the field 
                            and discover new ways of approaching and building ideas. Whether you're an experienced developer or 
                            just starting out, this event is the perfect opportunity to learn and grow your skills.
                        </p>
                        <p>
                            Throughout the hackathon, attendees will have access to a range of resources and support to help them 
                            bring their ideas to life. 
                        </p>
                        <p>
                            From technical workshops and mentor sessions to networking events and competitions, there's something 
                            for everyone at CodeForGood.
                        </p>
                    </div>
                    <div className="about-vector">
                        {/* <img src="./img/about.png" /> */}
                        <img src="./img/github.gif" />
                    </div>
                </section>



                <section className="cards-bg-sec to-apply">
                    <div className="apply-sec body-content">
                        <h3 className="card__card__title">Registration</h3>
                        <div className="row">
                            {registerItems.map((item, index) => {
                                return (
                                    <div className="col-md-4 card-cover">
                                        <div className="h-100 to-apply-card card__card__body">
                                            <h5 className="card-title">{item.cardTitle}</h5>
                                            {/* <p className="card-text">{item.cardText}</p> */}
                                            {item.cardText.split("|").map((el) => {
                                                return (
                                                    <p className="card-text">
                                                        {el}
                                                    </p>
                                                );
                                            })}
                                            <div className="btn-apply">
                                                 {/* {item.cardTitle.toLowerCase() == "web 3.0 fellowship" ? */}
                                                    <Devfoliobutton></Devfoliobutton>

                                                    {/* // :
                                                    // (item.cardTitle.toLowerCase() == "punjab" ?
                                                    //     (<div
                                                            class="apply-button"
                                                            data-hackathon-slug="indiatourpunjab"
                                                            data-button-theme="light"
                                                        ></div>)
                                                        :
                                                        (<a href={item.applyLink} target="_blank"
                                                            className={item.applyStatus == "Apply" ? "" : "disabled"}
                                                            readonly>{item.applyStatus}
                                                        </a>) */}
                                                
                                                {/* {buttonUnique(item)} */}

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* <section className="event-together">
                    <div className="body-content">
                        <h3>This time we are together</h3>
                        <div className="together-logos">
                            <div className="logo-swoc">
                                <img src={"/img/logo-1-copy.png"} />
                            </div>
                            <span>+</span>
                            <div className="logo-cwoc">
                                <img src={"/img/logos/CatsInTech.png"} />
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* timeline */}
                {/* <section className="timeline">
                    <a name="timeline"></a>
                    <div className="timeline-head">
                        <h3 className="card__card__title">Program Timeline</h3>
                    </div>
                    <ul>
                        {timelineItems.map((item, index) => {
                            return (
                                <li>
                                    <time>{item.timelineDate}</time>
                                    <div className="card__card__body timeline-item">
                                        <span className="time-responsive">{item.timelineDate}</span>
                                        {item.timelineText}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                <section className="overview-section">
                    <div className="body-content overview-container">
                        <div className="overview-vector">
                            <img src="./img/overview.svg" />
                        </div>
                        <div className="overview-content">
                            <h3>Overview</h3>
                            <p>
                                Script Winter Of Code is the 3 month long open source program by
                                Social India , with the aim to introduce more and more
                                people to the world of Open source. In this program all the selected
                                participants will get a chance to work on various exciting projects
                                under the guidance of experienced Mentors.
                            </p>
                            <p>
                                Participants can select the project based on their interest and tech
                                stack , and can communicate with mentors and project admin to know the
                                project better during the Community bonding Period .
                            </p>
                        </div>
                    </div>
                </section> */}

                {/* <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">
                            Prizes And Rewards
                        </h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {prizeItems.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.prizeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">
                                                    {item.prizeTitle}
                                                    {item.provider && (
                                                        <>
                                                            <br />
                                                            <span class="provider">{item.provider}</span>
                                                        </>
                                                    )}
                                                </h3>
                                                <ul>
                                                    {item.prizeDescription.split("|").map((el) => {
                                                        return (
                                                            <li>
                                                                <p className="card-text">{el}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                {item.more && (
                                                    <a
                                                        target="_blank"
                                                        href={item.prizeLink}
                                                        className="learn-more"
                                                    >
                                                        {item.more}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </section> */}

                <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">
                            Themes
                        </h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {themes.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.themeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">
                                                    {item.themeType && (
                                                        <>
                                                            <br />
                                                            <span class="provider">{item.themeType}</span>
                                                        </>
                                                    )}
                                                </h3>
                                                <ul>
                                                    {item.prizeDescription.split("|").map((el) => {
                                                        return (
                                                            <li>
                                                                <p className="card-text">{el}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                {item.more && (
                                                    <a
                                                        target="_blank"
                                                        href={item.prizeLink}
                                                        className="learn-more"
                                                    >
                                                        {item.more}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">Prizes And Rewards</h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {prizeItems.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.prizeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">{item.prizeTitle}</h3>
                                                <p className="card-text">{item.prizeDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>

                    <div className="about-vector">
                        <img src={"/img/trophy2-min.jpg"} />
                    </div>
                </section> */}

                <section className="sponsors-section">
                    <a name="sponsors"></a>
                    {/* <div className="body-content powered-conatiner">
                        <h3 className="">Powered by</h3>
                        <img src={"/img/logos/Devfolio_Logo.svg"} />
                    </div> */}
                    <div className="body-content sponsors-conatiner">
                        <h3 className="sponsors-title">Our Sponsors</h3>
                        <br />
                        <div className="community">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Platinum Sponsors</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid" style={{ "justify-content": "center" }}>
                                            {PlatSponsors.map((item, index) => {
                                                return (
                                                    <div className="col-md-4 col-sm-6 img-div">
                                                        <a href={item.sponsorLink} target="_blank">
                                                            <img className="sponsor-img" src={item.sponsorImg} />
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h3>Gold Sponsors</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid" style={{ "justify-content": "center" }}>
                                            {GoldSponsors.map((item, index) => {
                                                return (
                                                    <div className="col-md-4 col-sm-6 img-div">
                                                        <a href={item.sponsorLink} target="_blank">
                                                            <img className="sponsor-img" src={item.sponsorImg} />
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            {/* <h3>Sponsors</h3>
                            <div className="row row-img grid mb-4">
                                {Sponsors.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            {/* <h3>Community Partners</h3>
                            <div className="row row-img grid mb-4">
                                {CommunityPartners.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            {/* <div className="btn-container p-4" style={{ "text-align": "center" }}>
                                <br />
                                <a
                                    href="https://drive.google.com/file/d/1po-yevUP5dweJiNdvuiEhsi_IyKlOub8/view?usp=sharing"
                                    target="_blank"
                                    className="btn btn-info btn-lg"
                                >Sponsor Us
                                </a>
                            </div> */}
                        </div>
                    </div>

                </section>

                <section className="faqs">
                    <h3 className="faq-title">FAQs</h3>

                    <div className="body-content">
                        {FAQs.map((item, index) => {
                            return (
                                <div className="faq-item">
                                    <input type="checkbox" id={item.questionId} name="q" className="question-input" />
                                    <label for={item.questionId} className="question">
                                        <div className="plus">+</div>
                                        {item.questionText}
                                    </label>
                                    <div className="answers">
                                        {item.answerText}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </>
        );
    }
}

export default Home;