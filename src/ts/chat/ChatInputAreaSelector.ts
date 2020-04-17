import { ChatInputModeManager, ChatInputModeClass } from "components/ChatInputMode";
import { Selector } from "components/Selector";

/**
 * @export
 * @class ChatInputAreaSelector
 * @extends {Selector}
 */
export class ChatInputAreaSelector extends Selector {
  /**
   * chat input mode manager instance
   *
   * @private
   * @type {ChatInputModeManager|null}
   * @memberof Chat
   */
  private chatInputModeManager: ChatInputModeManager|null

  /**
   * Creates an instance of ChatInputAreaSelector.
   *
   * @memberof ChatInputAreaSelector
   */
  constructor() {
    super('yt-live-chat-message-input-renderer')

    try {
      // throw exception when archive, because chat area is not exist.
      this.chatInputModeManager = new ChatInputModeManager(this.htmlElement)
    } catch (e) {
      this.chatInputModeManager = null
      console.debug(e)
    }
  }

  /**
   * toggle chat input area display enabled
   *
   * @memberof ChatInputAreaSelector
   */
  public toggleShow(): void {
    if (this.chatInputModeManager == null) {
      return
    }

    this.chatInputModeManager.toggleMode()
  }
}
