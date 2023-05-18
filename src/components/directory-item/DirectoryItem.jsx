import { useNavigate } from "react-router-dom";
import "./directoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <div className="directory-item-container">
      <div
        onClick={navigateHandler}
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
