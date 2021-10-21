import React from "react";
import { connect } from "react-redux";

import Question from './Question';
import store from "../store";
import allQuestionsChanged from "../store/actionCreators/questions";

class QuestionsComponent extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    fetch("/api/questions")
      .then(response => response.json())
      .then(json => {
        store.dispatch(allQuestionsChanged(json));
      });
  }

  hasQuestionTags(q) {
    const filter = this.props.filteredTags;
    return filter.length === 0 || filter.reduce((acc, f) => {
      return acc || q.tags.includes(f);
    }, false)
  }

  render(){
    return (
      <ol>
        {this.props.questions
          .filter(q => this.hasQuestionTags(q))
          .map(question => <Question key={question.title} {...question} />)}
      </ol>
    )
  }
}

export default connect(
  state => ({
    filteredTags: state.filters.tags,
    questions: state.questions.all
  })
)(QuestionsComponent);
