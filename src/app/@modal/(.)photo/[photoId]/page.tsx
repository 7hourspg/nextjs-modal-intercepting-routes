import PhotoDisplay from "@/app/photo/[photoId]/PhotoDisplay";
import {Modal} from "@/components/Modal";

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
    <Modal>
      <PhotoDisplay data={data?.product} key={data?.product?.id} />
    </Modal>
  );
}
