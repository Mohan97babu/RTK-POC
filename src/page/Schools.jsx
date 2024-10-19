import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { addSchool, listSchools, updateSchool } from '../redux/slice/schoolSlice';
import { table } from "bootstrap";
import { useNavigate } from 'react-router-dom';
import TableComponent from '../components/Table';
import ModalCommon from '../components/ModalCommon';
import AddSchoolForm from '../components/AddSchoolForm';
import Spinner from '../components/Spinner.jsx';
import Select from '../components/Select.jsx';
import { Col, Row } from 'react-bootstrap';
import { TableOptions } from '../utils/Data.js';


const Schools = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true)
  const [selectedSchool, setSelectedSchool] = useState({});
  const [size, setSize] = useState(2);

  // const size = 2;

  const schools = useSelector((state) => state.schools.data);
  const schoolStatus = useSelector((state) => state.schools.status);
  const schoolError = useSelector((state) => state.schools.error);
  console.log(schoolStatus, "status");

  useEffect(() => {
    setLoading(true);
    dispatch(listSchools({ page, size }));
    setLoading(false)
  }, [dispatch, page, size]);

  const options = [
    { label: "2 items per page", value: "2" },
    { label: "5 items per page", value: "5" },
    { label: "10 items per page", value: "10" }
  ]

  const handlePageClick = (data) => {
    setPage(data.selected);
  };

  const handleSubmit = (school) => {
    console.log(school);
    if (school.id === null)
      dispatch(addSchool(school));
    else
      dispatch(updateSchool(school));
    selectedSchool({});
    setShowModal(false);
    dispatch(listSchools({ page, size }));
  }
  const handleEdit = (school) => {
    setSelectedSchool(school);
    console.log(school, "inside edit function");
    setShowModal(true);

  }
  const handleAddSchool = () => {
    setSelectedSchool({});
    setShowModal(true);
  }

  let content;

  if (schoolStatus === 'loading' || loading === true) {
    content = <div className='display-2'><Spinner /></div>;
  } else if (schoolStatus === 'succeeded') {
    const startIndex = page * size;
    content = (
      <>
        <TableComponent
          tableHeaders={["S.no", "School Name", "Location", "Actions"]}
          data={schools.data.map((item, index) => ({
            ...item,
            serialNo: startIndex + index + 1
          }))}
          handleEdit={handleEdit}
        />
        <div className=''>
          <Row className='d-flex justify-content-between m-0'>
            <Col xs={12} md={3} lg={2} >
              <Select placeholder={"Select"} options={TableOptions} onChange={(e) => setSize(Number(e.target.value))} value={size}/>
            </Col>
            <Col xs={12} md={9} lg={4} className='d-flex justify-content-end mt-3 mt-md-0' >
              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={schools.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={size}
                onPageChange={handlePageClick}
                containerClassName={'pagination '}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link '}
                previousClassName={'page-link '}
                nextClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                forcePage={page}
              />
            </Col>

          </Row>
        </div>
      </>
    );
  } else if (schoolStatus === 'failed') {
    content = <p>{schoolError}</p>;
  }

  return (
    <>
      <div>
        <h1>Schools List</h1>
        <div className='text-end'>
          <button onClick={() => handleAddSchool()} className='btn me-3 bg-second bg-text bg-border-orange'>
            Add School
          </button>
        </div>
        {content}
      </div>
      <ModalCommon
        show={showModal}
        handleClose={() => setShowModal(false)}
        header={selectedSchool.id ? "Edit School" : "Add School"}
        body={
          <AddSchoolForm handleSubmit={handleSubmit} selectedSchool={selectedSchool} />
        }        
        bodyClassName={"px-0"}
        />
    </>
  );
};

export default Schools;
