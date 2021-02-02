import React from "react";

const KeyFeatures = () => {
    return(
        <section className="offer__key-features">
            <div className="offer__key-features-content">
                {features.map((each, index) => (
                    <div className="offer__key-features-content-item" key={index}>
                        <h1 className="offer__key-features-content-item-title">{each.title}</h1>
                        <p className="offer__key-features-content-item-description">{each.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default KeyFeatures

const features =
[
    {
        title: "Wycena",
        description: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
       title: "Cennik",
        description: "very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32"
    },
    {
        title: "Transport i dostawa",
        description: "over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
    }
]