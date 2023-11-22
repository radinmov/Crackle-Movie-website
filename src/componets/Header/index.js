import { Style } from "./style";



export default function Header(){
    return (
    <Style>
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="left">
                        <div className="logo">
                            <img src="assets/images/logo.svg"/>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span>
                                        <i class="fa-solid fa-video"></i></span>
                                        <span>movies</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                        <i class="fa-solid fa-tv"></i></span>
                                        <span>TV shows</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                        <i class="fa-solid fa-plus"></i></span>
                                        <span>Watch List</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </div>
</Style>
    )
}
