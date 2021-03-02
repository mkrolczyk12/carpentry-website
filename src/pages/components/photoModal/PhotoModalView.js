import React from "react";

const PhotoModalView = ({modalId, id}) => {
    return(
        <div id={modalId} className="modal" title="Zamknij okno">
            <span className="modal__close-btn">&times;</span>
            <section className="modal__content" id={id}>
                <h1
                    id="modal-title"
                    className="modal__content-title"
                >
                </h1>
                <div
                    id="modal-description"
                    className="modal__content-description"
                />
            </section>
        </div>
    )
}

export default PhotoModalView