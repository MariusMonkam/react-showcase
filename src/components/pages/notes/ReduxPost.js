import React, { useState, useEffect, useReducer } from 'react';

//
// Goal: Setup support for adding and removing posts
//
// 1. Setup and dispatch an ADD_POST action
// 2. Setup and dispatch a REMOVE_POST action
// 3. Test your work!

const postsReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_POSTS':
            return action.posts
        case 'ADD_POST':
            return [
                ...state,
                { title: action.title, body: action.body }
            ]
        case 'REMOVE_POST':
            return state.filter((post) => post.title !== action.title )
        default:
            return state
    }
}

const ReduxPost = () => {
    const [posts, dispatch] = useReducer(postsReducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addPost = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_POST',
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    const removePost = (title) => {
        dispatch({
            type: 'REMOVE_POST',
            title
        })
    }

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem('posts'))

        if (posts) {
            dispatch({ type: 'POPULATE_POSTS', posts })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <Post post key={post.title} post={post} removePost={removePost}/>
            ))}
            <p>Add posts</p>
            <form onSubmit={addPost}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add post</button>
            </form>
        </div>
    )
}

const Post = ({ post, removePost }) => {
    useEffect(() => {
        console.log('Setting up effect!')

        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => removePost(post.title)}>x</button>
        </div>
    )
}

