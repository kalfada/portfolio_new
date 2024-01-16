import style from './style.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const links = [
    {
        to: 'https://github.com/kalfada',
        icon: faGithub,
        title: 'Github profile'
    },
    {
        to: 'https://www.linkedin.com/in/danielkalfa',
        icon: faLinkedin,
        title: 'Linkedin profile'
    },
    {
        to: '',
        icon: faFileDownload,
        title: 'CV download'
    }
]

export default function Header() {
    return (
        <nav className={style.nav}>
            <div className={style.logo}>DANIEL KALFA</div>
            <div className={style.navOptions}>
                {links.map((link, index) =>

                    <Link
                        className={style.navOption}
                        key={index}
                        to={link.to}
                        title={link.title}
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