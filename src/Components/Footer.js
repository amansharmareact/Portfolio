import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" class="section bg-dark text-white">
  <div class="container ">
    <div class="flex min-h-14 flex-col lg:flex-row items-center justify-between">
      <div class="lg:w-1/2 text-center lg:text-start wow fadeInUp" style={{visibility: "visible"}}>
        <p class="mb-2 lg:mb-0">Copyright © 2023 All Rights Reserved.</p>
      </div>
      <div class="lg:w-1/2 wow fadeInUp" style={{visibility: "visible"}}>
        <p class="mb-0 text-center lg:text-end">Designed by Aman Sharma</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer