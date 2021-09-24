import './App.scss';
import { useState, useEffect } from 'react';
import Topic from './components/Topic';
import Details from './components/Details';
import User from './components/User';
import Header from './components/Header';

const App = () => {
  const url = "http://localhost:3002/posts/";

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData(){
    const getPosts = await fetch(url).then(res => res.json()).then(data => setPosts(data))
    }
    fetchData();
  }, []);

  const [post, setPost] = useState();
  const getPostWithId = async id =>{
    const getPost = await fetch(`${url}${id}`).then(res => res.json()).then(data => setPost(data))
    console.log(post)
  }

  return (
    <div className="App">
      <Header />
      <br/>
      <br/>
      <div className="row">
        <div className="column-35"><Topic posts={posts} getPostWithId={getPostWithId}/></div>
        <div className="column-35"><Details post={post} /></div>
        <div className="column-30"><User /></div>
      </div>
    </div>
  );
}

export default App;
