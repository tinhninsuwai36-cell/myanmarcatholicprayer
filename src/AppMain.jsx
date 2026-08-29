import { BrowserRouter , Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import PrayerBooks from "./pages/Prayerbooks/PrayerBooks";

const AppMain = () =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
<Route path="/home" element={<Home />} />
<Route path="/prayerbooks" element={<PrayerBooks />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppMain;