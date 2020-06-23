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
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    .c-video-hero__inner {
      background-color: black;
      background-position-x: center;
      background-position-y: center;
      background-size: cover;
      box-shadow: inset 0 0 1em 1em black;
      display: flex;
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
    .c-video-hero__noise {
      mix-blend-mode: difference;
      opacity: .25;
      position: absolute;
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
    :host(c-video-hero):host([opaque]) ::slotted(video),
    .c-video-hero.c-video-hero--opaque 
    .c-video-hero__video {
      opacity: 0.5
    }
    .c-video-hero__content::slotted(*),
    .c-video-hero__content {
      align-items: center;
      color: white;
      display: flex;
      justify-content: center;
      position: relative;
    }
  </style>

  <span class="c-video-hero__inner">
    <slot name="video" class="c-video-hero__video">
    </slot>
    </slot>
  </span>
  <slot name="content" class="c-video-hero__content">
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
          <svg 
            class="c-video-hero__noise"
            height="100%"
            width="100%"
          >
            <filter 
              id='noise'
              x='0%' 
              y='0%' 
              width='100%' 
              height='100%'
            >
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.8"
                numOctaves="1"
              />
            </filter>
            <rect 
              filter="url(#noise)"
              width='100%' 
              height='100%'
            />
          </svg>
        `

      }

    }

  }

)
