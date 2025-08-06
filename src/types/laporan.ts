export type Laporan = {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  photo: File;
};

export type LaporanResponse = {
  userId: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  photo: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
