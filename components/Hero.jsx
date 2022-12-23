import classes from "./Hero.module.css"

function Hero() {
    return(
        <>
          <section className={classes.hero}>
                <div className={classes.image}></div>
                <h1>Hello I am John</h1>
                <p>I develop websites in my free time and play video games</p>
          </section>
        </>
    )
}

export default Hero