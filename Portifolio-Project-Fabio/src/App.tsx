import './App.css'
import Images from './components/home/Images'
import { TbBrandLinkedin } from "react-icons/tb";
import SocialButton from './components/SocialButton'
import { FaGithub, FaInstagram } from "react-icons/fa6";

function App() {

  return (
    <>
      <div className="container">
        <Images />
        <h1>Fabio Daniel Ataíde | Portfolio</h1>

        <p className="description">
        👨🏾‍💻 Dev em transição | Eng. de Software <br />   
        🎲 Dados & BI | Ex-Ambever <br />
        🚀 Apaixonado por problemas reais <br />
        🤖 IA | Aprendizado diário <br />
        </p>

        <div className="links">
          <SocialButton href="https://www.linkedin.com/in/fabiodanielataíde/">
            <TbBrandLinkedin size={24} />
            LinkedIn
          </SocialButton>
          <SocialButton href="https://github.com/fabiodaniel123">
            <FaGithub size={24} />
            GitHub
          </SocialButton>
          <SocialButton href="https://www.instagram.com/ataide.dev/?utm_source=ig_web_button_share_sheet">
            <FaInstagram size={24} />
            Instagram
          </SocialButton>
        </div>

      </div>
    </>
  )
}

export default App
