import React from 'react'
import { Container } from './style'

const Button = ({
        type,
        ty,
        width,
        height,
        mt,
        mb,
        mr,
        ml,
        gap,
        br,
        padding,
        children,
        onclick,
}) => {

  return (
    <Container 
    type={type}
    width = {width}
    height ={height}
    mt = {mt}
    mb = {mb}
    mr ={mr}
    ml = {ml}
    gap ={gap}
    br={br}
    ty={ty}
    padding ={padding}
    onClick={onclick}
    >
     {children}
    </Container>
  )
}

export default Button
