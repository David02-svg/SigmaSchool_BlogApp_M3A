import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FormModal = ( { handleClose, editMode } ) => {
    const [postContent, setPostContent] = useState("");
    const [postHeader, setPostHeader] = useState("");
    const dispatch = useDispatch();

    const inspectEmptyString = () => {
        if (!postContent.trim().length || !postHeader.trim().length)
            return false;
        return true;
    }

    const handleSave = (e) => {
        e.preventDefault();

        if (!inspectEmptyString) {
            dispatch(savePost(postContent, postHeader));
            setPostContent("");
            setPostHeader("");
            handleClose();
        }
    }

    return (
        < >
            <div>
                <h1>Header</h1>
                <form onSubmit={handleSave}>
                    <input 
                        type="text"
                        placeholder="Insert your header"
                        onChange={(e) => setPostHeader(e.target.value)}
                    />
                    <textarea
                        placeholder="What is happening?!"
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        </>
    );
}

export default FormModal;