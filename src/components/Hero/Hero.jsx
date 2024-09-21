import "./Hero.scss"
import HeroBannerPoster from '/assets/Images/Hero-poster-imgv2.jpeg'
import ReactIcon from '/assets/Images/react-tech-icon.png'
import HtmlIcon from '/assets/Images/Html-tech-icon.png'
import CssIcon from '/assets/Images/Css-tech-icon.png'
import JavascriptIcon from '/assets/Images/Javascript-tech-icon.png'


const Hero = () => {
    return (
        <section className="hero__container" id="HeroSection">
            <aside className="hero__content">
                <h2>Building digital Experience that Inspire</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut nesciunt mollitia quidem ipsa. Possimus hic numquam quia officiis. Fugit!</p>
            </aside>

            <aside className="hero__img">
                <div>
                    <figure className="tech__icon">
                        <img src={ReactIcon} alt="Tech Icons" />
                    </figure>
                    <figure>
                        <img src={HeroBannerPoster} alt="Tech Icons" />
                    </figure>
                </div>

                <div>
                    <figure className="tech__icon">
                        <img src={HtmlIcon} alt="Tech Icons" />
                    </figure>

                    <figure className="tech__icon">
                        <img src={CssIcon} alt="Tech Icons" />
                    </figure>

                    <figure className="tech__icon">
                        <img src={JavascriptIcon} alt="Tech Icons" />
                    </figure>
                </div>
            </aside>

        </section>
    )
}

export default Hero
