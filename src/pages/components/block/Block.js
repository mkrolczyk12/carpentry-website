import React from 'react'

const Block = ({mainText, subText}) => {

    return(
        <div className="block">
            <h1 className="block__main-text">{mainText}</h1>
            <p className="block__sub-text">{subText}</p>
        </div>
    )
}

export default Block