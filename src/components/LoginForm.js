import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';

import CitiesField from './CitiesField';
import CountryField from './CountryField';

const initialValues = {
  country: '',
  city: '',
};

const LoginForm = () => {
  const [submittedValues, setSubmittedValues] = useState(undefined);

  return (
    <Formik
      initialValues={initialValues}
    >
      {({ values, handleChange, resetForm }) => {
        return (
          <Form onSubmit={e => {
            e.preventDefault();
            setSubmittedValues(values);
            resetForm(initialValues);
          }}>
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
            {
              submittedValues ?
                <div className='mt-5 font-weight-bold'>
                  <span className='text-success'>Submitted:</span>
                  {JSON.stringify(submittedValues)}
                </div> : null
            }
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
