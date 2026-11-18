import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import {AiFillHome} from "react-icons/ai";
import {RiPagesLine} from "react-icons/ri";
import {IoMdContact} from "react-icons/io";
import {BiFootball} from "react-icons/bi";


const FootBar = () => {
    const { t } = useTranslation(); // Initialize the t function
    const iconStyle = { color: 'white' };
    const iconSize = 25;
    const textStyle = { fontSize: '12px', color: 'white' };
    return (
    <div>
        <nav className="navbar fixed-bottom bg-body-tertiary d-md-none bg-dark justify-content-between" data-bs-theme="dark">



                <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                    <IoMdContact size={iconSize} style={iconStyle}/>
                    <span style={textStyle}>{t("profile")}</span>
                </Link>

            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <BiFootball size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("live")}</span>
            </Link>
            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <AiFillHome size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("Home")}</span>
            </Link>

            <Link className="nav-link d-flex flex-column align-items-center" to="/mybets">
                <RiPagesLine size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("MyBets")}</span>
            </Link>
            <Link className="nav-link d-flex flex-column align-items-center" to="/home">
                <RiPagesLine size={iconSize} style={iconStyle}/>
                <span style={textStyle}>{t("Betslip")}</span>
            </Link>



        </nav>

    </div>
  );
};

export default FootBar;
