/*
 *  Components - Top Bar
 */

const style = `
  <style>
    :host(c-video-hero) {
      
    }
  </style>
`

const template = `
  ${style}
  <span class="c-top-bar">
    <slot name="video" class="c-video-hero__video">
    </slot>
  </span>
  <slot class="c-top-bar" name="content"></slot>
`

customElements.define(

  'c-top-bar',

  class VideoHero extends HTMLElement {

    constructor() {

      super()
      this.attachShadow({ mode: 'open' })

      const templateEl = document.createElement('template')
      templateEl.innerHTML = template

      this.shadowRoot.appendChild(
        templateEl.content.cloneNode(true)
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
