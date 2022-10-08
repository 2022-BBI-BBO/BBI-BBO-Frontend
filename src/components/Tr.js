import React from "react";
import Td from "./Td";

/*const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Posts;*/

const Tr = ({posts, loading}) => {
    return (
        <tbody>
            {loading && <div> loading... </div>}
            {
                posts.map(item => {
                    return (
                        <Td key={item.id} item={item} />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;