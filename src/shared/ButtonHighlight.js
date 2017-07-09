// @flow
// imports {{{
import React from 'react'
import { TouchableHighlight, View as NativeView } from 'react-native'
import Style_ from 'constelation-style_'
import Header from 'shared/Header'
import View from 'constelation-view'
// }}}

type Props = {
  label: string,
  onPress: Function,
  buttonType: 'no-feedback' | 'opacity' | 'highlight',
}

export default class Button extends React.Component<void, Props, void> {
  render() {
    const pressEffect = (this.props.buttonType === 'opacity') ? 'opacity' : null

    return (
      <TouchableHighlight
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        pressEffect={pressEffect}
        onPress={this.props.onPress}
        activeOpacity={0.2}
        underlayColor='green'
      >
        <NativeView>
          <Style_
            borderColor='#222'
            borderWidth={1}
            borderRadius={1}
            backgroundColor='white'
          >
            <View
              center
              paddingVertical={8}
              paddingHorizontal={12}
            >
              <Style_
                backgroundColor='transparent'
              >
                <Header
                  color='#222'
                  size={12}
                  height={16}
                >
                  {this.props.label}
                </Header>
              </Style_>
            </View>
          </Style_>
        </NativeView>
      </TouchableHighlight>
    )
  }
}
