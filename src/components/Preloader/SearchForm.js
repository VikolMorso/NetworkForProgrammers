import React from "react";
import { Field, reduxForm } from "redux-form";
import { MaxLengthCreator, RequiredField } from "../../validators/validator1";

import { Input } from "./Textarea";

let maxLength = MaxLengthCreator(20);

function Search(props) {
  
  let onSubmit = (user) => {
    props.SearchUser(user);
  };

  return (
    <div>
      <p>Search</p>
      <SearchFormRedux onSubmit={onSubmit} />
      
    </div>
  );
}
const SearchForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
       
        name="searchUser"
        component={Input}
        validate={[RequiredField, maxLength]}
      ></Field>
      <br />
      <button >Search</button>
    </form>
  );
};
const SearchFormRedux = reduxForm({ form: "search" })(SearchForm);
export default Search;
