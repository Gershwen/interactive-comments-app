import React from "react";
import VoteButtons from "./votingbuttons";
import ReplyButton from "./replybutton";

const Comments = ({handleReplyButton, handleShow, total, handleAddScore, handleMinusScore, data }) => {
  // Complete adding and minus functions

  //use map to iterate through data variable and store data inside elements
  return (
    <div>
      {data.comments.map((dat) => (
        <div key={dat.id}>
          <div>
            <div>
              <img src={dat.user.image.png} alt={dat.user.username} />
              <h1>{dat.user.username}</h1>
              <p>{dat.createdAt}</p>
            </div>
            <p>{dat.content}</p>
            <div>
            <VoteButtons
              total={total}
              score={dat.score}
              handleAddScore={handleAddScore}
              handleMinusScore={handleMinusScore}
            />
            <ReplyButton handleReplyButton={()=>handleReplyButton(dat.id)} />
            </div>
          </div>

          <div>
            {dat.replies.map((reply) => (
              <div key={reply.id}>
                <div>
                  <img src={reply.user.image.png} alt="Reply Pro Pic" />
                  <h1>{reply.user.username}</h1>
                  <p>{reply.createdAt}</p>
                </div>

                <p>{reply.content}</p>
                <div>
                <VoteButtons
                  total={total}
                  score={reply.score}
                  handleAddScore={handleAddScore}
                  handleMinusScore={handleMinusScore}
                />
                <ReplyButton handleReplyButton={()=>handleReplyButton(reply.id)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
