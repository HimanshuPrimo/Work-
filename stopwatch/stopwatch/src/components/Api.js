import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

const Api = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [get, setget] = useState([]);
  const [edit, setEdit] = useState(false);
  const [getId, setgetId] = useState(null);

  const { title, description } = data;

  // HandleChange  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description){
      alert("Please Enter Data First")
    }
    // console.log("Hello Data", data)
    else if (edit) {
      // console.log(getId, "===========>id");
      const result = await axios.put(
        `https://63da4f10b28a3148f683d27b.mockapi.io/CRUD/${getId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("first", result);
      setEdit(false);
      getData();
    }

    else {
      const result = await axios.post(
        "https://63da4f10b28a3148f683d27b.mockapi.io/CRUD",
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      getData();
      if (result.status === 201) {
        alert("Created");
      }
    }
    setData({ title: "", description: "" });
  };

  // Getting All Data
  const getData = async () => {
    const result = await axios.get(
      "https://63da4f10b28a3148f683d27b.mockapi.io/CRUD",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setget(result.data);
  };

  // Handle Delete Function
  const handleDelete = async (id) => {
    await axios.delete(
      `https://63da4f10b28a3148f683d27b.mockapi.io/CRUD/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getData();
  };

  // Edit Function
  const handleEdit = async (id) => {
    setEdit(true);
    // Get Data by Particular ID API
    const result = await axios.get(
      `https://63da4f10b28a3148f683d27b.mockapi.io/CRUD/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(result.data, "Hello")
    const updated = result.data;
    setData({ title: updated.title, description: updated.description });
    console.log(data, "Hello DATa")
    console.log(result.data.id);
    setgetId(result.data.id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="hello">
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter Title"
          />
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter Description"
          />
          <br />
          <button type="submit">
            {edit ? <FiEdit2 /> : <MdOutlineAdd />}
            {edit ? "Update" : "Add"}
          </button>
        </div>
      </form>

      {get.map((item, index) => (
        <div key={index} className="data">
          {/* <span>{item.id}</span> */}
          <span className="title">{item.title}</span>
          <span className="description">{item.description}</span>
          <button onClick={() => handleEdit(item.id)}>
            <FiEdit />
            Edit
          </button>
          <button onClick={() => handleDelete(item.id)}>
            <AiFillDelete />
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Api;