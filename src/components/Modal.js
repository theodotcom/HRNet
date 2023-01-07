import React from 'react'
import '../css/modal.css'

export function Modal(props) {
    const { isOpen, onClose } = props

    if (!isOpen) {
        return null
    }

    return (
        <div
            id="myModal"
            className="modal"
            style={{ display: 'block' }}
            onClick={onClose}
        >
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <p>Merci pour la creation de votre profil &#129299;</p>
            </div>
        </div>
    )
}
