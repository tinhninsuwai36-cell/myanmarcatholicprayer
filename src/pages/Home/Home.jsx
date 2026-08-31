import "./homeCss.css";
import clientLists from "./clientList";
import Application from "./Application";
import fbicon from "../../assets/images/fbicon.png";
const Home = () =>{
  
    return(
        <>
          
          <div className="introText">
       We are giving the services to the churches and other religious community in Myanmar.
    We created the websites and web based mobile applications in the church. We value the customers desire and available for the complains at any time. So please contact us to work together.
       </div>

       <h1 className="titleH1"> These are our clients  </h1>

<div className="listContainer">
    {
           clientLists.map((d)=>(
               <div className="listCard" key={d.id}>
                   <a href={d.address} target="_blank">
<div className="listPhoto"> <img src={d.image}  /> </div>
<i className="listName"> {d.name} </i>
</a>   </div>
           ))
       }</div>

<Application />

         <div className="dform">  
    <div className="dtitle">Enter your Suggestion</div>
    <form className="suggestionform" action="suggestioninsert.php" method="post">
    <div>
        <textarea name="suggestion" rows="30"></textarea></div>
    <input type="submit" value="Add Suggestion"/>
    </form>
  <div className="dfacebookicon">  
    <a href="#" target="_blank">
    <img src={fbicon} alt="photo" /></a></div>
</div>
          
        </>
    )
}
export default Home;
