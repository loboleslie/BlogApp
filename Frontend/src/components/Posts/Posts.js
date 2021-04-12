import Table from "react-bootstrap/Table";
import { Comments } from "../Comments/Comments";


function Posts(props) {
  const postsList = props.posts.map(function (post) {
    return (
      <tbody key={post.id}>
        <tr>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
       
        <tr>
          <td colspan="4">
            <Comments comments={post.comments} />
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {postsList}
      </Table>
    </div>
  );
}

export { Posts };
