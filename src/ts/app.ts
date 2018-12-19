import { YouTubeLiveOverlayer } from 'app/YouTubeLiveOverlayer'

// extention instance
let app: YouTubeLiveOverlayer | null = null

// observe name
const CHAT_FRAME_NAME = 'YTD-LIVE-CHAT-FRAME';

// observer
const observer: MutationObserver = new MutationObserver(
  (records: MutationRecord[]) => {
    for (let i = 0; i < records.length; i++) {
      // added chat area
      Array.from(records[i].addedNodes)
        .filter((node: Node) => node.nodeName === CHAT_FRAME_NAME)
        .some(() => {
          app = YouTubeLiveOverlayer.tryNew()
          return true
        })

      // removed chat area
      Array.from(records[i].removedNodes)
        .filter((node: Node) => node.nodeName === CHAT_FRAME_NAME)
        .some(() => {
          if (app !== null) {
            app.dispose()
            app = null
          }
          return true
        })
    }
  }
);

// observe #chat through document body
observer.observe(document.body, {
  childList: true,
  subtree: true
});
