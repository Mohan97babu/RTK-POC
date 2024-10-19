import { Container, Navbar, Dropdown, Offcanvas } from "react-bootstrap";
import logo from "../OneStop-removebg.png";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalCommon from "../components/ModalCommon";


const NavBar = ({ setPage }) => {
    const data = useSelector((state) => state.account.data);
    const status = useSelector((state) => state.account.status);
    const error = useSelector((state) => state.account.error);

    const [show, setShow] = useState({
        offCanvas: false,
        modal: false
    });


    const handleOffCanvasClose = () => { setShow({ ...show, offCanvas: false }); }
    const handleOffCanvasShow = () => { setShow({ ...show, offCanvas: true }); }

    return (
        <>
            <Navbar className="bg-first px-3" expand="lg">
                <Container fluid className="d-flex justify-content-between align-items-center">
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        onClick={handleOffCanvasShow}
                        className="me-3"
                    />
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="80"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                            className="rounded-circle p-0 "
                            style={{ width: '40px', height: '40px' }}
                        >
                            {data.initials}
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                            <Dropdown.Item onClick={() => setShow({ ...show, modal: true })}>Profile</Dropdown.Item>
                            <Dropdown.Item onClick={() => setPage('settings')}>Settings</Dropdown.Item>
                            <Dropdown.Item onClick={() => setPage('logout')}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
            <Offcanvas
                show={show.offCanvas}
                onHide={handleOffCanvasClose}
                placement="start"
                id="offcanvasNavbar"
                className="bg-second"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <img
                        alt=""
                        src={logo}
                        width="80"
                        height="30"
                        className="d-inline-block align-top"
                    /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SideBar setPage={setPage} />
                </Offcanvas.Body>
            </Offcanvas>
            <ModalCommon show={show.modal} handleClose={() => setShow({ ...show, modal: false })}
            header={"Profile"} bodyClassName={"px-3"}
                body={
                    <>
                        <div className="mb-3 ">
                            <div
                                className="rounded-circle mx-auto "
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#6c757d',
                                    color: 'white',
                                    fontSize: '40px'
                                }}
                            >
                                {data.photo ? <img src={data.photo} alt="Profile" className="rounded-circle" style={{ width: '100%', height: '100%' }} /> : data?.initials}
                            </div>
                        </div>

                        <h5 className="mb-2 fw-medium text-capitalize"><span className="fw-bold fs-6 text-secondary">UserName : </span>{data.userName}</h5>

                        <p className="text-muted mb-2"><span className="fw-bold fs-6 text-secondary">E-Mail : </span>{data.email}</p>
                    </>
                } />
        </>
    );
}

export default NavBar;
