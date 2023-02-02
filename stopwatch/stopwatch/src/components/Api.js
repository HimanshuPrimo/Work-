import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [get, setget] = useState([]);
  const [edit, setEdit] = useState(false);
  const [getId, setgetId] = useState(null);
  const { title, description } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Hello Data", data)
    if (edit) {
      console.log(getId, "===========>id");
      const result = await axios.put(
        `https://63da4f10b28a3148f683d27b.mockapi.io/CRUD/${getId}`,data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("first", result);
      setEdit(false);
      getData();
    } else {
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
  const handleEdit = async(id) => {
    setEdit(true);
    const result = await axios.get(
      `https://63da4f10b28a3148f683d27b.mockapi.io/CRUD/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result.data, "Hello")
      const updated = result.data;
    // const updated = get[id];
    // console.log(updated, "========>Hello");
    setData({ title: updated.title, description: updated.description });
    console.log(result.data.id)
    setgetId(result.data.id);
  };


  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <br />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
      {get.map((item, index) => (
        <div key={index}>
          <span>{item.id}</span>
          <span>{item.title}</span>
          <span>{item.description}</span>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Api;
