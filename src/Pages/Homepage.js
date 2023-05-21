import { useSelector } from "react-redux";
import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  const { docs } = useSelector((state) => state.docsfile);
  return (
    <div className="Homepage">
      <div className="AddDocDiv">
        <Link to="/addDoc">Add Doc</Link>
      </div>
      <div className="FileNameDiv">Doc Name</div>
      {docs.map((item) => {
        return (
          <div className="docsDiv" key={item.id}>
            <div className="docsName">{item.name}</div>
            <Link to={`/update/${item.id}`}>
              <div className="docsEdit">Edit</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
