export default function Page({ params: { path } }) {
  return <div>{JSON.stringify(path)}</div>;
}
