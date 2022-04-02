/**
 * page action class
 *
 * @exports
 * @class Page
 */
export class Page {
  /**
   * get overlay mode
   *
   * @param {chrome.tabs.Tab} tab
   * @param {(isOverlayMode: boolean) => void} callback
   * @memberof Page
   */
  public getIsOverlayMode(tab: chrome.tabs.Tab, callback: (isOverlayMode: boolean) => void): void {
    if (tab.id == undefined) {
      return
    }

    chrome.action.getTitle({ tabId: tab.id }, (title: string) => {
      callback(title == PageTitle.ENABLED)
    })
  }

  /**
   * update page icon by overlay mode
   *
   * @param {chrome.tabs.Tab} tab
   * @param {boolean} isOverlayMode
   * @param {() => void} callback
   * @memberof Page
   */
  public updateMode(tab: chrome.tabs.Tab, isOverlayMode: boolean, callback: () => void): void {
    this.updateIcon(tab, isOverlayMode, () => {
      this.updateTitle(tab, isOverlayMode, callback)
    })
  }

  /**
   * update page icon by overlay mode
   *
   * @private
   * @param {chrome.tabs.Tab} tab
   * @param {boolean} isOverlayMode
   * @param {() => void} callback
   * @memberof Page
   */
  private updateIcon(tab: chrome.tabs.Tab, isOverlayMode: boolean, callback: () => void): void {
    if (tab.id == undefined) {
      return
    }

    chrome.action.setIcon({
      path : isOverlayMode ? PageIcon.ENABLED : PageIcon.DISABLED,
      tabId: tab.id
    }, callback)
  }

  /**
   * update page title by overlay mode
   *
   * @private
   * @param {chrome.tabs.Tab} tab
   * @param {boolean} isOverlayMode
   * @param {() => void} callback
   * @memberof Page
   */
  private updateTitle(tab: chrome.tabs.Tab, isOverlayMode: boolean, callback: () => void): void {
    if (tab.id == undefined) {
      return
    }

    chrome.action.setTitle({
      title: isOverlayMode ? PageTitle.ENABLED : PageTitle.DISABLED,
      tabId: tab.id
    }, callback)
  }
}

/**
 * enum of page icon file path
 *
 * @enum PageIcon
 */
enum PageIcon {
  ENABLED = '../icons/16.png',
  DISABLED = '../icons/off.png'
}

/**
 * enum of page title tooltip title
 *
 * @enum PageTitle
 */
enum PageTitle {
  ENABLED = 'disable overlay mode',
  DISABLED = 'enable overlay mode'
}
