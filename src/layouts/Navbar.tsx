"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Typography from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import { Menu, XCircle } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";

export default function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <nav className="flex w-full justify-center pt-3">
      <div className="flex w-[90%] bg-primary-600 justify-between lg:py-6 py-3 lg:px-[60px] px-[30px] rounded-[85px] items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[40%] min-[512px]:w-[30%] min-[815px]:w-[25%] max-w-[235.2px] lg:w-[20%] h-auto"
        />
        <div className="flex items-center justify-center gap-16 max-lg:hidden">
          <Link href="/" className="hover:font-bold">
            <Typography variant="bl" className="text-secondary font-semibold">
              Beranda
            </Typography>
          </Link>
          <Link href="/" className="hover:font-bold">
            <Typography variant="bl" className="text-secondary font-semibold">
              Lingkungan Saya
            </Typography>
          </Link>
          <Link href="/" className="hover:font-bold">
            <Typography variant="bl" className="text-secondary font-semibold">
              Laporan
            </Typography>
          </Link>
        </div>
        <Button
          size="sm"
          href="/login"
          className="font-semibold text-lg max-lg:hidden"
        >
          Login
        </Button>

        {/* Mobile Menu Button */}

        <Button
          Variant="iconOnly"
          isIconOnly
          onPress={onOpen}
          className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary w-[6%] h-auto p-0 min-w-0 lg:hidden"
        >
          <Menu className="w-full h-auto" />
        </Button>

        {/* Mobile Drawer */}
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="right"
          size="full"
        >
          <DrawerContent className="bg-primary-600">
            {(onClose) => (
              <>
                <DrawerBody className="flex w-full flex-col items-center justify-center">
                  <div className="flex items-center justify-center py-20 w-full">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={1000}
                      height={1000}
                      className="w-[80%]"
                    />
                  </div>
                  <div className="flex flex-col gap-10 w-full text-center items-center">
                    <Link href="/" onClick={onClose}>
                      <Typography
                        variant="h5"
                        className="text-secondary font-semibold"
                      >
                        Beranda
                      </Typography>
                    </Link>
                    <Link href="/" onClick={onClose}>
                      <Typography
                        variant="h5"
                        className="text-secondary font-semibold"
                      >
                        Lingkungan Saya
                      </Typography>
                    </Link>
                    <Link href="/" onClick={onClose}>
                      <Typography
                        variant="h5"
                        className="text-secondary font-semibold"
                      >
                        Laporan
                      </Typography>
                    </Link>
                    <Button
                      size="lg"
                      href="/login"
                      className="font-semibold text-lg"
                      onPress={onClose}
                    >
                      Login
                    </Button>
                  </div>
                  <div className="flex justify-center items-center py-20 w-full">
                    <Button
                      Variant="iconOnly"
                      isIconOnly
                      onPress={onClose}
                      className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary w-fit h-fit p-0"
                    >
                      <XCircle className="h-10 w-10" />
                    </Button>
                  </div>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
