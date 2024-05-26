import example from './example_img.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Attempt at creating a trading algorithm</h1>
      <p className="description">
        How I got to the project:&lt;br /&gt;
        Since I realized unity is garbage and python is much better I learned python, I also got introduced into algo trading and then I decided to make this project&lt;br /&gt;
        &lt;br /&gt;
        What I did:&lt;br /&gt;
        Essentially I got stock data through an api and tried to apply some functionality to it so it will end up as an algorithm.
      </p>
      <div className="images">
        <div className="image-container">
          <Image className="image" src={example} alt="" />
        </div>
        <div className="image-container">
          <Image className="image" src={example} alt="" />
        </div>
        <ul className="linksprj">
          <li className="linkprj">
            <Link href={"#"}>LinkedIn</Link>
          </li>
          <li className="linkprj">
            <Link href={"#"}>Github</Link>
          </li>
          <li className="linkprj">
            <Link href={"#"}>Facebook</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}