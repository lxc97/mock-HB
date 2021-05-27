import React from "react";
import AvatarInfo from "./AvatarInfo";

function Comment(props) {
  const { name, created_at, content} = props;

  return (
    <>
      <AvatarInfo name={name} created_at={created_at} />
      <p>{content}</p>
    </>
  );
}

export default Comment;
