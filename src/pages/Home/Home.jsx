import "./homeCss.css";
import clientLists from "./clientList";
import Application from "./Application";
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

         <div class="dform">  
    <div class="dtitle">Enter your Suggestion</div>
    <form class="suggestionform" action="suggestioninsert.php" method="post">
    <div>
        <textarea name="suggestion" rows="30em"></textarea></div>
    <input type="submit" value="Add Suggestion"/>
    </form>
  <div class="dfacebookicon">  
    <a href="#" target="_blank">
    <img src="images/fbicon.png" /></a></div>
</div><!-- end of dform -->
          
        </>
    )
}
export default Home;
