// @flow
import React from 'react'
import { Row, Col } from 'constelation-view'
import Text from 'constelation-text'
import Header from 'shared/Header'
import Button from 'shared/Button'
import ButtonHighlight from 'shared/ButtonHighlight'
import COLOR from 'constants/COLOR'

type Props = {
  // hasButton?: bool,
  buttonType?: 'no-feedback' | 'opacity' | 'highlight',
  onIncreaseCounter: Function,
}

export default class SimpleDetail extends React.Component<void, Props, void> {

  render() {
    console.log(this.props.buttonType)
    return (
      <Row
        justify='space-between'
        align='center'
        height={100}
        paddingHorizontal={28}
        backgroundColor='white'
      >
        <Col>
          <Header
            size={14}
            height={24}
          >
            Master Oak Staff
          </Header>
          <Text
            size={14}
            color={COLOR.GREY_TEXT}
            fontFamily='ChiswickGrotesqueWeb-Light'
          >
            Wizard Staff — 270 Gold
          </Text>
        </Col>
        { this.props.buttonType
          ? this.props.buttonType !== 'highlight'
            ? (
              <Button
                label={'Add to Chest'}
                onPress={this.props.onIncreaseCounter}
                buttonType={this.props.buttonType}
              />
            )
            : (
              <ButtonHighlight
                label={'Add to Chest'}
                onPress={this.props.onIncreaseCounter}
                buttonType={this.props.buttonType}
              />
            )
          : null
        }
      </Row>
    )
  }
}
