import FooterMenu from "./FooterMenu"
import Social from "./Social";
import {Style} from "./Style"

const learnmore = [
    {
        name: "about crackle",
        link: "#",
      },
      {
        name: "supported deviced",
        link: "#",
      },
      {
        name: "careers",
        link: "#",
      },
      {
        name: "advertise with us",
        link: "#",
      },
];
const gethelp = [
    {
        name: "FAQs",
        link: "#",
      },
      {
        name: "submit a request",
        link: "#",
      },
];
const stayLegal = [
    {
        name: "ad choices",
        link: "#",
      },
      {
        name: "privacy policy",
        link: "#",
      },
      {
        name: "terms of service",
        link: "#",
      },
      {
        name: "accessibility",
        link: "#",
      },
];
const social = [
  {
    icon: "fa-facebook",
    link: "#",
  },
  {
    icon: "fa-twitter",
    link: "#",
  },
  {
    icon: "fa-instagram",
    link: "#",
  },
  {
    icon: "fa-youtube",
    link: "#",
  },
  {
    icon: "fa-linkedin",
    link: "#",
  },
]

export default function Footer(){
    return  (
        <Style>
            <div className="footer">
                <div className="container">
                    <div className="flex space-between">
                    <FooterMenu menuTitle="learn more" items={learnmore} />
                    <FooterMenu menuTitle="get help" items={gethelp} />
                    <FooterMenu menuTitle="stay legal" items={stayLegal} />
                    </div>
                    <div className="social">
                          <Social items={social}/>
                    </div>
                    <div className="copyright">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="bottom-footer"/>
            </div>
        </Style>
    )
}
