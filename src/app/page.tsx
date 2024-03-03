import Image from "next/image";
import background from "../../public/images/pill-hand-background.jpg";
import Link from "next/link";
import { Lobster } from "next/font/google"

const main_message = "Ask the doctor allows you to ask a question and one of the verified health professionals can give an opinion before you borrow the neighbour's prescription."
const lobster = Lobster({weight: "400", subsets: ["latin"]});

export default function Home() {
  return (
    <div>
      <section id='banner'>
        <div className="banner-background">
          <Image src={background} alt="background: pills in the palm" className="banner-image" />
          <div className="banner-content">
            <div className="second-focus">
              <p className="headline">Stop taking your neighbours' strange pills...</p>
              <p className="main-message">{main_message}</p>
              <Link href="" className="register-button">Register Now</Link>
            </div>            
          </div>
        </div>
      </section>
      <section id='content'>
        <div className="content-container">
          <div className="main-message-mobile">
            <p className={lobster.className}>"{main_message}"</p>
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
}
