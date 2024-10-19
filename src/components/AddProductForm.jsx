import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CommonButton from './CommonButton';
import InputField from './InputField';

const AddProductForm = ({ handleSubmit }) => {
    const { register, handleSubmit: formSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const product = {
            title: data.title,
            price: parseFloat(data.price),
            category: data.category,
            description: data.description,
            image: data.image,
            rating: {
                rate: parseFloat(data.rate),
                count: parseInt(data.count, 10)
            }
        };

        console.log("Submitting product:", product);
        handleSubmit(product);
        reset(); 
    };

    return (
        <Form onSubmit={formSubmit(onSubmit)} >
            <InputField 
                label="Title"
                type="text"
                placeholder="Enter product title"
                register={register} 
                name="title"
                errors={errors} 
            />
            <InputField
                label="Price"
                type="number"
                placeholder="Enter product price"
                register={register}
                name="price"
                errors={errors}
            />
            <InputField
                label="Category"
                type="text"
                placeholder="Enter product category"
                register={register}
                name="category"
                errors={errors}
            />
            <InputField
                label="Description"
                type="textarea"
                placeholder="Enter product description"
                register={register}
                name="description"
                errors={errors}
            />
            <InputField
                label="Image URL"
                type="text"
                placeholder="Enter image URL"
                register={register}
                name="image"
                errors={errors}
            />
            <InputField
                label="Rating"
                type="number"
                placeholder="Enter rating (rate)"
                register={register}
                name="rate"
                errors={errors}
            />
            <InputField
                label="Count"
                type="number"
                placeholder="Enter count"
                register={register}
                name="count"
                errors={errors}
            />
         <hr className='px-0'/>
            <div className='text-end px-3'>
                <CommonButton type="submit" variant="primary" label="Submit" />
            </div>
        </Form>
    );
};

export default AddProductForm;
