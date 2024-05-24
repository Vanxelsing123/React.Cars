import { useRef } from 'react'
import '../styles/index.css'

export const VideoPlayer = () => {
	const ref = useRef()

	const handlePlay = () => {
		ref.current.play()
	}

	const handlePause = () => {
		ref.current.pause()
	}

	return (
		<div className='video_cars'>
			<button onClick={handlePlay}>Play</button>
			<button onClick={handlePause}>Pause</button>
			<video src='video.mp4' ref={ref} width='600' />
		</div>
	)
}