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
    <span slot="content">
      <h1>I create digital solutions to promote growth.</h1>
      <span>David B. Waters</span>
    </span>
  </c-video-hero>
`
