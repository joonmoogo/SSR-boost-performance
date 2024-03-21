import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";
import { useQuery } from "react-query";
import url from "./config/config";


export default async function Home() {
  const serverData = await fetch(`${url}/api/memo`, { cache: 'no-store' });
  const data: [{ id: string, value: string }] = await serverData.json();
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
