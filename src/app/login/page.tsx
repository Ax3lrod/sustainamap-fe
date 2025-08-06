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
      const data = await axios.post("http://localhost:5000/auth/login", {
        email: email,
        password: password
      });

      const rilData = await data.data;
      console.log(rilData);
      toast.success("Logged in successfully!");
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Incorrect Email / Password!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="md:bg-white bg-secondary md:px-11 py-16 rounded-2xl md:w-[45%] w-full">
      {/* <div className="flex flex-col justify-between h-full"> */}
      <form onSubmit={doLogin} className="flex flex-col justify-between h-full">
        {/* MOBILE ATAS */}
        <div>
          <div className="flex flex-row gap-x-2.5">
            <ArrowLeft />
            <Typography className="font-bold">Kembali</Typography>
          </div>

          <div className="mt-10">
            <Typography className="font-bold text-5xl">Login</Typography>
          </div>

          <div className="mt-16">
            <Input
              className="font-bold mb-14"
              key={1}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              label="Username / Email"
              labelPlacement="outside"
              placeholder="Masukkan username atau email anda"
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
            Login
          </Button>
          <Typography className="inline-block mt-2">
            Belum memiliki akun?{" "}
            <Link href="/register" className="hover:underline text-[#00AEF2]">
              Registrasi
            </Link>
          </Typography>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-secondary py-16 px-14 w-full h-[100vh]">
      <div className="flex flex-row justify-between">
        <MobileView />
        <div className="md:block hidden">
          <Image
            src="/globe-login.png"
            alt="globe login"
            width={650}
            height={605}
          />
        </div>
      </div>
    </div>
  );
}
