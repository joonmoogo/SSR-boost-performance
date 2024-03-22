import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";
import { useQuery } from "react-query";
import { getMemos } from "./call/memo";

export default async function Home() {
  const data = await getMemos();
  console.log(data);

  return (
    <>
      <Link href={'/'}>Home</Link>
      <Form />
      {data.map((element, i) => {
        return (
          <li id={`${i}`}><Link id={`${i}`} href={`/read/${element.value}`}>read {element.value}</Link></li>
        )
      })}
    </>
  );
}
