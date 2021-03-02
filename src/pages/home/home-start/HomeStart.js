import React, {useEffect, useRef} from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import HomeStartView from "./HomeStartView";

const scrollDown = (id) => {
    const ref = document.getElementById(id).scrollHeight
    window.scroll({
        left: 0,
        top: ref,
        behavior: "smooth"
    })
}

const HomeStart = () => {
    let ref = useRef({})

    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "home-start-image.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )
    // set imageData
    const imageData = data.indexImage.childImageSharp.fluid

    useEffect(() => {
        const inViewport = (entries, observer) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
            });
        };

        ref = new IntersectionObserver(inViewport);

        // Attach observer to every [data-inviewport] element
        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
            ref.observe(EL);
        });
    }, [])

    return(
        <HomeStartView
            image={imageData}
            scrollDown={scrollDown}
            id="home-start"
        />
    )
}

export default HomeStart