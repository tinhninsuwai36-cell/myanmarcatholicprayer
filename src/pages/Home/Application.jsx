import { useEffect , useState } from "react";

const Application = () =>{
    const [apkList, setApkList] = useState([]);

    async function fetchApks(){
        try{
            const response = await fetch("http://localhost/phpfiles/mmcatholicprayerReact/getApplication.php");
            const data = await response.json();
            setApkList(data);
        }
        catch(error){
            console.error(error);
        }
    }

   useEffect(()=>{
       fetchApks();
   },[]);
    
    return(
        <>        
<h1 className="titleH1">  Applications  </h1>
{
    apkList.map((item)=>(
        <div className="apkCard">
<img src={`http://localhost/phpfiles/mmcatholicprayer/apk/${item.photo}`} alt={item.title} className="apkPhoto" />
<h3> {item.title} </h3>
        </div>
    ))
}
        </>
    )
}
export default Application;