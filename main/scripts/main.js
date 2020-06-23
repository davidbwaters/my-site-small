/*
 *  Scripts - Main
 */

import '../stylesheets/main.scss'
import '../videos/growth.mp4'
import '../videos/growth.webm'
import './components/video-hero'


document.body.innerHTML = `
  <c-video-hero blur noise>
    <video slot="video">
      <source
        src="videos/growth.mp4"
        type="video/mp4"
      >
      <source 
        src="videos/growth.webm"
        type="video/webm"
      >
    </video>
  </c-video-hero>
`
