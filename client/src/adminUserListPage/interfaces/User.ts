export interface User {
  id: string;
  name: { firstName: string; lastName: string };
  photoUrl: string;
  confirmed: boolean;
  avgRating: number;
  status: string;
  registeredSince: Date;
}

export const userInitializer: User = {
  id: "",
  name: { firstName: "", lastName: "" },
  photoUrl: "e6f5576639004a105dc76a6d0bbfb0d0",
  confirmed: false,
  avgRating: 0,
  status: "",
  registeredSince: new Date(),
};
