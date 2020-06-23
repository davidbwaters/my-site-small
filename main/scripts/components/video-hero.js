/*
 *  Components - Background Video
 */

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host(c-video-hero),
    .c-video-hero {
      display: flex;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    .c-video__inner {
      background-color: black;
      background-position-x: center;
      background-position-y: center;
      background-size: cover;
      box-shadow: inset 0 0 1em 1em black;
      filter: 
        hue-rotate(110deg) 
        saturate(0.3) 
        brightness(1.2);
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
    }
    :host(c-video-hero) ::slotted(video),
    .c-video-hero__video {
      height: 100%;
      left: 50%;
      min-width: 100%;
      min-height: 56.25vw;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 177.77777778vh;
    }
    :host(c-video-hero):host([blur]) ::slotted(video),
    .c-video-hero.c-video-hero--blur .c-video-hero__video {
      filter: blur(3px);
    }
  </style>

  <span class="c-video__inner">
    <slot name="video" class="c-video__video"></slot>  
  </span>
  <slot name="content"></slot>
`

customElements.define(

  'c-video-hero',

  class VideoHero extends HTMLElement {

    constructor() {

      super()
      this.attachShadow({ mode: 'open' })

      this.shadowRoot.appendChild(
        template.content.cloneNode(true)
      )

      const video = this.querySelector('video')
      video.muted = true
      video.autoplay = true
      video.loop = true

      if (this.hasAttribute('opaque')) {

        video.style.opacity = '.5'

      }


      if (this.hasAttribute('banner')) {

        const banner = this.getAttribute('banner')
        this.style.backgroundImage = 'url(' + banner + ')'

      }

      if (this.hasAttribute('noise')) {

        this.shadowRoot.innerHTML += `

        `

      }

    }

  }

)
