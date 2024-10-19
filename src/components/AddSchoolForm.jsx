import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Form } from "react-bootstrap";
import CommonButton from "./CommonButton";
import { useEffect } from "react";

const AddSchoolForm = ({ handleSubmit, selectedSchool }) => {
    const { register, formState: { errors }, handleSubmit: formSubmit, reset } = useForm();
    
    useEffect(() => {
        if (selectedSchool) 
            reset(selectedSchool)
    }, [selectedSchool, reset])
    const onSubmit = (data) => {
        console.log(data, "form submit");
        handleSubmit(data);
        reset();
    }
    return (
        <Form onSubmit={formSubmit(onSubmit)}>
            <InputField name={"name"} label={"Name"} type={"text"} placeholder={"Enter the Name"} register={register} errors={errors} />
            <InputField name={"address"} label={"Location"} type={"text"} placeholder={"Enter the Location"} register={register} errors={errors} />
            <hr className='px-0' />
            <div className="text-end px-3">
                <CommonButton type="submit" variant={"primary"} label="Submit" />
            </div>
        </Form>
    )
}
export default AddSchoolForm;