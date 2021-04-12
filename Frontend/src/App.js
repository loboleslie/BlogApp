import "./App.css";
import { useEffect, useState } from "react";
import { Posts } from "./components/Posts/Posts";


function App() {
  const [posts, setPosts] = useState([]);

  
    

  useEffect(() => {
    async function getAllPosts() {
      await fetch("http://localhost:3001/getallposts")
        .then((response) => response.json())
        .then((results) => {
          console.log(results);
          setPosts(() => {
            return results;
          });
        });
    }

    getAllPosts();
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
     
    </div>
  );
}

export default App;
