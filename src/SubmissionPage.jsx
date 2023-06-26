import { useLocation } from "react-router-dom";
import headerImage from "./k18-saloncentric-header.png";
import "./SubmissionPage.scss";

const SubmissionPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="outer-shell">
      <div className="submission-page-wrapper">
        <img className="header-image" src={headerImage} alt="K18 decorative header" width="100%" />
        <div className="submission-page">
          <div className="left-side">
            <div className="header"></div>
            <div className="info-container">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">{formData.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Instagram Handle:</span>
                <span className="info-value">{formData.instagramHandle}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Years in Service:</span>
                <span className="info-value">{formData.yearsInService}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Licensed States:</span>
                <span className="info-value">{formData.licensedStates}</span>
              </div>
              <div className="bio-container">
                <span className="info-label bio-label">Bio:</span>
                <span className="info-value bio-value">{formData.bio}</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            {formData.imageFile && (
              <div className="image-container">
                <img src={URL.createObjectURL(formData.imageFile)} alt="Educator Headshot" className="user-image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
