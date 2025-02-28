import { Modal } from "react-bootstrap";

const BlogModal = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            centered
        >
            <Modal.Header closeButton>
                <img src={props.thumbnail}/>
                <h1>{props.header}</h1>
            </Modal.Header>
            <Modal.Body>
                <p>{props.content}</p>
            </Modal.Body>
        </Modal>
    )
}

export default BlogModal;