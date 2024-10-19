import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts, addNewPost } from '../redux/slice/postsSlice';
import { Card, Col, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import ModalCommon from '../components/ModalCommon';
import AddProductForm from '../components/AddProductForm';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (status === 'idle') dispatch(listPosts());
  }, [status, dispatch]);

  const handleSubmit = (product) => {
    console.log("Received product from form:", product); 
    dispatch(addNewPost(product));
    setShowModal(false); 
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <div className='text-end p-2'>
        <button onClick={() => setShowModal(true)} className='btn me-3 bg-second bg-text bg-border-orange'>
          Add Product
        </button>
      </div>

      <ul className='p-2'>
        {posts.map((post) => (
          <Card key={post.id} className="bg-second h-25 p-2 rounded-3 m-2">
            <Row xs={12} className=' p-2'>
              <Col xs={12} sm={12} md={3} lg={3} xl={2} className='text-center'>
                <img src={post.image} alt={post.title} className='imgsize' />
              </Col>
              <Col xs={12} sm={12} md={9} lg={9} xl={10} className=' bg-text'>
                <Row className='mt-2 mt-md-0' >
                  <Col xs={8} sm={8} md={6} className=''>
                    <p className='fw-bold '>{post.title}</p>
                  </Col>
                  <Col xs={4} sm={4} md={6} className=' text-end fs-4'>
                    <span className='fw-medium'>{post.rating?.rate ? post.rating?.rate : (Math.random() * (5 - 0 + 1) + 0).toFixed(1)}</span>
                    <Icon icon="line-md:star-alt-filled" className='bg-gold mb-1 ms-1' />
                  </Col>
                </Row>
                <p className='text-capitalize'>{post.category}</p>
                <p className='fw-medium'>Count Available: {post.rating?.count ? post.rating?.count : Math.floor(Math.random() * (1000 - 0 + 1)) + 0}</p>
              </Col>
            </Row>
          </Card>
        ))}
      </ul>

      <ModalCommon
        show={showModal}
        handleClose={() => setShowModal(false)}
        header={"Add Product"}
        body={
          <AddProductForm handleSubmit={handleSubmit} />
        }
      />
    </div>
  );
};

export default Posts;
