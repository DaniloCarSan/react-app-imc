import { level } from '../../helpers/imc';
import styles from './styles.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: level;
}

const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt={item.icon} width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]} Kg</strong> e <strong> {item.imc[1]} Kg </strong>
                </>
            </div>
        </div>
    );
}

export default GridItem;