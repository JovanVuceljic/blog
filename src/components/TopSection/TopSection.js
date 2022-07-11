import { useState } from "react";
import Modal from "../Modal/Modal";
import "./topSection.scss";

const TopSection = () => {

    const [isVisible, setVisible] = useState(true);
    const [isOpenModal, setOpenModal] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');
    
    const handleCloseAppMessage = () => setVisible(false)
    const handlePopUp = () => setOpenModal(true)
    const closeModal = () => setOpenModal(false)
    const handlePostTitle = (e) => setPostTitle(e.currentTarget.value)
    const handlePostText = (e) => setPostText(e.target.value)

    const handleSubmit = e => {
        e.preventDefault() 
        console.log(postTitle, postText)
    }

    return (
        <section className="top-section">
            <h1>Welcome to My Blog</h1>
            <div className={`app-messages ${isVisible ? 'visible' : ''}`}>
                <span className="btn-close" onClick={handleCloseAppMessage}>X</span>
                <p>Container for showing application messages</p>
            </div>
            <div className="btn-wrap">
                <button className="btn" onClick={handlePopUp}>Add post</button>
            </div>
            <Modal title={"Add/Edit blog post"} isOpen={isOpenModal} closeModal={closeModal}>
                <form onSubmit={handleSubmit}>
                    <div className="input-item">
                        <label>Title</label>
                        <div className="input-wrap">
                            <input type="text" name="title" placeholder="Title of the post" value={postTitle} onChange={(e) => handlePostTitle(e)} />
                        </div>
                    </div>
                    <div className="input-item">
                        <label>Text</label>
                        <div className="input-wrap">
                            <textarea name="text" placeholder="Text of the post" value={postText} onChange={(e) => handlePostText(e)} />
                        </div>
                    </div>
                    <div className="modal-btn-wrap">
                        <button className="btn">Post</button>
                        <button className="btn" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </section>
    )
}


export default TopSection
