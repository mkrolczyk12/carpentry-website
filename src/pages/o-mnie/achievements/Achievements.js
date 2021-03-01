import React, {useEffect, useRef} from 'react'

import AchievementsView from "./AchievementsView";

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
        <AchievementsView/>
    )
}

export default Achievements