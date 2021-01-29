import React from 'react'

// Common components
import Block from "../../components/block/Block"

const Achievements = () => {
    return(
        <div className="about-me__achievements">
            <Block
                mainText="56"
                subText="Lat doświadczenia"
            />
            <div className="about-me__achievements-trait-section">
                <h1 className="about-me__achievements-trait-section-title">Perfekcja</h1>
                <p className="about-me__achievements-trait-section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                        Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
            <div className="about-me__achievements-trait-section">
                <h1 className="about-me__achievements-trait-section-title">Zaufanie</h1>
                <p className="about-me__achievements-trait-section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <Block 
                mainText="Ponad 35"
                subText="Wykonanych projektów"
            />
        </div>
    )
}

export default Achievements