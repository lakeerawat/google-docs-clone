import "./Topnav.css";
import { FcDocument } from "react-icons/fc";
import { MdOutlineMessage, MdOutlineVideocam } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

const Topnav = ({ name }) => {
  return (
    <div className="NavDiv">
      <div className="Navdiv1">
        <span>
          <FcDocument size={45} color={"blue"} />
        </span>
      </div>
      <div className="Navdiv2">
        <div className="DocNameDiv">
          {name === "" ? "Untitled Document" : name}
        </div>
        <div className="FileSectionDiv">
          <span className="FileSectionSpan">File</span>
          <span className="FileSectionSpan">Edit</span>
          <span className="FileSectionSpan">View</span>
          <span className="FileSectionSpan">Insert</span>
          <span className="FileSectionSpan">Format</span>
          <span className="FileSectionSpan">Tools</span>
          <span className="FileSectionSpan">Extension</span>
          <span className="FileSectionSpan">Help</span>
        </div>
      </div>
      <div className="Navdiv3">
        <span className="Navdiv3Span">
          <MdOutlineMessage size={30} />
        </span>
        <span className="Navdiv3Span">
          <MdOutlineVideocam size={30} />
        </span>
        <span className="Navdiv3button">
          <AiOutlineLock size={20} />
          <p>Share</p>
        </span>
        <span className="Navdiv3Span">
          <BsPersonCircle size={30} />
        </span>
      </div>
    </div>
  );
};

export default Topnav;
