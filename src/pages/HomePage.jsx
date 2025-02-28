// import { fetchPostsByUser, Post, PostsState } from "../features/postsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import MonthlyRow from "../components/MonthlyRow";

const HomePage = () => {
    //User Profile
    const [posts, setPosts] = useState([
        {
            id: 12,
            year: 2015,
            month: 2,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id er",
            blog: [{
                id: 12,
                header: "Blog Header",
                thumbnail: "https://picsum.photos/id/237/200/",
                author: "John Doe",
            },
           {
              id: 13,
              header: "Blog Header",
              thumbnail: "https://picsum.photos/id/237/200/",
              author: "John Doe",
          }]
        }, 
        {
            id: 13,
            year: 2024,
            month: 12,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id er",
            blog: [{
                id: 12,
                header: "Blog Header",
                thumbnail: "https://picsum.photos/id/237/200/",
                author: "John Doe",
            }]
        },
        {
            id: 15,
            year: 2024,
            month: 12,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id er",
            blog: [{
                id: 12,
                header: "Blog Header",
                thumbnail: "https://picsum.photos/id/237/200/",
                author: "John Doe",
            }]
        }
    ]);
    // const posts = useSelector((store) => store.posts);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    //Fetch all include user
    // useEffect(() => {
    //     const token = localStorage.getItem("authToken");
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         const userId = decodedToken.id;
    //         dispatch(fetchPostsByUser(userId));
    //     }
    // }, [dispatch])

    // The Posts require filter to generate each array blog. Based on Year and Month.
    return(
        < >
            {/* FreshReview */}
            {posts.map((post) => {
                return <MonthlyRow key={post.id} year={post.year} month={post.month} summary={post.summary} blogs={post.blog}/>
            })}
        </>
    )
}

export default HomePage;