import React, {FC} from 'react';

export default class PageModel {
  get leftSideNodes(): FC[] {
    return [() => (<h3>First section</h3>), () => (<h3>Second section</h3>)]
  }
  get mainSideNodes(): FC[]  {
    return []
  }
  get rightSideNodes() {
    return [() => (<h4>Toп игроки</h4>), () => (<h4>Новости</h4>)]
  }
}
