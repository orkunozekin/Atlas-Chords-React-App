import React from 'react'
import ChordApiService from '../../services/chord-api-service'
import TokenService from '../../services/token-service'
// import fretboard from '../../Main/Main-Components/fretboard.jpg'
import Results from '../../Main/Main-Components/Results'

export default class Chord extends React.Component {

    state = {
        chord: []
    }

    componentDidMount() {
        const chordId = this.props.match.params.id        
        fetch(`http://localhost:8000/api/chords/${chordId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => {
                if (!res.ok) 
                    return res.json().then(e => Promise.reject(e))
                
                return res.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    chord: data
                })
            })
        .catch(error => { console.error({ error })})
    }


    render() {
        const chord = this.state.chord
        return (
            <section className="each-chord">
                <h3 key={chord.id}>{chord.key} {chord.type}</h3>
                {/* <p>{console.log(chord.notes)}</p> */}
                <Results />
            </section> 
        )
    }
}