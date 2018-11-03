import { YouTubeLiveOverlayer } from 'app/YouTubeLiveOverlayer'

// initialize after loaded
window.onload = () => {
  let count = 0

  // wait generate DOM
  let interval = setInterval(() => {
    try {
      YouTubeLiveOverlayer.tryNewInterval(interval)
      return
    } catch(error) {
      count++
    }

    if (count >= 200) {
      clearInterval(interval)
    }
  }, 50)
}
