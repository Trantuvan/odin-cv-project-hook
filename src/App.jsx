import clsx from 'clsx';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={clsx(styles.grid2Cols)}>
      <div className={clsx(styles.formContainer)}>forms</div>
      <div className={clsx(styles.resumeContainer)}>resume</div>
    </div>
  );
}

export default App;
