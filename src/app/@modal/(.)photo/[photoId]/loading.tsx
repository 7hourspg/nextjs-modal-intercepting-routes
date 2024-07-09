import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-black/40 fixed inset-0 flex items-center justify-center z-50">
      <Loader size="2rem" className="rotate" />
    </div>
  );
}
