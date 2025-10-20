import {TrackItem} from "./TrackItem.tsx";

export function TrackList(props) {
    return <ul>
        {props.items.map(t => (
            <TrackItem key={t.id} item={t}/>
        ))}
    </ul>
}