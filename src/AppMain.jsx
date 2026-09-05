import { BrowserRouter , Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import PrayerBooks from "./pages/Prayerbooks/PrayerBooks";
import Application from "./pages/Applications/Application";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const AppMain = () =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
<Route path="/home" element={<Home />} />
<Route path="/prayerbooks" element={<PrayerBooks />} />
<Route path="/application" element={<Application />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacypolicy" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppMain;
