import { Chat } from 'chat/Chat'

// initialize after loaded
window.onload = () => {
  let count = 0

  // wait generate DOM
  let interval = setInterval(() => {
    count++

    try {
      new Chat()
    } catch (error) {
      // timeout 10000ms
      if (count < 200) {
        return
      }

      throw new Error('DOM not found in 20sec.')
    }

    clearInterval(interval)
  }, 50);
}
