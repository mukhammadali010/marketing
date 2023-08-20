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
      gap,
      padding,
      placeholder,
      onChange,
      defaultValue,
      name,
      type
    },
      ref , 
  ) => {
    return (
      <Container
        typing={typing}
        ref={ref}
        width={width}
        height={height}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
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
