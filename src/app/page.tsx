"use client";
import { useState } from "react";

export default function Home() {
  const [src, setSrc] = useState<string | undefined>(undefined);
  const handleFile = (e: any) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <input type="file" className="h-60 border" onChange={handleFile} />
      <img src={src} alt="" />
    </div>
  );
}
