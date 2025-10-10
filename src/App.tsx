import {useState, useEffect} from 'react';

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [tracks, setTracks] = useState(null);

  useEffect(() => {
    console.log("effect")

    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "982a1eb9-d8b5-43c0-a3b0-e5a9812ea19b",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data)
      })
  }, [])

    if (tracks === null) {

        return <div>
            <h1>Musicfun Player</h1>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfun Player</h1>
            <span>No tracks found</span>
        </div>
    }

    return (
        <>
            <button onClick={() => {
                setSelectedTrackId(null);
            }}>reset selection</button>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id} style={{
                            border: track.id === selectedTrackId ? '1px solid red' : 'none',
                        }}>
                            <div onClick={() => {
                                setSelectedTrackId(track.id);
                            }}>
                                {track.attributes.title}
                            </div>
                            <audio src={track.attributes.attachments[0].url} controls></audio>
                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default App
