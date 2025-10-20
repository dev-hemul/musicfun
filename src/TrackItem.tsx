export function TrackItem(props) {
    return (
        <li>
            {props.item.id} - <b>{props.item.title}</b>
        </li>
    )
}