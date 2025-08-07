"use client";

import Image from "next/image";
import Typography from "@/components/Typography";
import { ArrowLeft } from "lucide-react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import Link from "next/link";
import axios from "axios";

import { useState } from "react";
import toast from "react-hot-toast";

function MobileView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async (e: any) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://localhost:5000/auth/register", {
        email: email,
        password: password
      });

      const rilData = await data.data;
      localStorage.setItem("userToken", rilData.data.token);
      // console.log(rilData);
      toast.success("User Registered Successfully!");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      // console.log(err.response.data.msg);
      toast.error(`Error: ${err.response.data.msg}`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="lg:bg-white bg-secondary lg:px-11 py-16 lg:rounded-2xl lg:w-[45%] w-full max-lg:h-screen p-10">
      {/* <div className="flex flex-col justify-between h-full"> */}
      <form onSubmit={doLogin} className="flex flex-col justify-between h-full">
        {/* MOBILE ATAS */}
        <div>
          <div className="flex flex-row gap-x-2.5">
            <ArrowLeft />
            <Typography className="font-bold">Kembali</Typography>
          </div>

          <div className="mt-10">
            <Typography className="font-bold text-5xl">Register</Typography>
          </div>

          <div className="mt-16">
            <Input
              className="font-bold mb-14"
              key={1}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              label="Email"
              labelPlacement="outside"
              placeholder="Masukkan email anda"
              type="email"
              required
              isRequired
            />
            <Input
              className="font-bold"
              key={2}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              label="Password"
              description="Password minimal terdiri dari 8 karakter dan memiliki huruf, angka dan simbol."
              labelPlacement="outside"
              placeholder="Masukkan password"
              type="password"
              required
              isRequired
            />
          </div>
        </div>

        {/* MOBILE BAWAH */}
        <div className="text-center">
          <Button type="submit" color="warning" className="w-full font-bold">
            Register
          </Button>
          <Typography className="inline-block mt-2">
            Sudah memiliki akun?{" "}
            <Link href="/login" className="hover:underline text-[#00AEF2]">
              Login
            </Link>
          </Typography>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="bg-[#1F3F32] lg:py-16 lG:px-14 w-full h-full">
      <div className="flex flex-row-reverse justify-between lg:pr-10">
        <MobileView />
        <div className="lg:block hidden">
          <Image
            src="/globe-register.png"
            alt="globe login"
            width={650}
            height={605}
          />
        </div>
      </div>
    </div>
  );
}
