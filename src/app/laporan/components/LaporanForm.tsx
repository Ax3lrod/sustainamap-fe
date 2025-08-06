"use client";

import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { LaporanSubmissionSchema } from "@/validation/laporan";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@heroui/react";
import dynamic from "next/dynamic";
import Dropzone from "@/components/Dropzone";
import Button from "@/components/ui/Button";

const LocationPicker = dynamic(() => import("@/components/Map/LocationPicker"), {
  ssr: false,
});

import useLaporanSubmissionMutation from "../mutation/useLaporanSubmissionMutation";

export default function LaporanForm() {
  const methods = useForm<z.infer<typeof LaporanSubmissionSchema>>({
    mode: "onTouched",
    resolver: zodResolver(LaporanSubmissionSchema),
  });

  const { handleSubmit, control, register } = methods;

  const { mutate, isPending } = useLaporanSubmissionMutation();

  const onSubmit = (data: z.infer<typeof LaporanSubmissionSchema>) => {
    mutate(data);
  };

  return (
    <div className="w-full h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex max-lg:flex-col justify-between max-lg:gap-8 items-stretch h-full"
        >
          <div className="w-full lg:w-[46%] h-full">
            <LocationPicker
              nameLat="latitude"
              nameLng="longitude"
              control={control}
              defaultPosition={[-6.2, 106.8]}
            />
          </div>
          <div className="w-full lg:w-[46%] flex flex-col gap-8">
            <Input
              label="Judul Laporan"
              placeholder="Masukkan judul laporan"
              {...register("title")}
              labelPlacement="outside-top"
              className="w-full"
              classNames={{
                label: "font-bold text-black",
              }}
              isRequired
            />
            <Textarea
              label="Deskripsi Laporan"
              {...register("description")}
              placeholder="Masukkan deskripsi laporan"
              labelPlacement="outside-top"
              className="w-full"
              classNames={{
                label: "font-bold text-black",
                inputWrapper: "pt-[1%] h-full",
              }}
              isRequired
            />
            <Controller
              name="photo"
              control={control}
              render={({ field: { onChange } }) => (
                <Dropzone
                  name="photo"
                  label="Foto Laporan"
                  required
                  onChange={(files) => {
                    onChange(files[0]); // ambil file pertama
                  }}
                />
              )}
            />
            <Button
              type="submit"
              className="w-full py-[20px] font-bold"
              color="warning"
              size="lg"
            >
              {isPending ? "Mengirim..." : "Kirim Laporan"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
