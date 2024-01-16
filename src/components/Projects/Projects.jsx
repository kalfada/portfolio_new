import { useSignal } from '@preact/signals-react';
import style from './style.module.css';

export default function Projects() {
    const currentProjectIndex = useSignal(0)

    return (
        <>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img
                        className={style.img}
                        src="/jambo.png"
                        alt="project-img"
                    />
                    <div className={style.imgOverlay}>
                        Jambo
                    </div>
                </div>
            </div>
        </>
    )
}