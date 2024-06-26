import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
import React from 'react';
export default function Page() {
  return (
    <div className="container">
      <h1 className="head">Food court in school</h1>
      <p className="description">
        How I got to the project:<br />
        Unfortunately imri said that the kiosk I made wasn&apos;t ethical and wasn&apos;t necessarily legal so I had to shut it down.<br />
        <br />
        What I did:<br />
        This was a food court I made just that this time I also built a small space for it as well using argamans room and it sold hot dogs and chips.
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
            <Link href={"https://www.linkedin.com/in/eshel-nagar-3a8294259/"}>LinkedIn</Link>
          </li>
          <li className="linkprj">
            <Link href={"https://github.com/UnmatchedPerspicacious"}>Github</Link></li>
          <li className="linkprj">
            <Link href={"https://www.instagram.com/eshesthenics/"}>Instagram</Link></li>
        </ul>
      </div>
    </div>
  );
}
