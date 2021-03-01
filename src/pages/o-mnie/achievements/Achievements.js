import React, {useEffect, useRef} from 'react'

const Achievements = () => {
    let observer = useRef({});

    useEffect(() => {
        const inViewport = (entries, observer) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
            });
        };

        observer = new IntersectionObserver(inViewport);
        const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

        // Attach observer to every [data-inviewport] element:
        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
            observer.observe(EL, obsOptions);
        });
    }, [])

    return(
        <section className="about-me__achievements">
            <div id="block1" className="achievements-block" data-inviewport="scale-in">
                <h1 className="achievements-block__main-text" style={{marginTop: "-45px"}}>56</h1>
                <p className="achievements-block__sub-text">Lat doświadczenia</p>
            </div>
            <div id="trait1" className="about-me__achievements-trait-section">
                <h1 className="about-me__achievements-trait-section-title">Perfekcja</h1>
                <p className="about-me__achievements-trait-section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                        Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
            <div id="trait2" className="about-me__achievements-trait-section">
                <h1 className="about-me__achievements-trait-section-title">Zaufanie</h1>
                <p className="about-me__achievements-trait-section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div id="block2" className="achievements-block" data-inviewport="scale-in">
                <h1 className="achievements-block__main-text"><h2 className="achievements-block__main-text-sub-text">Ponad</h2>35</h1>
                <p className="achievements-block__sub-text">Wykonanych projektów</p>
            </div>
        </section>
    )
}

export default Achievements