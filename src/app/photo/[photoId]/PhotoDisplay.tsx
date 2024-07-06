import Image from "next/image";
import Link from "next/link";

export default function PhotoDisplay({
  data,
}: {
  data: {
    id: number;
    title: string;
    image: string;
  };
}) {
  return (
    <div className="flex gap-4 w-64 mx-auto">
      <Link href={`/photo/${data?.id}`}>
        <div className="border-2 rounded-xl overflow-hidden size-64 relative">
          <Image
            src={data?.image}
            alt={data?.title}
            sizes="256px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
    </div>
  );
}
