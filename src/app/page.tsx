import './styles/home-content.css'
import './globals.css'
import Link from 'next/link';
import ImageBox from './components/PersonalBox';
import config from './config/config';
import { techDTO,personalDTO,reelsDTO } from "@/types/DTO";
import {getAllPersonal} from "@/app/util/customFetch"
export default async function Home() {
  const data: personalDTO[] = await getAllPersonal();
  console.log(data);
  return (
    <>
      {/* <div className='design-page'>
        <h3>Hellooooooooo
          Hellooooooooo
          <br></br>
          Hellooooooooo
          Hellooooooooo
          <br></br>
          Hellooooooooo
          Hellooooooooo
        </h3>
        <h1>
          joonmoogo<br />
          blog
        </h1>
        <h2>
          Throw New nullException();
          Throw New nullException();
          Throw New nullException();
          Throw New nullException();

        </h2>
        <h1>Hellooooooooo
          Hello world!
          Hello world!
          Hello world!
          Hello world!
        </h1>
        <h3>
          Throw New Error("undefined");
          Throw New Error("undefined");
          Throw New Error("undefined");
          Throw New Error("undefined");
        </h3>

        <h1>
          Hello world!
          Hello world!
          Hello world!
          Hello world!
        </h1>
        <h1>
          Hell World!
          Hell World!
          Hell World!
          Hell World!

        </h1>
        <h3>
          내가만든 쿠키
        </h3>
      </div> */}
      <div className="main-page">
        {data.map((post: personalDTO, index: number) => {
          return (
            <ImageBox key={index} item={post} />
          )
        })}
      </div>
    </>

  );
}
