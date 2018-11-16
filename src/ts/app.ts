import { YouTubeLiveOverlayer } from 'app/YouTubeLiveOverlayer'

// initialize after loaded
window.onload = () => {
  // extention instance
  let app: YouTubeLiveOverlayer | null = null

  // observer
  const observer: MutationObserver = new MutationObserver(() => {
    // #chat is not found
    if (document.getElementById('chat') === null) {
      // release old instance
      app = null
      return
    }

    // #chat is not mounted
    if (app === null) {
      // mount extention by interval
      const interval = setInterval(() => {
        if (app !== null) {
          clearInterval(interval)
        }

        app = YouTubeLiveOverlayer.tryNew()
      }, 50)
    }
  });

  // observe #chat through document body
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
