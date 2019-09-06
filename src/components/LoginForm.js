import React from 'react';
import { Field, Form, Formik } from 'formik';

import CitiesField from './CitiesField';
import CountryField from './CountryField';

const initialValues = {
  country: '',
  city: '',
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log('Submitted: ', values);
      }}
    >
      {({ values, handleSubmit, handleChange }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div className='form-group row justify-content-center'>
              <label className='col-sm-1' htmlFor="country">Country:</label>
              <div className="col-sm-1">
                <Field name='country' component={CountryField} onChange={handleChange}/>
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-sm-1' htmlFor="city">City:</label>
              <div className="col-sm-1">
                <Field name='city' component={CitiesField} onChange={handleChange} values={values}/>
              </div>
            </div>
            {
              (values.country !== '' && values.city !== '') ?
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
                :
                <button type='submit' className='btn btn-primary' disabled>
                  Submit
                </button>
            }
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
