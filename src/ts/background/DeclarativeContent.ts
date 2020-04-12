/**
 * @exports
 * @class DeclarativeContent
 */
export class DeclarativeContent {
  /**
  * Creates an instance of DeclarativeContent.
  *
  * @memberof DeclarativeContent
  */
  public constructor() {
    this.initialize()
  }

  /**
   * initialize of declarative content
   *
   * @private
   */
  private initialize(): void {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'www.youtube.com'
            }
          })
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction()
        ]
      }])
    })
  }
}
