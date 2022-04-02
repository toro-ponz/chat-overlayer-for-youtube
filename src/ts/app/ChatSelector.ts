import { AreaMode, AreaModeManager } from 'components/AreaMode'
import { PlayerMode, PlayerModeManager } from 'components/PlayerMode'
import { PlayerSelector } from 'app/PlayerSelector'
import { Selector } from 'components/Selector'
import { Cookies } from 'components/Cookies'

/**
 * @export
 * @class ChatSelector
 * @extends {Selector}
 */
export class ChatSelector extends Selector {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof App
   */
  private cookies: Cookies

  /**
  * area mode manager instance
  *
  * @private
  * @type {AreaModeManager}
  * @memberof ChatSelector
  */
 private areaModeManager: AreaModeManager

 /**
 * player mode manager instance
 *
 * @private
 * @type {PlayerModeManager}
 * @memberof ChatSelector
 */
private playerModeManager: PlayerModeManager

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

    this.cookies = new Cookies()
    const playerMode = this.cookies.isWide ? PlayerMode.THEATER : PlayerMode.DEFAULT

    this.areaModeManager = new AreaModeManager(this.htmlElement)
    this.playerModeManager = new PlayerModeManager(this.htmlElement, playerMode)
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
  public setPlayerMode(playerMode: PlayerMode): void {
    this.playerModeManager.setMode(playerMode)
    this.setHeight()
  }

  /**
   * set area mode class
   *
   * @param areaMode
   * @memberof ChatSelector
   */
  public setAreaMode(areaMode: AreaMode): void {
    this.areaModeManager.setMode(areaMode)
  }

  /**
   * toggle area mode
   *
   * @memberof ChatSelector
   */
  public toggleAreaMode(): void {
    this.areaModeManager.toggleMode()
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
      if (this.playerModeManager.isFullscreen) {
        chatHeight -= 65
      } else {
        chatHeight -= 55
      }

      const style = `
        max-height: ${chatHeight.toString()}px;
        height: ${chatHeight.toString()}px;
      `
      this.element.setAttribute('style', style)
    }, 500)
  }

  /**
   * set fullscreen mode
   *
   * @param {boolean} isFullscreen
   * @memberof App
   */
  public setIsFullscreen(isFullscreen: boolean): void {
    if (isFullscreen) {
      this.setPlayerMode(PlayerMode.FULLSCREEN)
    } else if (this.playerModeManager.isTheater) {
      this.setPlayerMode(PlayerMode.THEATER)
    } else {
      this.setPlayerMode(PlayerMode.DEFAULT)
    }
  }

  /**
   * set player ondbclick listener
   *
   * @param {() => void} listener
   * @memberof ChatSelector
   */
  public setPlayerOndbclickListener(listener: () => void): void {
    this.playerSelector.setOndbclickListener(listener)
  }

  /**
   * change player size listener
   *
   * @readonly
   * @returns {() => void}
   * @memberof App
   */
  public get sizeChangeListener(): () => void {
    return () => {
      if (this.playerModeManager.isDefault) {
        this.setPlayerMode(PlayerMode.THEATER)
      } else {
        this.setPlayerMode(PlayerMode.DEFAULT)
      }
    }
  }
}
