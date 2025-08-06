import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { z } from "zod";
import { LaporanResponse } from "@/types/laporan";
import { LaporanSubmissionSchema } from "@/validation/laporan";

export default function useLaporanSubmissionMutation() {
  const router = useRouter();

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    LaporanResponse,
    AxiosError,
    z.infer<typeof LaporanSubmissionSchema>
  >({
    mutationFn: async (data: z.infer<typeof LaporanSubmissionSchema>) => {
      const token = localStorage.getItem("userToken");
      if (!token) {
        toast.error("Silahkan login terlebih dahulu");
        throw new Error("Anda harus login terlebih dahulu.");
      }

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("latitude", String(data.latitude));
      formData.append("longitude", String(data.longitude));
      formData.append("photo", data.photo);

      console.log(formData);

      const response = await api.post<LaporanResponse>("/laporan", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Laporan berhasil dikirim!");
      router.push("/");
    },
    onError: (error) => {
      const errorMessage =
        (error.response?.data as { message?: string })?.message ||
        "Terjadi kesalahan saat mengirim laporan.";
      toast.error(errorMessage);
    },
  });

  return {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
