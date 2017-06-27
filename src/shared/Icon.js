import React from 'react'
import { Image, Animated } from 'react-native'

const ICON = {
  // share: require('images/icons/share.png'),
  // heart: require('images/icons/heart.png'),
  // plusCircle: require('images/icons/plus-circle.png'),
  // plusCircleBig: require('images/icons/plus-circle-big.png'),
  // plusCircleAdd: require('images/icons/plus-circle-add.png'),
  // checkCircle: require('images/icons/check-circle.png'),
  // checkCircleDark: require('images/icons/check-circle-dark.png'),
  // checkCircleUnchecked: require('images/icons/check-circle-unchecked.png'),
  // check: require('images/icons/check.png'),
  // search: require('images/icons/search.png'),
  // comment: require('images/icons/comment.png'),
  // arrowRight: require('images/icons/right-arrow.png'),
  // arrowDown: require('images/icons/arrowDownWhite.png'),
  arrowLeft: require('images/icons/left-arrow.png'),
  bag: require('images/icons/shopping_bag.png'),
  close: require('images/icons/close.png'),
  // plus: require('images/icons/plusNarrow.png'),
  // camera: require('images/icons/camera.png'),
  // more: require('images/icons/more.png'),
}

export default class Icon extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(Object.keys(ICON)).isRequired,
    animated: React.PropTypes.bool,
    color: React.PropTypes.string,
  }

  render() {
    const ImageClass = (this.props.animated ? Animated.Image : Image)
    const style = [this.props.style]

    if (this.props.color) {
      style.push({ tintColor: this.props.color })
    }

    return (
      <ImageClass
        source={ICON[this.props.type]}
        style={style}
        resizeMode={Image.resizeMode.contain}
      />
    )
  }
}
