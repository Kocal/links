/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type LinkProperties = {
   color?: ConditionalValue<Tokens["colors"] | Properties["backgroundColor"]>
}


type LinkOptions = LinkProperties & Omit<SystemStyleObject, keyof LinkProperties | 'bg'>

interface LinkPatternFn {
  (options?: LinkOptions): string
  raw: (options: LinkOptions) => LinkOptions
}

/** A link component */
export declare const link: LinkPatternFn;
