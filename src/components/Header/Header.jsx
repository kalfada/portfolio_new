import style from './style.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const links = [
    {
        to: 'https://github.com/kalfada',
        icon: faGithub,
    },
    {
        to: 'https://www.linkedin.com/in/danielkalfa',
        icon: faLinkedin,
    },
    {
        to: '',
        icon: faFileDownload,
    }
]

export default function Header() {
    return (
        <nav className={style.nav}>
            <div className={style.logo}>Daniel's Porfolio</div>
            <div className={style.navOptions}>
                {links.map((link, index) =>
                    <Link
                        className={style.navOption}
                        key={index}
                        to={link.to}
                        target='_blank'
                    >
                        <FontAwesomeIcon
                            icon={link.icon}
                            className={style.icon}
                        />
                    </Link>
                )}
            </div>
        </nav>
    )
}