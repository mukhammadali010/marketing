import React, { forwardRef } from "react";
import { Container } from "./style";

export const Input = forwardRef(
  (
    {
      typing,
      width,
      height,
      mt,
      mb,
      mr,
      ml,
      br,
      gap,
      padding,
      placeholder,
      onChange,
      defaultValue,
      name,
      type,
      onKeyPress
    },
      ref , 
  ) => {
    return (
      <Container
        typing={typing}
        ref={ref}
        onKeyPress={onKeyPress}
        width={width}
        height={height}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        br={br}
        gap={gap}
        padding={padding}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        type={type}
      />
    );
  }
);

export default Input;
