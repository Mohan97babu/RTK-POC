import React from 'react';
import { Form } from 'react-bootstrap';

const InputField = ({ label, type, placeholder, register, name, errors }) => (
  <Form.Group controlId={name} className='px-3 my-1'>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      {...register(name,{required:`${name} is required`})}
    />
    {errors[name] && (
      <span className="text-danger text-capitalize">{errors[name].message}</span> 
    )}
  </Form.Group>
);

export default InputField;
