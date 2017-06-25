// @flow weak
import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
} from 'react-native'
import View, { Row } from 'constelation-view'
import Style_ from 'constelation-style_'
import Header from 'shared/Header'
import COLOR from 'constants/COLOR'
import SLOP from 'constants/slop'

export default class NavBar extends React.Component {
  static propTypes = {
    border: PropTypes.bool,
    centerButton: PropTypes.node,
    leftActiveOpactiy: PropTypes.number,
    leftButton: PropTypes.node,
    navigator: PropTypes.object,
    onCenterButtonPress: PropTypes.func,
    onLeftButtonPress: PropTypes.func,
    onRightButtonPress: PropTypes.func,
    rightButton: PropTypes.node,
    rightButtonActiveOpacity: PropTypes.number,
    theme: PropTypes.oneOf(['dark', 'light']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    animated: PropTypes.bool,
    backgroundColor: PropTypes.any, //can be animated values
    borderColor: PropTypes.any, //can be animated values
  };

  static defaultProps = {
    border: true,
    leftButtonActiveOpactiy: 0.2,
    leftButton: null,
    rightButton: null,
    rightButtonActiveOpacity: 0.2,
    theme: 'light',
  };

  handleCenterButtonPress = () => {
    if (!this.props.onCenterButtonPress) return
    this.props.onCenterButtonPress()
  }

  handleLeftButtonPress = () => {
    if (!this.props.onLeftButtonPress) return
    this.props.onLeftButtonPress()
  }

  handleRightButtonPress = () => {
    if (!this.props.onRightButtonPress) return
    this.props.onRightButtonPress()
  }

  render() {
    let backgroundColor = COLOR.DARK
    if (this.props.backgroundColor) {
      backgroundColor = this.props.backgroundColor
    }
    let textColor = this.props.theme === 'dark' ? 'WHITE' : 'DARK'
    if (this.props.textColor) {
      textColor = this.props.textColor
    }

    let borderColor = COLOR.BORDER_LIGHT
    if (this.props.borderColor) {
      borderColor = this.props.borderColor
    }

    return (
      <Style_
        backgroundColor={backgroundColor}
        // borderColor={borderColor}
        // borderBottomWidth={this.props.theme === 'light' && this.props.border ? 1 : 0}
      >
        <Row
          height={80}
          paddingTop={20}
          paddingHorizontal={28}
          align='center'
          justify='center'
          animated={this.props.animated}
          zIndex={1}
        >
          {/* Nav Bar Left Button  */}
          <View
            grow={1}
            shrink={1}
            basis={0}
            alignHorizontal='left'
          >
            <TouchableOpacity
              onPress={this.handleLeftButtonPress}
              hitSlop={SLOP}
              activeOpacity={this.props.leftButtonActiveOpacity}
            >
              {this.props.leftButton}
            </TouchableOpacity>
          </View>

          {/* Nav Bar Title or Center Button  */}
          {
            this.props.centerButton ? (
              <View>
                <TouchableOpacity
                  onPress={this.handleCenterButtonPress}
                  hitSlop={SLOP}
                >
                  {this.props.centerButton}
                </TouchableOpacity>
              </View>
            ) : (
              (this.props.title && this.props.title.length > 0) && (
                <View>
                  <Header
                    color={COLOR[textColor]}
                    center
                    spacing={1}
                  >
                    {this.props.title}
                  </Header>
                </View>
              )
            )
          }

          {/* Nav Bar Right Button  */}
          <View
            grow={1}
            shrink={1}
            basis={0}
            alignHorizontal='right'
          >
            <TouchableOpacity
              onPress={this.handleRightButtonPress}
              hitSlop={SLOP}
              activeOpacity={this.props.rightButtonActiveOpacity}
            >
              {this.props.rightButton}
            </TouchableOpacity>
          </View>
        </Row>
      </Style_>
    )
  }
}
