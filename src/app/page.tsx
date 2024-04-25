import './globals.css'
import Link from 'next/link';
import ImageBox from './components/PersonalBox';
import config from './config/config';
import { techDTO,personalDTO,reelsDTO } from "@/types/DTO";
import {getAllPersonal} from "@/app/util/customFetch"
export default async function Home(request:any) {
  const data: personalDTO[] = await getAllPersonal();
  console.log(data);
  const {viewport} = request.searchParams
  return (
    <>
      <div className="main-page">
        {data.map((post: personalDTO, index: number) => {
          return (
            <ImageBox key={index} item={post} viewport={viewport} />
          )
        })}
      </div>
    </>

  );
}
