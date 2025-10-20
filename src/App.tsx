import {useState} from "react";
import {TrackList} from "./TrackList.tsx";

export function App() {

    const [tracks] = useState([
        {id: 1, title: "Bruno Mars - Uptown Funk"},
        {id: 2, title: "Eminem - Lose Yourself"},
        {id: 3, title: "Rihanna - Diamonds"},
    ])

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <TrackList items={tracks}/>
        </div>
    )
}

/*export default App*/

