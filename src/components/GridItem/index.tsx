import { level } from '../../helpers/imc';

type Props = {
    item: level;
}

const GridItem = ({ item }: Props) => {

    return (
        <div>{item.title}</div>
    );
}

export default GridItem;