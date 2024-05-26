import Image from "next/image";
import Link from "next/link";
import ml from './ml_trading.png';

export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Ml stock prediction </h1>
      <p className="description">
        How I got to the project:&lt;br /&gt;
        Basically because I already had the algo trading project I kept going for it just that now instead of thinking of it in a way which I first create the algorithm I thought of first creating a ml model which would also teach me a lot about it and would help my future algorithm learn&lt;br /&gt;
        &lt;br /&gt;
        What I did:&lt;br /&gt;
        I built a machine learning model and taught it to predict stocks open, high, low, volume, and close values and it actually got a very low loss function which is good because basically the lower it is the more accurate the model &amp;rang;.
      </p>
      <div className="images">
        <div className="image-container">
          <Image className="image" src={ml} alt="" />
        </div>
        <div className="image-container">
          <Image className="image" src={require('./example_img.jpg')} alt="" />
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