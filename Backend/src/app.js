const express = require('express');
const app = express();
const port = 3001;
import { getAllPosts, getComments, getAllComments} from './posts/getAllPost.js';
import cors from 'cors';

// Enable cors
app.use(cors())

//End point to Get all posts
app.get('/getallposts',  async (req, res)  =>  {
  
  //Get All the posts
  let posts =  await getAllPosts();

  //Get Comments for all the posts
  await Promise.all(
    posts.map(async (post) => {
      const response = await getComments(post.id);     
      post.comments = response
    })
  );

  res.send(posts);
})


app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})