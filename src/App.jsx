import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./App.css";
import "./App.scss";

function EducatorForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [yearsInService, setYearsInService] = useState("");
  const [licensedStates, setLicensedStates] = useState("");
  const [bio, setBio] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      instagramHandle,
      yearsInService,
      licensedStates,
      bio,
      imageFile,
    };
    console.log("form data is:", formData);

    navigate("/submission", { state: { formData } }); // Pass formData as state
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  //whenever an input is focus-visible, console.log the associated label
  

  return (
    <div className="app-wrapper">
      <h1 className="title">K18 Educator Form</h1>
      <p className="subtitle">Please enter the following info - your PDF will be generated on the next page</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="instagramHandle">Instagram Handle:</label>
          <input
            type="text"
            id="instagramHandle"
            className="form-input"
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearsInService">Years in Service:</label>
          <input
            type="number"
            id="yearsInService"
            className="form-input"
            value={yearsInService}
            onChange={(e) => setYearsInService(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="licensedStates">Licensed States:</label>
          <input
            type="text"
            id="licensedStates"
            className="form-input"
            value={licensedStates}
            onChange={(e) => setLicensedStates(e.target.value)}
          />
        </div>
        <div className="form-group bio">
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" className="form-input" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageFile">Headshot File:</label>
          <input type="file" id="imageFile" className="form-input" onChange={handleImageUpload} />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducatorForm;
