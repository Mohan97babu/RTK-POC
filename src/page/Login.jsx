import { Card, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../OneStop-removebg.png";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/loginSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector((state) =>state.auth.status);
    const tokens = useSelector((state) => state.auth.data);
    const error = useSelector((state) => state.auth.error); 

    useEffect(() => {
        if (status === "succeeded" && tokens?.accessToken) {
            localStorage.setItem('accessToken', tokens.accessToken);
            localStorage.setItem('refreshToken', tokens.refreshtoken);
            navigate("/bill")
        }
    }, [status, tokens]);
    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }, []);

    const onSubmit = async (data) => {
     dispatch(login(data));
     console.log(tokens,"token",status,"status",error,"error");
     if(status === "succeeded" && tokens?.accessToken) {
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken',tokens.refreshtoken);

    }
    };


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center  " >
            <Row className=" d-flex justify-content-center align-items-center w-25 ">
                <Col sm={12} md={12} lg={6} xl={6} className="w-100">
                    <Card className="bg-second bg-text" >
                        <div className="text-center mt-3 px-3 bg-second">
                            <Card.Img variant="top" src={logo} width={20} height={70} />
                        </div>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <InputField
                                    label={"E-Mail"}
                                    type={"text"}
                                    placeholder={"Enter the E-Mail"}
                                    name={"username"}
                                    register={register}
                                    errors={errors}
                                />
                                <InputField
                                    label={"Password"}
                                    type={"password"}
                                    placeholder={"Enter the Password"}
                                    name={"password"}
                                    register={register}
                                    errors={errors}
                                />
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary mt-3 bg-second bg-text bg-border-orange">Submit</button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
