import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";

export const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700']
})

export const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700']
})