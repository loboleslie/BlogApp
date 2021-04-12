const getAllPosts = async () => {
    let data =  await fetch('http://localhost:3000/getallposts');
    return data;
}

export {
    getAllPosts
}