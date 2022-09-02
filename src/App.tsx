

import { useState } from 'react';
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { lavels } from './helpers/imc';
import GridItem from './components/GridItem';

const App = () => {

  const [hightField, setHightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handlerCaculateButton = () => {
    const result = weightField / Math.pow(hightField, 2);
    alert(result);
  }

  const handlerCaculateClearButton = () => {
    setHightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para o índice de massa corpórea, parâmetro adotado pela Organização Mundial da Sáude para calcular o peso ideal de cada pessoa.</p>

          <input
            placeholder="Digite sua altura em metros"
            type="number"
            value={hightField > 0 ? hightField : ''}
            onChange={(v) => setHightField(parseFloat(v.target.value))}
          />

          <input
            type="number"
            placeholder="Digite seu peso em quilogramas"
            value={weightField > 0 ? weightField : ''}
            onChange={(v) => setWeightField(parseFloat(v.target.value))}
          />

          <button onClick={handlerCaculateClearButton}>
            Limpar
          </button>

          {(hightField > 0 && weightField > 0) && <button onClick={handlerCaculateButton}>
            Calcular
          </button>}

        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {lavels.map((item, key) => <GridItem key={key} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
