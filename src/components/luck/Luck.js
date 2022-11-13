import React from 'react'
import './Luck.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Luck() {
  const navigate = useNavigate()
  return (
    <>
      <div id="luck">
        {/* <ul className="navbar">
        <li>Tình yêu</li>
        <li>Công việc</li>
        <li>Tài vận</li>
      </ul> */}
        <div className="content">
          <div className="heading">
            <span>My muse tarot</span>
            <span>Bối bài cùng nàng thơ</span>
            <span>Tình yêu - Công việc - Tài vận</span>
          </div>
          <div className="buttonRuilt">
            <button onClick={() => navigate('/LuckModal')}>Nhận thông điệp</button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Luck