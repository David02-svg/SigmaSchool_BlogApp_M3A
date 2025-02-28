import { Card } from "react-bootstrap";

const BlogCard = ({id, handleOpen, thumbnail, header, author}) => {
    return (
        <Card className="my-3" style={{width: '14rem', border: "none"}} onClick={handleOpen(id)}>
            <Card.Img className="mb-2" src={`${thumbnail}`}/>
            <Card.Body style={{padding: "0"}}>
                <Card.Title>{header}</Card.Title>
                <Card.Text>{author}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BlogCard;