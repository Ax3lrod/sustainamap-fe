import React from "react";
import { clsxm } from "@/lib/clsxm";

export enum TypographyVariant {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    t,
    bl,
    bm,
    bs,
    c
}

export enum FontVariant {
    title, 
    body
}

export enum FontWeight {
    regular, 
    medium,
    semibold,
    bold,
    extrabold
}

type TypographyProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    weight?: keyof typeof FontWeight;
    font?: keyof typeof FontVariant;
    variant?: keyof typeof TypographyVariant;
    children?: React.ReactNode;
}

export default function Typography<T extends React.ElementType> ({
    as,
    children,
    weight = 'medium',
    className,
    font = 'body',
    variant,
    ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p';
  return (
    <Component
    className={clsxm(
        // *=============== Font Type ==================
        'text-black',
        [
            font === 'title' && [
            'font-outfit',
            [
              weight === 'extrabold' && 'font-extrabold',
              weight === 'regular' && 'font-normal',
              weight === 'medium' && 'font-medium',
              weight === 'bold' && 'font-bold',
              weight === 'semibold' && 'font-semibold',
            ],
          ],
          font === 'body' && [
            'font-poppins',
            [
              weight === 'extrabold' && 'font-extrabold',
              weight === 'regular' && 'font-normal',
              weight === 'medium' && 'font-medium',
              weight === 'bold' && 'font-bold',
              weight === 'semibold' && 'font-semibold',
            ],
          ],
        ],
         // *=============== Font Variants ==================
        [
          variant === 'h1' && [
            clsxm(
              'text-[72px] leading-[88px]',
              'max-md:text-[48px] max-md:leading-[64px]'
            ),
          ],
          variant === 'h2' && [
            clsxm(
              'text-[64px] leading-[80px]',
              'max-md:text-[40px] max-md:leading-[56px]'
            ),
          ],
          variant === 'h3' && [
            clsxm(
              'text-[56px] leading-[72px]',
              'max-md:text-[36px] max-md:leading-[48px]'
            ),
          ],
          variant === 'h4' && [
            clsxm(
              'text-[48px] leading-[64px]',
              'max-md:text-[30px] max-md:leading-[40px]'
            ),
          ],
          variant === 'h5' && [
            clsxm(
              'text-[36px] leading-[40px]',
              'max-md:text-[28px] max-md:leading-[36px]'
            ),
          ],
          variant === 'h6' && [
            clsxm(
              'text-[32px] leading-[36px]',
              'max-md:text-[24px] max-md:leading-[32px]'
            ),
          ],
           variant === 't' && [
            clsxm(
              'text-[24px] leading-[32px]',
              'max-md:text-[20px] max-md:leading-[28px]'
            ),
          ],
          variant === 'bl' && [
            clsxm(
              'text-[18px] leading-[24px]',
              'max-md:text-[16px] max-md:leading-[20px]'
            ),
          ],
          variant === 'bm' && [
            clsxm(
              'text-[16px] leading-[24px]',
              'max-md:text-[14px] max-md:leading-[18px]'
            ),
          ],
          variant === 'bs' && [
            clsxm(
              'text-[15px] leading-[20px]',
              'max-md:text-[12px] max-md:leading-[16px]'
            ),
          ],
          variant === 'c' && [
            clsxm(
              'text-[12px] leading-[16px]',
              'max-md:text-[10px] max-md:leading-[14px]'
            ),
          ],
        ],
        className
    )}
    {...props}
    > {children} 
    </Component>
  );
}