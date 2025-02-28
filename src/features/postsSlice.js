import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const initialState = {
    posts: [],
}

export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId) => {
        const res = await fetch(`${BASE_URL}/posts/user/${userId}`);
        const data = await res.json();
        return data;
    }
)

export const savePost = createAsyncThunk(
    "posts/savePost",
    async (postContent) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decode = jwtDecode(token);
            const userId = decode.id;

            const data = {
                title: "Post Title",
                content: postContent,
                userId: userId,
            };

            const response = await axios.post<Post>(`${BASE_URL}/posts`, data);
            return response.data;
        }
        throw new Error("No auth token found");
    }
)

const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        builder.addCase(savePost.fulfilled, (state, action) => {
            if (action.payload)
                state.posts = [action.payload, ...state.posts];
        })
    }
});

export default postsSlice.reducer;