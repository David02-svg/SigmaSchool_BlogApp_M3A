import { useDispatch, useSelector } from "react-redux";

import BlogGrid from "../components/BlogGrid";

const ProfilePage = () => {
    const posts = useSelector((store) => store.posts);
    const dispatch = useDispatch();

    //Fetch based on User
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.id;
            dispatch(fetchPostsByUser(userId));
        }
    }, [dispatch])

    return (
        < >
            <section>
                <h1>Author</h1>
                <p>Content</p>
            </section>
            <BlogGrid blogs={posts}/>
        </>
    )
}

export default ProfilePage;