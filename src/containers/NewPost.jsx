import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends Component {
    renderField(field) {
        const { touched, error } = field.meta;
        // alternatively...
        // const { meta: { touched, error } } = field;
        const formClass = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={formClass}>
                <label>{field.label}</label>
                <input
                    type={field.type}
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }
    
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    // Required props
                    name="title"
                    component={this.renderField}
                    // Arbitrary props
                    label="Title"
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

const validate = (values) => {
    // Always create empty errors object
    const errors = {};
    // Validate values and attach errors to errors object
    if (!values.title) {
        errors.title = "Please enter a title";
    }
    if (!values.categories) {
        errors.categories = 'Please enter some categories';
    }
    if (!values.content) {
        errors.content = 'Please enter some content';
    }
    // Return errors object, redux-form assumes input invalid if obj not empty
    return errors;

}

export default reduxForm({
    validate,
    form: 'NewPostForm'
})(NewPost);