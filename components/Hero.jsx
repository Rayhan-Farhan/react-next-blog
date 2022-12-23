import Image from "next/image";
import Logo from "../public/images/site/image.jpg"
import classes from "./Hero.module.css";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
            <Image src={Logo} alt = "logo" width={300} height={300}/>
        </div>
        <h1>Hello I am John</h1>
        <p>I develop websites in my free time and play video games</p>
      </section>
    </>
  );
}

export default Hero;
