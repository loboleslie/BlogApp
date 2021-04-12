import Table from "react-bootstrap/Table";

function Comments(props) {
    console.log(props);
  const commentList = props.comments.map(function (comment) {
    return (
      <tbody key={comment.id}>
        <tr>
          <td>{comment.postId}</td>
          <td>{comment.id}</td>
          <td>{comment.name}</td>
          <td>{comment.email}</td>
          <td>{comment.body}</td>
        
        </tr>
      </tbody>
    );
  });

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>            
            <th>Post ID</th>
            <th>Comment ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        {commentList}
      </Table>
    </div>
  );
}

export { Comments };
