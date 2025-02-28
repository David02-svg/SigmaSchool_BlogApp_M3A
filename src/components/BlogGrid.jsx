import BlogCard from "./BlogCard";

const BlogGrid = ({blogs}) => {
    const handleOpen = (id) => {

    }

    return (
        < >
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

        </>
    )
}

export default BlogGrid;