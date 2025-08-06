"use client";

import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, XCircle } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";

export default function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full fixed z-[10] top-0 pt-[18px] lg:px-[30px] px-[15px] flex justify-center items-center">
      <div className="bg-primary-600 w-full rounded-[80px] lg:px-[60px] max-lg:px-[5%] py-[18px] flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="lg:w-[20%] md:w-[30%] w-[40%] h-auto"
        ></Image>
        <div className="flex justify-center items-center gap-10 max-lg:hidden">
          <Link href="/">
            <Typography variant="bl" className="font-bold text-secondary">
              Beranda
            </Typography>
          </Link>
          <Link href="/lingkungan-saya">
            <Typography variant="bl" className="font-bold text-secondary">
              Lingkungan Saya
            </Typography>
          </Link>
          <Link href="/laporan">
            <Typography variant="bl" className="font-bold text-secondary">
              Laporan
            </Typography>
          </Link>
        </div>
        <Link href="/login w-fit max-lg:hidden">
          <Button className="rounded-xl bg-secondary font-bold text-primary-600 max-lg:hidden">
            Login
          </Button>
        </Link>

        {/* Mobile Drawer*/}
        <Button
          className="bg-transparent p-0 lg:hidden"
          disableRipple
          isIconOnly
          onPress={onOpen}
        >
          <Menu width={24} height={24} className="text-secondary" />
        </Button>

        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="full"
          className="z-[9999]"
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerBody className="bg-primary-600 flex flex-col items-center gap-[20%] w-full h-full pt-[20%]">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-[80%] h-auto"
                  ></Image>
                  <section className="w-full flex flex-col items-center gap-10">
                    <Link href="/">
                      <Typography
                        variant="t"
                        className="font-bold text-secondary"
                      >
                        Beranda
                      </Typography>
                    </Link>
                    <Link href="/lingkungan-saya">
                      <Typography
                        variant="t"
                        className="font-bold text-secondary"
                      >
                        Lingkungan Saya
                      </Typography>
                    </Link>
                    <Link href="/laporan">
                      <Typography
                        variant="t"
                        className="font-bold text-secondary"
                      >
                        Laporan
                      </Typography>
                    </Link>
                    <Link href="/login w-fit">
                      <Button
                        className="rounded-xl bg-secondary font-bold text-primary-600"
                        size="lg"
                      >
                        Login
                      </Button>
                    </Link>
                  </section>
                  <Button
                    className="bg-transparent p-0"
                    disableRipple
                    isIconOnly
                    onPress={onClose}
                  >
                    <XCircle
                      width={24}
                      height={24}
                      className="text-secondary"
                    />
                  </Button>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
