import React from 'react'
import './Home.css'
import bgVideo from '../../assets/video/bg.mp4'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div id="home">
      {/* <video src={bgVideo} autoPlay loop muted /> */}
      <div className="content">
        <div className="heading">
          <span>My muse tarot</span>
          <span>Bối bài cùng nàng thơ</span>
          <span>Tình yêu - Công việc - Tài vận</span>
        </div>
        <div className="button">
          <button onClick={() => {navigate('/Love')}}>Tình yêu</button>
          <button onClick={() => {navigate('/Job')}}>Công việc</button>
          <button onClick={() => {navigate('/Luck')}}v>Tài vận</button>
        </div>
      </div>
    </div>
  )
}

export default Home