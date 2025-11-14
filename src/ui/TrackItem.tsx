import {type TrackListItemResource} from "../dal/api.ts";

type Props = {
    isSelected: boolean,
    onSelect: (trackId: string) => void,
    track: TrackListItemResource
}

export function TrackItem({onSelect, isSelected, track}: Props) {
    const handleClick = () => onSelect?.(track.id)


    return <li
        key={track.id}
        style={{
            border: isSelected ? "1px solid orange" : "none",
        }}
    >
        <div onClick={handleClick}>
            {track.attributes.title}
        </div>
        <audio src={track.attributes.attachments[0].url}
               controls></audio>
    </li>
}