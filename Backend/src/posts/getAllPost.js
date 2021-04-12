import { json } from "express";
import fetch from "node-fetch";

const getAllPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  return data;
};

const getComments = async (id) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  return data;
};

export { getAllPosts, getComments };
