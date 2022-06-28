import PageModel from "./PageModel"

class PageStore {

  public current: PageModel

  constructor () {
    this.current = new PageModel()    
  }

  addPage() {}

  selectPage() {}  
}

var pageStore = new PageStore()

export {pageStore}