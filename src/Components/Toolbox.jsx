import "./Toolbox.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { BsTextRight } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { SiGooglekeep } from "react-icons/si";
import { useEffect, useState } from "react";
import { addDocs, getDocs, updateDocs } from "../redux/docSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Topnav from "./Topnav";

const initialState = {
  name: "",
  boldText: "",
  italicText: "",
  underlineText: "",
  colorText: "",
  leftText: "",
  para: "",
};

const Toolbox = () => {
  const [state, setState] = useState(initialState);
  const { doc } = useSelector((state) => state.docsfile);
  const {
    name,
    boldText,
    italicText,
    underlineText,
    colorText,
    rightText,
    para,
  } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isULine, setIsULine] = useState(false);
  const [isALine, setIsALine] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [fontsize, setfontSize] = useState(15);
  const [fontColor, setFontColor] = useState("black");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [uLine, setULine] = useState(false);
  const [right, setRight] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getDocs(id));
      setIsBold(boldText);
      setBold(boldText);
      setItalic(italicText);
      setIsItalic(italicText);
      setULine(underlineText);
      setIsULine(underlineText);
      setFontColor(colorText);
      setRight(rightText);
      setState({ ...doc });
    }
  }, [id, doc, boldText, italicText, underlineText, colorText, rightText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !para) {
      alert("Please provide value into each input field");
    } else {
      if (!id) {
        const data = state;
        data.boldText = isBold;
        data.italicText = isItalic;
        data.underlineText = isULine;
        data.colorText = fontColor;
        data.rightText = right;
        setState(data);
        dispatch(addDocs(state));
        alert("Contact Added Successfully");
      } else {
        const data = state;
        data.boldText = isBold;
        data.italicText = isItalic;
        data.underlineText = isULine;
        data.colorText = fontColor;
        data.rightText = right;
        setState(data);
        dispatch(updateDocs(state));
        alert("Contact Updated Successfully");
      }

      setTimeout(() => navigate("/"), 500);
    }
  };
  const handleIncSize = () => {
    if (fontsize < 50) {
      setfontSize(fontsize + 1);
    }
  };
  const handleDecSize = () => {
    if (fontsize > 10) {
      setfontSize(fontsize - 1);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Topnav name={name} />
      <div className="ToolboxDiv">
        <div className="textandToolDiv">
          <div className="horizontalDiv">
            <div className="ToolDiv">
              <span onClick={handleDecSize} className="minus">
                -
              </span>
              <span className="numSpan">{fontsize}</span>
              <span onClick={handleIncSize} className="plus">
                +
              </span>
              <span
                style={{
                  background: bold ? "#D3D3D3" : "initial",
                }}
                onClick={() => {
                  setIsBold(!isBold);
                  setBold(!bold);
                }}
                className="boldSpan"
              >
                B
              </span>
              <span
                style={{
                  background: italic ? "#D3D3D3" : "initial",
                }}
                onClick={() => {
                  setIsItalic(!isItalic);
                  setItalic(!italic);
                }}
                className="italicSpan"
              >
                Ɪ
              </span>
              <span
                style={{
                  background: uLine ? "#D3D3D3" : "initial",
                }}
                onClick={() => {
                  setIsULine(!isULine);
                  setULine(!uLine);
                }}
                className="lineSpan"
              >
                U
              </span>
              <span onClick={() => setIsALine(!isALine)} className="AlineSpan">
                <label> A </label>
                <input
                  type="color"
                  onChange={(e) => setFontColor(e.target.value)}
                ></input>
              </span>
              <span
                style={{
                  background: right ? "#D3D3D3" : "initial",
                }}
                onClick={() => {
                  setIsRight(!isRight);
                  setRight(!right);
                }}
                className="textRight"
              >
                <BsTextRight size={25} />
              </span>
            </div>
          </div>
          <div className="TextArea">
            <div className="docNameDiv">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Doc name ..."
                value={name || ""}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              type="text"
              style={{
                fontSize: `${fontsize}px`,
                fontWeight: isBold === true ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: isULine ? "underline black" : "none",
                textAlign: isRight ? "right" : "initial",
                color: `${fontColor}`,
              }}
              id="para"
              name="para"
              placeholder="type here @Para ..."
              value={para || ""}
              onChange={handleInputChange}
            ></textarea>
            <div className="buttonDiv">
              <button onClick={handleSubmit}>Save</button>
              <button onClick={() => navigate("/")}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="verticleDiv">
          <a href="https://calendar.google.com/calendar/u/0/r/week">
            <span className="sideBarSpan">
              <FcCalendar size={30} />
            </span>{" "}
          </a>
          <span className="sideBarSpan">
            <SiGooglekeep color="f3f31a" size={30} />
          </span>
          <span className="sideBarSpan">
            <IoMdCheckmarkCircleOutline color="#0874db" size={30} />
          </span>

          <span className="sideBarSpan">
            <GoPerson color="#0874db" size={30} />
          </span>
          <span className="sideBarSpan">
            <MdLocationPin color="#0874db" size={30} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Toolbox;
