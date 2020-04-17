/**
 * ChatInputModeManager class
 *
 * @export
 * @class ChatInputModeManager
 */
export class ChatInputModeManager {
  /**
   * target element
   *
   * @private
   * @type {HTMLElement}
   * @memberof ChatInputModeManager
   */
  private element: HTMLElement

  /**
   * Creates an instance of ChatInputModeManager.
   *
   * @param {HTMLElement} element
   * @param {ChatInputMode} defaultMode
   * @memberof ChatInputModeManager
   */
  public constructor(element: HTMLElement, defaultMode: ChatInputMode = ChatInputMode.ENABLED) {
    this.element = element
    this.setMode(defaultMode)
  }

  /**
   * set chat input area mode
   *
   * @param {ChatInputMode} mode
   * @memberof ChatInputModeManager
   */
  public setMode(mode: ChatInputMode): void {
    switch (mode) {
      case ChatInputMode.ENABLED:
        this.element.classList.add(ChatInputModeClass.ENABLED)
        this.element.classList.remove(ChatInputModeClass.DISABLED)
        break
      case ChatInputMode.DISABLED:
        this.element.classList.remove(ChatInputModeClass.ENABLED)
        this.element.classList.add(ChatInputModeClass.DISABLED)
        break
      default:
        break
    }
  }

  /**
   * toggle chat input area mode
   *
   * @memberof ChatInputModeManager
   */
  public toggleMode(): void {
    if (this.isEnabled) {
      this.setMode(ChatInputMode.DISABLED)
    } else {
      this.setMode(ChatInputMode.ENABLED)
    }
  }

  /**
   * get is chat input enabled
   *
   * @readonly
   * @type {boolean}
   * @memberof ChatInputModeManager
   */
  public get isEnabled(): boolean {
    return this.element.classList.contains(ChatInputModeClass.ENABLED)
  }

  /**
   * get is right chat input mode
   *
   * @readonly
   * @type {boolean}
   * @memberof ChatInputModeManager
   */
  public get isDisabled(): boolean {
    return this.element.classList.contains(ChatInputModeClass.DISABLED)
  }
}

/**
 * chat input mode enum
 *
 * @export
 * @enum ChatInputMode
 */
export const enum ChatInputMode {
  ENABLED,
  DISABLED,
}

/**
 * chat input mode enum
 *
 * @export
 * @enum ChatInputModeClass
 */
export const enum ChatInputModeClass {
  ENABLED = 'enabled-input-renderer',
  DISABLED = 'disabled-input-renderer',
}
