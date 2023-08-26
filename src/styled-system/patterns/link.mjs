import { mapObject, __spreadValues, __objRest } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const linkConfig = {
transform(props) {
  const _a = props, { color } = _a, rest = __objRest(_a, ["color"]);
  return __spreadValues({
    color: "white",
    backgroundColor: color,
    shadow: {
      base: "lg",
      _hover: "xl"
    },
    p: 4,
    textAlign: "center",
    fontWeight: "medium",
    textTransform: "uppercase",
    userSelect: "none",
    letterSpacing: "widest",
    transition: "filter 0.2s ease-in-out",
    filter: {
      _hover: "brightness(1.15)"
    }
  }, rest);
}}

export const getLinkStyle = (styles = {}) => linkConfig.transform(styles, { map: mapObject })

export const link = (styles) => css(getLinkStyle(styles))
link.raw = (styles) => styles