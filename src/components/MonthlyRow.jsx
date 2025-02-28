import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import React, { useState } from "react";
import { Row } from "react-bootstrap";

const MonthlyRow = ({year, month, summary, blogs}) => {
    const [show, setShow] = useState(false);
    const [blogId, setblogId] = useState(0);
    
    const handleOpen = (id) => {
        setblogId(id);
        setShow(true);
    }

    const isCurrentMonth = (month) => {
        const currentMonth = new Date().getMonth() + 1;
        if (month == currentMonth)
            return true;
        
        return false;
    }

    const monthIcon = () => {
        return (
            <div>
                <strong>{year}</strong>
                <div>{month} month</div>
            </div>
        )
    }

    return(
        < >
            {/* Last Month */}
            <Row>
                { isCurrentMonth(month)
                    ? (
                        <section>
                            {monthIcon()}
                            <p>{summary}</p>
                        </section>
                    )
                    : monthIcon()
                }
            </Row>
            <Row className="flex-nowrap" style={{marginRight:"0", marginLeft:"0"}}>
                {blogs.map((blog) => (
                    <BlogCard 
                        key={blog.id}
                        id={blog.id}
                        handleOpen={handleOpen}
                        thumbnail={blog.thumbnail}
                        header={blog.header}
                        author={blog.author}
                    />
                ))}
            </Row>
            { isCurrentMonth(month) 
                && (<div className="HorizontalLine"> Last Month </div>)}  
            
            <BlogModal
                show={show}
                onHide={() => setShow(false)}
                thumbnail={blogs[blogId].thumbnail}
                header={blogs[blogId].header}
                content={blogs[blogId].content}
            />
        </>
    )
}

export default MonthlyRow;