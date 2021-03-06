// @flow

import * as React from 'react'
import { StyleSheet, Text as RNText, TouchableHighlight, View } from 'react-native'

import { rawStyles, styles } from './style.js'

export type TextProps = {
  children: React.Node,
  style?: StyleSheet.Styles
}
class Text extends React.Component<TextProps> {
  render() {
    const { children, style, ...props } = this.props
    return (
      <RNText numberOfLines={1} ellipsizeMode="middle" style={[styles.buttonText, styles.primaryButton2Text, style]} {...props}>
        {children}
      </RNText>
    )
  }
}

export type Props = {
  children: React.Node,
  style?: StyleSheet.Styles,
  onPress?: () => mixed
}
export class PrimaryButton2 extends React.Component<Props> {
  static Text = Text
  render() {
    const { children, style, ...props } = this.props
    return (
      <TouchableHighlight underlayColor={rawStyles.primaryButton2Underlay.color} style={[styles.button, styles.primaryButton2, style]} {...props}>
        <View>{children}</View>
      </TouchableHighlight>
    )
  }
}
