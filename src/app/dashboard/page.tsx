"use client";
import Typography from "@/components/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure
} from "@heroui/react";

import { User } from "lucide-react";

export default function DashboardPage() {
  const profileUrl = "https://avatar.iran.liara.run/public";
  const [laporans, setLaporans] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    axios
      .post(
        "http://localhost:5000/auth/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((res) => {
        setUserEmail(res.data.data.email);
      });

    axios
      .get("http://localhost:5000/laporan/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setLaporans(res.data.data);
        // console.log(laporans);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#1f3f32] w-full h-full pb-20">
      <Typography
        className="text-white md:text-6xl text-center text-2xl md:text-left font-bold py-12 px-16"
        // variant="h3"
      >
        Riwayat Laporan Pengguna
      </Typography>

      {/* Mobile Drawer*/}
      <Button
        className="bg-secondary p-6 absolute top-10 right-10"
        disableRipple
        isIconOnly
        onPress={onOpen}
      >
        👤
      </Button>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        className="z-[9999]"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className="bg-primary-600 flex flex-col items-center gap-[20%] w-full h-full pt-[20%]">
                <Image
                  loader={() => profileUrl}
                  src={profileUrl}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[80%] h-auto"
                ></Image>
                <div className="text-white text-center">
                  <Typography className="text-white text-3xl">Email</Typography>
                  <Typography className="text-white">{userEmail}</Typography>
                  <Button color="danger" className="mt-10">
                    Logout
                  </Button>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 mb-9">
        {laporans.map((laporan, idx) => (
          <div className="bg-white rounded-xl px-8 py-8" key={idx}>
            <Typography className="text-3xl font-bold">
              {laporan.title}
            </Typography>
            <Typography className="mt-4 text-xl">What Happened?</Typography>
            <Typography className="text-[#6f6f6f]">
              {laporan.description.substring(0, 150) + "..."}
            </Typography>

            <Typography className="mt-4 text-xl">Pics:</Typography>
            <Image
              loader={() => `http://localhost:5000/uploads/${laporan.photo}`}
              src={`http://localhost:5000/uploads/${laporan.photo}`}
              alt="doksli"
              width={500}
              height={300}
              className="w-full"
            />

            <Typography className="mt-2 text-[#afafaf]">
              {laporan.latitude}, {laporan.longitude}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
