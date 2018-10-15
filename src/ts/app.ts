import { YouTubeLiveOverlayer } from 'app/YouTubeLiveOverlayer'

// initialize after loaded
window.onload = () => {
  const instance = YouTubeLiveOverlayer.tryNew()
  let count = 0

  if (instance !== null) {
    return
  }

  // wait generate DOM
  let interval = setInterval(() => {
    try {
      YouTubeLiveOverlayer.tryNewInterval(interval)
      return
    } catch(error) {
      count++
    }

    if (count >= 200) {
      throw new Error('DOM not found in 10sec.')
    }
  }, 50)
}
