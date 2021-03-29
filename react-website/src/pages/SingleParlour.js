//import React from 'react';
import React, {Component, useEffect} from 'react';
//import PackageContainer from "../components/Package/PackageContainer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import defaultImg from '../images/trinitycasket.JPG';
import  {Link} from 'react-router-dom';
import {ParlourContext} from '../components/Parlour/context';
import Hero from "../components/Parlour/Hero";
import Banner from "../components/Parlour/Banner";
import styles from "../components/Parlour/parlour.module.css";
import StyledHero from "../components/Parlour/StyledHero";

export default class SingleParlour extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }
    }
    static contextType = ParlourContext;
    //componentDidMount(){}

    render() {
        const {getParlour} = this.context;
        const parlour = getParlour(this.state.slug);
        //console.log(parlour);
        if (!parlour){
            return <div className={styles.error}>
                <h3>no such parlour could be found</h3>
                <Link to='/parlour' className={styles.btnPrimary}>
                    Back to Parlour
                </Link>
            </div>
        };
        
        //destructure the object
        const {name,description,capacity,size,price,extras,images} = parlour;

        return(
            <>
                <Navbar />
                {/*
                <HeroSection HeroHeader="Check out our packages here."
                             HeroPara="Book with us right now."
                             getStartedButton="searchFilter"
                             scroll={true}/>
                */}
                {/* i can probably take away the img=parlour.images}
                and display a deafult image in singular parlour page
                as long as the page before i display the image for 
                individual parlour.
                in this page i just want to display the information 
                
                img={this.state.defaultBcg}
                change the default image at the top import*/}
                <StyledHero img={parlour.images}>
                    <Banner title={`${name} parlour`}>
                        <Link to="/parlour" className={styles.btnPrimary}>
                            Back to Parlour
                        </Link>
                    </Banner>
                    <h1>does this singular page work? {name}</h1>
                </StyledHero>

                <section className={styles.singleParlour}>
                    <div className={styles.singleParlourInfo}>
                        <article className={styles.desc}> 
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className={styles.info}>
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                        </article>
                    </div>

                </section>
                
            </>
        ) 
    }
}

