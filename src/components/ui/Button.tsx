"use client";
import clsxm from "@/lib/clsxm";
import { Ripple, Spinner, useButton } from "@heroui/react";
import { forwardRef } from "react";

import type { ButtonProps as BaseButtonProps } from "@heroui/react";

type CustomVariant = "primary" | "secondary" | "iconOnly";
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
      size,
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
              "min-h-fit rounded-[14px] px-8 py-3",
              "text-[20px] leading-[28px]",
              "max-md:text-[16px] max-md:leading-[24px]",
            ],
            size === "md" && [
              "min-h-fit rounded-[12px] px-6 py-2",
              "text-[16px] leading-[24px]",
              "max-md:text-[14px] max-md:leading-[18px]",
            ],
            size === "sm" && [
              "min-h-fit rounded-[12px] px-4",
              "text-[14px] leading-[20px]",
              "max-md:text-[12px] max-md:leading-[16px]",
            ],
          ],
          [
            Variant === "primary" && [
              outlined === "base" && [
                "bg-secondary text-primary-600",
                "border-2 border-secondary",
              ],
              outlined === "outlined" && [
                "border-2 border-secondary bg-secondary/0 text-secondary",
              ],
            ],
            Variant === "secondary" && [
              outlined === "base" && [
                "bg-yellow-500 text-primary-600",
                "border-2 border-yellow-500",
              ],
              outlined === "outlined" && [
                "border-2 border-yellow-500 bg-yellow-500/0 text-yellow-500",
              ],
            ],
            Variant === "iconOnly" && ["bg-transparent"],
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
