/*
 *  Components - Background Video
 */

const template = document.createElement('template')

template.innerHTML = `
  <style>
    span {
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
    ::slotted(video) {
      height: 100%;
      left: 50%;
      min-width: 100%;
      min-height: 56.25vw;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 177.77777778vh;
    }
  </style>

  <span>
    <slot name="video"></slot>  
  </span>
  <slot name="content"></slot>
`

customElements.define(

  'c-header',

  class VideoHero extends HTMLElement {

    constructor() {

      super()
      this.attachShadow({ mode: 'open' })

      this.shadowRoot.appendChild(
        template.content.cloneNode(true)
      )

    }

  }

)
