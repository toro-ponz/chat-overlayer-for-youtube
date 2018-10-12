import { YouTubeLiveOverlayer } from 'app/YouTubeLiveOverlayer'

// initialize after loaded
window.onload = () => {
  // wait DOM generate bt SetTimeout
  // TODO: fix it.
  setTimeout(() => {
    const youTubeLiveOverlayer = new YouTubeLiveOverlayer()
  }, 2500)
}
