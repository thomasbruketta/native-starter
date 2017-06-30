import React from 'react'

import Text from 'constelation-text'

/**
 * UnscaledText with the Trade Gothic header font
 */
export default class Header extends React.Component {
  static propTypes = {
    ...Text.PropTypes,
  };

  static defaultProps = {
    fontFamily: 'CheltenhamBT-Roman',
    style: {
      backgroundColor: 'transparent',
    },
  };

  render() {
    return (
      <Text {...this.props}>
        {
          (typeof this.props.children === 'string')
          ? this.props.children.toUpperCase()
          : this.props.children
        }
      </Text>
    )
  }
}
