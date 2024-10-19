import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux/slice/formShow";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import logo from "../OneStop.png";
import { listAccountDetails } from "../redux/slice/accountSlice";

const Project = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const datas = useSelector((state) => state.formShow);
  const [formData, setFormData] = useState({
    customerName: "",
    items: [],
    discount: 0,
    billNumber: datas?.billNumber ? datas?.billNumber : 0,
  });

  useEffect(()=>{
    dispatch(listAccountDetails());
  },[])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue;

    if (type === "checkbox") {
      if (checked) {
        updatedValue = [...formData.items, value];
      } else {
        updatedValue = formData.items.filter((item) => item !== value);
      }
    } else {
      updatedValue = value;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };
  const handleSubmit = () => {
    dispatch(addForm(formData));
  };

  return (
    <div className="container bg-second bg-text p-3">
      <h4>FAKE SHOP</h4>
      <div>
        <div className="col-4">
          <label>Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <label>Items</label>
        <div className="d-flex flex-column">
          <div className="d-flex flex-reverse">
            <input
              type="checkbox"
              name="items"
              value="Lichie"
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label ms-3">Lichie $50</label>
          </div>
          <div className="d-flex flex-reverse">
            <input
              type="checkbox"
              name="items"
              value="Grapes"
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label ms-3">Grapes $45</label>
          </div>
          <div className="d-flex flex-reverse">
            <input
              type="checkbox"
              name="items"
              value="Apple"
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label ms-3">Apple $70</label>
          </div>
          <div className="d-flex flex-reverse">
            <input
              type="checkbox"
              name="items"
              value="Mango"
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label ms-3">Mango $85</label>
          </div>

        </div>

        <label>Discount</label>
        <div className="col-4">
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button onClick={handleSubmit} className="btn bg-second bg-text my-2  bg-border-orange">Submit</button>
        {datas && <div className="bg-white ">
          <div className="d-flex justify-content-center align-items-center ">
          <img src={logo} width={180} height={60} className="mt-3"/>
          </div>
          <div>Bill: {datas?.billNumber}</div>
          <div>Customer Name: {datas?.customerName}</div>
          {datas?.items.map((items) => {
            return (
              <div>{items}</div>
            )
          })}
          <div>Discount: {datas?.discount}%</div>
          <div>Total : ${datas?.subtotal}</div>
          <div>Price : ${datas?.totalPrice}</div>
          <div>Date : {datas?.date && moment(datas?.date).format("DD[/]MM[/]YYYY")}</div>
        </div>}
      </div>
    </div>
  );
};

export default Project;
