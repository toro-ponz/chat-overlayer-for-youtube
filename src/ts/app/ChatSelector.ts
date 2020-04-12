import { PlayerSelector } from 'app/PlayerSelector'
import { Selector } from 'components/Selector'
import { PlayerMode, PlayerModes, PlayerModeClass } from 'components/PlayerMode'

/**
 * @export
 * @class ChatSelector
 * @extends {Selector}
 */
export class ChatSelector extends Selector {
  /**
   * player mode instance
   *
   * @private
   * @type {PlayerMode}
   * @memberof ChatSelector
   */
  private playerMode: PlayerMode

  /**
   * player selector instance
   *
   * @private
   * @type {PlayerSelector}
   * @memberof ChatSelector
   */
  private playerSelector: PlayerSelector

  /**
   * Creates an instance of ChatSelector.
   *
   * @memberof ChatSelector
   */
  public constructor() {
    super('ytd-live-chat-frame')

    this.playerMode = new PlayerMode()
    this.playerSelector = new PlayerSelector()

    this.initialize()
  }

  /**
   * initialize
   *
   * @private
   * @memberof ChatSelector
   */
  private initialize(): void {
    window.onresize = () => {
      this.setHeight()
    }
  }

  /**
   * set player mode class
   *
   * @param playerMode player mode instance
   * @memberof ChatSelector
   */
  public setPlayerMode(playerMode: PlayerModes): void {
    switch (playerMode) {
      case PlayerModes.DEFAULT:
        this.element.classList.add(PlayerModeClass.DEFAULT)
        this.element.classList.remove(PlayerModeClass.THEATER)
        this.element.classList.remove(PlayerModeClass.FULLSCREEN)
        break
      case PlayerModes.THEATER:
        this.element.classList.remove(PlayerModeClass.DEFAULT)
        this.element.classList.add(PlayerModeClass.THEATER)
        this.element.classList.remove(PlayerModeClass.FULLSCREEN)
        break
      case PlayerModes.FULLSCREEN:
        this.element.classList.remove(PlayerModeClass.DEFAULT)
        this.element.classList.remove(PlayerModeClass.THEATER)
        this.element.classList.add(PlayerModeClass.FULLSCREEN)
        break
      default:
        break
    }

    this.setHeight()
  }

  /**
   * set height calculate from player height
   *
   * @memberof ChatSelector
   */
  public setHeight(): void {
    // wait change player mode by SetTimeout
    // TODO: fix it.
    setTimeout(() => {
      let chatHeight = this.playerSelector.height
      if (this.playerMode.isFullscreen) {
        chatHeight -= 60
      } else {
        chatHeight -= 45
      }

      const style = `
        max-height: ${chatHeight.toString()}px;
        height: ${chatHeight.toString()}px;
      `
      this.element.setAttribute('style', style)
    }, 500)
  }


  /**
   * set player ondbclick event function
   *
   * @param {() => void} callback
   * @memberof ChatSelector
   */
  public setPlayerOndbclick(callback: () => void): void {
    this.playerSelector.setOndbclick(callback)
  }
}
