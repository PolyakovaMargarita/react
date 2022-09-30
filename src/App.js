import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [postsJs, setPostJs] = useState([
    {id: 1, title: "JavaScript 1", body: "JS - язык программирования"},
    {id: 2, title: "JavaScript 2", body: "JS - язык программирования"},
    {id: 3, title: "JavaScript 3", body: "JS - язык программирования"},
  ])

  const createPost = (newPost) => {
    setPostJs([...postsJs, newPost])
  }

  const removePost = (post) => {
    setPostJs(postsJs.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {postsJs.length !== 0
        ? <PostList remove={removePost} posts={postsJs} title='Post of JS'/>
        : <h1 style={{textAlign: 'center'}}>Posts don`t find</h1>
      }
    </div>
  );
}

export default App;
