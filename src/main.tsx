import { createRoot } from "react-dom/client"
import "./index.css"
import { Header } from "./components/Header";
import { PageTitle } from "./components/PageTitle";
import { SidebarMenu } from "./components/SidebarMenu";
import { TrackList } from "./components/TrackList";
import { TrackDetail } from "./components/TrackDetail";
import { Footer } from "./components/Footer";
import { App } from "./App";

 
const rootEl = document.getElementById("root")
const reactRoot = createRoot(rootEl!)
reactRoot.render(<App />)
 
function MainPage() {
  return (
    <div>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{ display: "flex" }}>
        <TrackList />
        <TrackDetail />
      </div>
      <Footer />
    </div>
  )
}