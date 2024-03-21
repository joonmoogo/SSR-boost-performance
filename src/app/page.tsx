import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";

export default async function Home() {
  const serverData = await fetch(`http://localhost:9999/posts`,{cache:'no-store'});
  const data : [{id:string,value:string}] = await serverData.json();
  console.log(data);
  return (
    <>
    <Link href={'/'}>Home</Link>
      <Form/>
      {data.map((element,i)=>{
        return(
          <li id={`${i}`}><Link id={`${i}`} href={`/read/${element.id}`}>read {element.id}</Link></li>
        )
      })}
    </>
  );
}
