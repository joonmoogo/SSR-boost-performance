import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href={'/'}>Home</Link>
      <li><Link href={'/read/1'}>read1</Link></li>
      <li><Link href={'/read/2'}>read2</Link></li>
      <li><Link href={'/read/3'}>read3</Link></li>
      <li><Link href={'/read/4'}>read4</Link></li>
      <li><Link href={'/read/5'}>read5</Link></li>
      <li><Link href={'/read/6'}>read6</Link></li>
    </>
  );
}
