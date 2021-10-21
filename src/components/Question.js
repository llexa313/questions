import './Question.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import store from "../store";
import { addTagFilter } from "../store/actionCreators/filters";

export default function QuestionComponent(props) {
  const [ showAnswer, setShowAnswer ] = useState(false);

  const onShowAnswerClick = () => {
    setShowAnswer(!showAnswer);
  }

  const onTagClick = tag => {
    store.dispatch(addTagFilter(tag));
  }

  return <li className="Question">
    <h3>{props.title}</h3>
    <p>
      <span className="text" dangerouslySetInnerHTML={{__html: props.text}} />
      <span className="tags">
        { props.tags.map(tag => <span key={tag} className='tag' onClick={() => onTagClick(tag) }>#{tag}</span> ) }
      </span>
    </p>
    <Button variant="contained" onClick={onShowAnswerClick}>{showAnswer ? 'Hide' : 'Show'} answer</Button>
    <p className={showAnswer ? '' : 'hidden'} dangerouslySetInnerHTML={{__html: props.answer}} />
    {showAnswer}
  </li>;
}
