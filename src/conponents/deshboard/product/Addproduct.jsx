import axios from "axios";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
function Addproduct() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescriptiaon] = useState("");

  const handleImageChange = (event) => {
    const newImageFile = event.target.files[0];
    setImageFile(newImageFile);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);
    const Data = { title, email, price,brand, description, formData };
    try {
      const response = await axios.post("http://localhost:5000/add-product", Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image upload successful:", response.data);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };
  axios
    .get("http://localhost:5000")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl p-4 shadow-xl border border-slate-300 ">
      <h1 className="text-xl font-semibold mb-4">Add product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
           Price
          </label>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
           brand
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            placeholder="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add a description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="write description"
            value={description}
            onChange={(e) => setDescriptiaon(e.target.value)}
            className=" textarea textarea-bordered textarea-lg w-full max-w-xs"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            placeholder="image"
            onChange={handleImageChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="btn bg-green" type="submit">
          {" "}
          <FaPlusCircle />
          add user
        </button>
      </form>
    </div>
  );
}

export default Addproduct;




























