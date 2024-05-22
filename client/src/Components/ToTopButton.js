import React from 'react'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function ToTopButton() {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTopButton(true)
      } else {
        setToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div>
      {toTopButton && (
        <ArrowUpwardIcon
          style={{
            color:'white',
            backgroundColor: '#ffd22b',
            position: 'fixed',
            bottom: '80px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            borderRadius: '50px',
            padding: '9px'
          }}
          onClick={scrollUp}
        />
       )}  
    </div>
  )
}

export default ToTopButton