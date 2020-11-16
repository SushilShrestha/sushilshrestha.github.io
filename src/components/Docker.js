import twitter from "../images/Twitter.png"
import gmail from "../images/Google.png"
import facebook from "../images/Facebook.png"
import github from "../images/Github.png"
import linkedin from "../images/LinkedIn.png"
import blogger from "../images/Blogger.png"

export default function Docker(props) {
  return (
    <div className="dock">
      <ul>
        <li>
          <em><span>Gmail</span></em>
          <a href="mailto:afahocci@gmail.com" title="Gmail"><img src={gmail} alt="email address"/></a>
        </li>
        <li>
          <em><span>Facebook</span></em>
          <a href="https://facebook.com/afahocci8" title="Facebook"><img src={facebook} alt="facebook address"/></a>
        </li>
        <li>
          <em><span>Twitter</span></em>
          <a href="https://twitter.com/afahocci" title="Twitter"><img src={twitter} alt="twitter address"/></a>
        </li>
        <li>
          <em><span>Github</span></em>
          <a href="https://github.com/sushilshrestha" title="Github"><img src={github} alt="find me on github"/></a>
        </li>
        <li>
          <em><span>Linkedin</span></em>
          <a
            href="https://www.linkedin.com/profile/view?id=AAIAAAkRIDgBtj5Y7NgzNzz62OhWdWHfE9lPtiU&trk=nav_responsive_tab_profile_pic"
            title="Linkedin"><img src={linkedin} alt="find me on linkedin"/></a>
        </li>
        <li>
          <em><span>Blog</span></em>
          <a href="http://blog.shresthasushil.com.np" title="Blog"><img src={blogger} alt="find me on blogger"/></a>
        </li>
      </ul>
    </div>
  );
}

