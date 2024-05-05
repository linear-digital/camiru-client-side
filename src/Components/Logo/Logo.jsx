import { Link } from 'react-router-dom'
import LogoW from '../../assets/logo-white.png'
export const LogoWhite = ({ className, to }) => {
    return <Link to={to ? to : "/"}>
        <img
            className={className}
            src={LogoW} alt={"Logo Camiru"} />
    </Link>
}