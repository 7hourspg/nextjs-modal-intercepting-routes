import PhotoDisplay from "./photo/[photoId]/PhotoDisplay";

export default async function Home() {
  let data = await fetch("https://fakestoreapi.in/api/products")
    .then((res) => res.json())
    .then((res) => res);

  return (
    <main className="flex flex-wrap gap-4 justify-center">
      {data?.products?.map((product: any) => (
        <PhotoDisplay data={product} key={product.id} />
      ))}
    </main>
  );
}
