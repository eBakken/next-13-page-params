import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { path } = router.query;

  return <div>{JSON.stringify(path)}</div>;
}
