import z from "zod";

export const LaporanSubmissionSchema = z.object({
  title: z.string("Laporan harus ada judul.").min(5),
  description: z.string("Laporan harus ada deskripsi").min(5),
  latitude: z.number("Laporan harus ada koordinat latitude."),
  longitude: z.number("Laporan harus ada koordinat longitude"),
  photo: z.file("Laporan harus ada foto."),
});
