import axios from "axios";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function UpdateProfile() {
  // const [imageFile, setImageFile] = useState("null");
  const [imageFile, setImageFile] = useState("null");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [birthDate, setBirth] = useState("");
  const Data = { name, email, role, birthDate, imageFile };

  // const handleImageChange = (event) => {
  //   const newImageFile = event.target.files[0];
  //   setImageFile(newImageFile);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("image", imageFile);
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("role", role);
    // formData.append("birthDate", birthDate);

    try {
      const response = await axios.post("http://localhost:5000/image", Data, {
        headers: {
          "Content-Type": "application/json()",
        },
      });
      console.log("Image upload successful:", response.data);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl p-4 shadow-xl border border-slate-300">
      <h1 className="text-xl font-semibold mb-4">User Information</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Role"
            value={role}
            readOnly
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={birthDate}
            onChange={(e) => setBirth(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            type="text"
            placeholder="image"
            onChange={(e) => setImageFile(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="btn bg-green" type="submit">
          <FaPlusCircle /> add user
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
