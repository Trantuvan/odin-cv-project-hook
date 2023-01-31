import clsx from 'clsx';
import styles from './styles/App.module.css';
import FormToolBar from './components/common/form-tool-bar';

function App() {
  return (
    <div className={clsx(styles.grid2Cols)}>
      <div className={clsx(styles.formContainer)}>
        <FormToolBar formName="Personal details" />
      </div>
      <div className={clsx(styles.resumeContainer)}>resume</div>
    </div>
  );
}

export default App;
