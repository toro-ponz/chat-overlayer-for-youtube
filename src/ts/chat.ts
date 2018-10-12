import { Chat } from 'chat/Chat'

// initialize after loaded
window.onload = () => {
  // wait DOM generate by SetTimeout
  // TODO: fix it.
  setTimeout(() => {
    const chat = new Chat()
  }, 2500)
}
