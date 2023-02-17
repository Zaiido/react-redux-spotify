import GreetingSection from "./GreetingSection"
import MusicPlayer from "./MusicPlayer"
import Sidebar from "./Sidebar"
import Songs from "./Songs"
import TopNavbar from "./TopNavbar"

const Homepage = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div className="main-container mb-5">
                    <div className="background-effect"></div>
                    <TopNavbar />
                    <GreetingSection />
                    <Songs />
                </div>
            </div>
            <MusicPlayer />
        </>
    )
}

export default Homepage