import { useState, useEffect } from "react";
import "./App.css";
import Data from "./data.json";
import Comments from "./components/comments";
import ReplyForm from "./components/replyform";

const App = () => {
  //storing data from data.json
  //displays data onload
  const [data, setData] = useState(Data);
  //replies variable holds all replies
  const [replies, setReplies] = useState([]);
  //storing votes in below variable.
  const [addVotes, setAddVotes] = useState(1);
  const [minusVotes, setMinusVotes] = useState(-1);
  const [total, setTotal] = useState();


  // event handler that makes the upvote button add to existing votes
  const handleAddScore = (currentscore) => {
    //storing the score inside currentVote variable
    let currentVote = currentscore;

    setAddVotes(() => addVotes + 1);
    setTotal(() => currentVote + addVotes + minusVotes);
  };

  // event handler that makes the downvote button subtract from existing votes
  const handleMinusScore = (currentscore) => {
    let currentVote = currentscore;

    setMinusVotes(() => minusVotes - 1);

    setTotal(() => currentVote + minusVotes + addVotes);
  };

  //event handler that allows reply button to reveal ReplyForm.

const handleReplyButton = (key)=>{
  
  //this function should get each specific ID
console.log(key)
}


  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <Comments
        total={total}
        handleAddScore={handleAddScore}
        handleMinusScore={handleMinusScore}
        data={data}
        handleReplyButton={handleReplyButton}
    
      />
      <ReplyForm />
    </main>
  );
};

export default App;

//each votes button must count individual scores
