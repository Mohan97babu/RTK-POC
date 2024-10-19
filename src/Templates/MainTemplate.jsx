import { Col, Row } from "react-bootstrap";
import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const MainTemplate = () => {
    const [page, setPage] = useState(false);
    return (
      <>
        <div className='my-0 fixed-top'>
          <NavBar setPage={setPage} />
        </div>
        <Row className="App w-100 mt-2 m-0">
          <Col xs={12} sm={12} md={12} lg={2} xl={2} className={`px-0 m-0 vh-100 position-fixed mt-5 d-none d-lg-block`}>
            <SideBar setPage={setPage} page={page} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={10} xl={10} className='pe-0 offset-lg-2 mt-5 '>
            <Outlet />
          </Col>
        </Row>
      </>
    );
}
export default MainTemplate;