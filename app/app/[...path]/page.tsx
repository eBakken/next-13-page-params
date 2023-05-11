export default function Page({ params: { path } }) {
  console.log(path);

  return <div>{JSON.stringify(path)}</div>;
}
