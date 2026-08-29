import LogoImg from "../assets/images/logo.png";

const WbHead = () =>{
    return(
        <div className="headParent">
<div className="logoPic"> <img src={LogoImg} alt="Logo Image" />  </div>
<div className="headCenter"> MCCP </div>
<div className="headRight"> for Divine Worship </div>
        </div>
    )
}
export default WbHead;