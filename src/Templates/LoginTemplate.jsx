import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const LoginTemplate = () => {
    return (
        <Row className="App w-100  m-0">
            <Col xs={12} className='pe-0 m-0'>
                <Outlet />
            </Col>
        </Row>
    );
}
export default LoginTemplate;