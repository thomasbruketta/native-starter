// @flow
// imports {{{

import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'
import Header from 'shared/Header'
import Text from 'constelation-text'
import View from 'constelation-view'
// }}}

type Props = {
  label: string,
  onPress: Function,
  buttonType?: 'no-feedback' | 'opacity',
}

export default class Button extends React.Component<void, Props, void> {
  buttonContent = {

  }

  render() {
    const pressEffect = (this.props.buttonType === 'opacity') ? 'opacity' : null

    return (
      <Event_
        hitSlop={10}
        pressEffect={pressEffect}
        onPress={this.props.onPress}
      >
        <Style_
          borderColor='#222'
          borderWidth={1}
          borderRadius={1}
        >
          <View
            center
            paddingTop={10}
            paddingBottom={8}
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
      </Event_>
    )
  }
}
