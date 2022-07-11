import React from 'react'
import ReactDom from 'react-dom'
import './modal.scss'

export default function Modal({ title = "", isOpen, children, closeModal, rest }) {
    if (!isOpen) return null

    return ReactDom.createPortal(
        <>
            <div className='modal-overlay' onClick={closeModal} />
            <div className='modal'>
                <div className='modal-header'>
                    <div className='modal-title'>
                        {title}
                    </div>
                    <div className='modal-btn-wrap'>
                        <div className="modal-btn modal-minimize">_</div>
                        <div className="modal-btn modal-fullscreen">◻</div>
                        <div className="modal-btn modal-close" onClick={closeModal}>X</div>
                    </div>
                </div>
                <div className='modal-content-wrap'>
                    <div className='modal-content'>
                        {children}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}