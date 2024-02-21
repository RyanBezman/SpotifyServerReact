import localFont from "next/font/local";

export const circular = localFont({
  src: [
    {
      path: "./fonts/CircularSp900.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/CircularSp500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CircularSpBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const circularTitle = localFont({
  src: [
    {
      path: "./fonts/CircularSpTitle.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
