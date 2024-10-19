import { Button } from "react-bootstrap";


const CommonButton = ({variant,handleSubmit,type,label}) => {
    return (
        <Button type ={type} variant ={variant} onClick={handleSubmit} className="bg-second bg-text bg-border-orange" >{label}</Button>      
    );
}
export default CommonButton;