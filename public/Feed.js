import React from 'react'
import { useState, useEffect } from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import db from './firebase';
import {collection, query, onSnapshot, timestamp, orderBy, desc} from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const sectionsCollectionRef = collection(db, 'posts'); 

    const sectionsQueryRef = query(sectionsCollectionRef, orderBy('timestamp', 'desc'))



   // const q = query(collection(db, "posts").orderBy('timestamp', 'desc'))
   const unsub = onSnapshot(sectionsQueryRef, (querySnapshot) => {
   setPosts("data", querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    })
  }, []);

 // useEffect(() => { 
//db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
//  setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
//  ))
//  }, []);
  return (
    <div className='feed'>
        <StoryReel />
       <MessageSender />
        {posts.map((post) => (
          <post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          />

        ))}
        </div>
  );
}

export default Feed