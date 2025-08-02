import { z } from "zod";

export const LaporanSubmissionSchema = z.object({
  judul: z.string().min(1, "Judul tidak boleh kosong"),
  deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong"),
  lokasi: z.string().min(1, "Lokasi tidak boleh kosong"),
  foto: z.string().min(1, "Foto tidak boleh kosong"),
});
