import React, { useEffect, useState } from 'react'

import n1 from '../src/notes/notes_1.mp3'
import n2 from '../src/notes/notes_2.mp3'
import n3 from '../src/notes/notes_3.mp3'
import n4 from '../src/notes/notes_4.mp3'
import n5 from '../src/notes/notes_5.mp3'
import n6 from '../src/notes/notes_6.mp3'
import n7 from '../src/notes/notes_7.mp3'
import n8 from '../src/notes/notes_8.mp3'
import n9 from '../src/notes/notes_9.mp3'
import n10 from '../src/notes/notes_10.mp3'
import n11 from '../src/notes/notes_11.mp3'
import n12 from '../src/notes/notes_12.mp3'

const App = () => {
	const numbers1 = [
		{ num: 1, note: n1 },
		{ num: 2, note: n2 },
		{ num: 3, note: n3 },
		{ num: 4, note: n4 },
		{ num: 5, note: n5 },
		{ num: 6, note: n6 },
		{ num: 7, note: n7 },
		{ num: 8, note: n8 },
		{ num: 9, note: n9 },
		{ num: 10, note: n10 },
		{ num: 11, note: n11 },
		{ num: 12, note: n12 },
	]

	const [activeNum, setActiveNum] = useState(1)

	const logKey = (e) => numbers1.map((piano) => e.key === piano.num.toString() && handlePianoNote(piano.num))

	const handlePianoNote = (num) => {
		setActiveNum(num)
		const audio = new Audio(numbers1[num - 1].note)
		audio.play()
	}

	useEffect(() => {
		document.addEventListener('keydown', logKey)

		return () => {
			document.removeEventListener('keydown', logKey)
		}
	}, [])

	return (
		<div className='piano'>
			{numbers1.map((piano) => (
				<span
					className={activeNum === piano.num ? 'piano-note active' : 'piano-note'}
					onClick={() => handlePianoNote(piano.num)}
					key={piano.num}>
					<span className='note-label'>{piano.num}</span>
				</span>
			))}
			<h5 style={{ textAlign: 'center' }}>I'm not sure about correct notes*</h5>
			<p style={{ textAlign: 'center' }}>
				<h3>Author:</h3>
				<a href='https://codepen.io/markknol/pen/eYmNWEb'>https://codepen.io/markknol/pen/eYmNWEb</a>
				<br />
				<a href='https://interactive-fretboard.com'>https://interactive-fretboard.com (see "scales" page)</a>
			</p>
		</div>
	)
}

export default App
