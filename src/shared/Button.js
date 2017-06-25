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
  onPress: Function
}
export default class Button extends React.Component<void, Props, void> {
  render() {
    return (
      <Event_
        hitSlop={10}
        pressEffect='opacity'
        onPress={this.props.onPress}
      >
        <Style_
          borderColor='white'
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
                color='white'
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
