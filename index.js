import React from "react"
import {Text} from 'react-native'
import wrap from 'lodash.wrap'

let _applyed = false

export default class VarelaRound {

  static fontFamily = 'VarelaRound-Regular'

  /**
   * apply font family to <Wawati SC>
   */
  static globalApplyFont() {
    if (_applyed) { return }
    Text.prototype.render = wrap(Text.prototype.render, function (func, ...args) {
      let originText = func.apply(this, args)
      return React.cloneElement(originText, {
        style: [
          {fontFamily: VarelaRound.fontFamily},
          originText.props.style,
        ]
      })
    })
    _applyed = true
  }
}

