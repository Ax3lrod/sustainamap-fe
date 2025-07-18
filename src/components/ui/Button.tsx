"use client";
import clsxm from "@/lib/clsxm";
import { Ripple, Spinner, useButton } from "@heroui/react";
import { forwardRef } from "react";

import type { ButtonProps as BaseButtonProps } from "@heroui/react";

type CustomVariant = "primary" | "danger" | "warning" | "success";
type ButtonOutlined = "base" | "outlined";
type ButtonSize = "sm" | "md" | "lg";

interface CustomButtonProps
  extends Omit<BaseButtonProps, "startContent" | "endContent"> {
  Variant?: CustomVariant;
  outlined?: ButtonOutlined;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const {
      Variant = "primary",
      outlined = "base",
      size = "md",
      leftIcon,
      rightIcon,
      ...restProps
    } = props;

    const {
      domRef,
      children,
      spinnerSize,
      spinner = <Spinner color="current" size={spinnerSize} />,
      spinnerPlacement,
      isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref: ref as React.Ref<HTMLButtonElement>,
      startContent: leftIcon,
      endContent: rightIcon,
      ...restProps,
    });

    const buttonProps = getButtonProps();

    const { ripples, onClear } = getRippleProps();
    return (
      <button
        ref={domRef}
        {...buttonProps}
        className={clsxm(
          buttonProps.className,
          "flex items-center justify-center gap-2",
          "font-semibold",
          [
            size === "lg" && [
              "min-h-fit rounded-lg px-8 py-3",
              "text-[20px] leading-[28px]",
              "max-md:text-[16px] max-md:leading-[24px]",
            ],
            size === "md" && [
              "min-h-fit rounded-md px-6 py-2",
              "text-[16px] leading-[24px]",
              "max-md:text-[14px] max-md:leading-[18px]",
            ],
            size === "sm" && [
              "min-h-fit rounded-sm px-4 py-1",
              "text-[14px] leading-[20px]",
              "max-md:text-[12px] max-md:leading-[16px]",
            ],
          ],
          [
            Variant === "primary" && [
              outlined === "base" && [
                "bg-yellow-500 text-black",
                "border-2 border-yellow-500",
              ],
              outlined === "outlined" && [
                "border-2 border-yellow-500 bg-yellow-500/0 text-yellow-500",
              ],
            ],
          ]
        )}
      >
        {leftIcon}
        {isLoading && spinnerPlacement === "start" && spinner}
        {children}
        {isLoading && spinnerPlacement === "end" && spinner}
        {rightIcon}
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  }
);

export default Button;
Button.displayName = "Button";
