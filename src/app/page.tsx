import './globals.scss'
import Link from 'next/link';
import ImageBox from './_components/PersonalBox';
import config from './_config/config';
import { techDTO, personalDTO, reelsDTO } from "@/types/DTO";
import { getAllPersonal } from "@/app/_util/customFetch"
export default async function Home(request: any) {
  const data: personalDTO[] = await getAllPersonal();
  // console.log(data);
  const { viewport } = request.searchParams
  return (
    <>
      <div className="introduce-page">
        {/* {data.map((post: personalDTO, index: number) => {
          return (
            <ImageBox key={index} item={post} viewport={viewport} />
          )
        })} */}

        <div className="left-side">
          <div className="left-header">
            Frontend Developer
          </div>
          <div className="left-content">
            Agenecy-level web  development
            services at freelancer rates
          </div>
          <div className="left-description">
          My mission is to design and develop a website that you and your audience love  
          </div>
        </div>
        <div className="right-side">
          <div className="right-image">
          </div>
        </div>

      </div>
    </>

  );
}
