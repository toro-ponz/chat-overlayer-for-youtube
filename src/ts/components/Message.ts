/**
 * manage Message class
 *
 * @class MessageManager
 */
export class MessageManager {
  /**
   * set message proceed listener
   *
   * @param {(Message) => void} callback
   * @memberof MessageManager
   */
  public setListener(callback: (message: Message) => void): void {
    chrome.runtime.onMessage.addListener(callback)
  }

  /**
   * send message
   *
   * @param {Message} message
   * @memberof MessageManager
   */
  public send(message: Message): void {
    chrome.runtime.sendMessage(message);
  }

  /**
   * send message to active tab
   *
   * @param {Message} message
   * @memberof MessageManager
   */
  public sendToActiveTab(message: Message): void {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0] === undefined || tabs[0].id == undefined) {
        return
      }

      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
}

/**
 * message type interface
 *
 * @interface MessageType
 */
export enum MessageType {
  SET_OVERLAY_MODE = 'set-overlay-mode',
  UPDATE_ICON = 'update-icon'
}

/**
 * message interface
 *
 * @interface Message
 */
export interface Message {
  type: MessageType
  data: any
}
