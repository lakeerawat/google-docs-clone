import "./Topnav.css";
import { FcDocument } from "react-icons/fc";
import { MdOutlineMessage, MdOutlineVideocam } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineLock } from "react-icons/ai";

const Topnav = ({ name,para }) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    const content = para;
    const file = new Blob([content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = `${name}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };
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
        <span onClick={downloadFile} className="Navdiv3button">
          <AiOutlineLock size={20} />
          <p>Share</p>
        </span>
        <span className="Navdiv3Span">
          <FcBusinessman size={35} />
        </span>
      </div>
    </div>
  );
};

export default Topnav;
