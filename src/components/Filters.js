import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import store from "../store";

import { tagsFilterChanged } from "../store/actionCreators/filters";
import {connect} from "react-redux";

class FiltersComponent extends React.Component{
  constructor(){
    super();
  }

  onTagsChange(e, values) {
    store.dispatch(tagsFilterChanged(values));
  }

  getAllTags(questions = []) {
    return questions
      .reduce((acc, q) => acc.concat(q.tags), [])
      .filter((value, i, tags) => tags.indexOf(value) === i) // get only uniq
  }

  render(){
    return (
      <div className='Filters'>
        <Autocomplete
          multiple
          value={ this.props.selectedTags }
          onChange = { this.onTagsChange }
          options = { this.getAllTags(this.props.questions) }
          sx = {{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Filter tags" />}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    questions: state.questions.all,
    selectedTags: state.filters.tags,
  })
)(FiltersComponent);

