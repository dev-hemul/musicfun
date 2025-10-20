import { useEffect, useState } from "react"

export function TrackList() {
  const [tracks, setTracks] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  useEffect(() => {
    console.log("effect")

    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "982a1eb9-d8b5-43c0-a3b0-e5a9812ea19b",
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data))
  }, [])

  if (tracks === null) {
    return (
      <div>
        <span>loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <ul>
      {tracks.map((track) => {
        return (
          <li
            key={track.id}
            style={{
              border: track.id === selectedTrackId ? "1px solid orange" : "none",
            }}
          >
            <div
              onClick={() => {
                setSelectedTrackId(track.id)
              }}
            >
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        )
      })}
    </ul>
  )
}