import styles from './planet.module.scss'
import uikit from '../uikit.module.scss'

type PlanetProps = {
    children: React.ReactNode;
};

const Planet = (props: PlanetProps) => {
    return (
        <div className={styles.planet_wrapper}>
            <div className={styles.container}>
                <a className={`${uikit.link} ${styles.link_subscribe}`}>подписаться</a>
                {props.children}
            </div>
        </div>
    )
}

export default Planet