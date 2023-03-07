import React from "react";
import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    " flex items-center ml-2 px-3 py-1.5 border",

    {
      "bg-blue-500 text-white": primary && !outline,
      "bg-gray-900 text-white": secondary && !outline,
      "bg-green-500 text-white": success && !outline,
      "bg-yellow-400 text-white": warning && !outline,
      "bg-red-500 text-white": danger && !outline,
      "bg-white border-blue-500 text-blue-500": outline && primary,
      "bg-white border-gray-900 text-gray-900": outline && secondary,
      "bg-white border-green-500 text-green-500": outline && success,
      "bg-white border-yellow-400 text-yellow-400": outline && warning,
      "bg-white border-red-500 text-red-500": outline && danger,
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkvariationValue: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!warning) +
      Number(!!success);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, danger, warning can be true"
      );
    }
  },
};

export default Button;
