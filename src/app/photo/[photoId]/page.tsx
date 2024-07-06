import PhotoDisplay from "./PhotoDisplay";

export type PhotoData = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({params: {photoId}}: Props) {
  let data = await fetch(`https://fakestoreapi.in/api/products/${photoId}`)
    .then((res) => res.json())
    .then((res) => res);

  return (
    <div className="mt-2 grid place-content-center">
      <PhotoDisplay data={data?.product} key={data?.product?.id} />
    </div>
  );
}
