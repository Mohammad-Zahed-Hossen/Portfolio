import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#16181D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F3F4F6",
          fontWeight: 700,
          borderRadius: 6,
          border: "1px solid #374151",
          fontFamily: "monospace",
        }}
      >
        ZH
      </div>
    ),
    { ...size }
  );
}
