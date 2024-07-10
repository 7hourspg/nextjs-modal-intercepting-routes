"use client";

import {Loader} from "lucide-react";
import {useEffect} from "react";

export default function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="bg-black/40 fixed inset-0 flex items-center justify-center z-50">
      <Loader size="2rem" className="rotate" />
    </div>
  );
}
