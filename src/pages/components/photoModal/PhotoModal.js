import React, {useEffect} from "react";
import PhotoModalView from "./PhotoModalView";

const openModal = (modalId, title, description) => {
    const modal = document.getElementById(modalId);
    const modalContentTitle = document.getElementById("modal-title");
    const modalContentDescription = document.getElementById("modal-description");

    modal.style.display = "block";
    modalContentTitle.innerText = title;
    modalContentDescription.innerHTML = description;
}

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);

    modal.style.display = "none";
}

const PhotoModal = ({modalId, id, title, description}) => {

    useEffect(() => {
        const img = document.getElementById(id);
        img.addEventListener('click', () => openModal(modalId, title, description))
        // close button
        const span = document.getElementsByClassName("modal__close-btn")[0];
        span.addEventListener('click', () => closeModal(modalId))

        return () => {
            img.removeEventListener('click', () => {})
            span.removeEventListener('click', () => {})
        }
    },[id])

    return(
        <PhotoModalView
            modalId={modalId}
            id={id}
        />
    )
}

export default PhotoModal