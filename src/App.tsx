import classnames from 'classnames';
import React from 'react';

import styles from './App.module.scss';
import CoralCanvas from './canvas/CoralCanvas';
import ZMLCanvas from './canvas/ZMLCanvas';

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={classnames(styles.ground, styles.groundLeft)}>
          <ZMLCanvas />
        </div>
        <div className={classnames(styles.ground, styles.groundRight)}>
          <CoralCanvas />
        </div>
      </main>
    </div>
  );
}

export default App;
