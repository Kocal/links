/* eslint-disable */
import type { FunctionComponent } from '@builder.io/qwik'
import type { LinkProperties } from '../patterns/link'
import type { HTMLStyledProps } from '../types/jsx'

type Assign<T, U> = {
  [K in keyof T]?: K extends keyof T ? (K extends keyof U ? T[K] & U[K] : T[K]) : never
} & U

export type LinkProps = Assign<HTMLStyledProps<'div'>, Omit<LinkProperties, | 'bg'>>

/** A link component */
export declare const Link: FunctionComponent<LinkProps>