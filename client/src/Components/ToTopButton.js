// import React from 'react'
// import { useEffect, useState } from 'react'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


// function ToTopButton() {
//   const [toTopButton, setToTopButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         setToTopButton(true)
//       } else {
//         setToTopButton(false)
//       }
//     })
//   }, [])

//   const scrollUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }
//   return (
//     <div>
//       {toTopButton && (
//         <ArrowUpwardIcon
//           style={{
//             color:'white',
//             backgroundColor: '#FFBF00',
//             position: 'fixed',
//             bottom: '80px',
//             right: '40px',
//             height: '50px',
//             width: '50px',
//             fontSize: '50px',
//             borderRadius: '50px',
//             padding: '9px'
//           }}
//           onClick={scrollUp}
//         />
//        )}  
//     </div>
//   )
// }

// export default ToTopButton

// ScrollToTop.js
import React, { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      style={{
        display: 'none',
        position: 'fixed',
        bottom: '80px',
        right: '40px',
        padding: '9px',
        height: '50px',
        width: '50px',
        // fontSize: '50px',
        backgroundColor: '#FFBF00',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
      }}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollToTop;
