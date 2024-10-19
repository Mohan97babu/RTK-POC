import { Form } from "react-bootstrap";

const Select = ({ placeholder, options, onChange,value }) => {
    return (
        <Form.Select aria-label="Default select example" onChange={onChange} value={value}>
            <option value="" disabled selected>{placeholder}</option>
            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.label}
                </option>
            ))}
        </Form.Select>
    )
}
export default Select;