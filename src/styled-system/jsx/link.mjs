import { h } from '@builder.io/qwik'
import { styled } from './factory.mjs';
import { getLinkStyle } from '../patterns/link.mjs';

export const Link = function Link(props) {
  const { color, ...restProps } = props
const styleProps = getLinkStyle({color})
return h(styled.div, { ...styleProps, ...restProps })
}