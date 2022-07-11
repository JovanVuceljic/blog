import Header from "../Header/Header"
import TopSection from "../TopSection/TopSection"
import Sidebar from "../Sidebar/Sidebar"
import Page from "../Page/Page"
import { BrowserRouter } from "react-router-dom"
import "./app.scss"


const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="page-container">
                    <TopSection />
                    <div className="content">
                        <Sidebar />
                        <Page />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App