import TextField from "@mui/material/TextField";
import styles from './css-modules/demoForm.module.css';

const DemoForm = ({}) => {
  return (
    <>
      <div className={`${styles.demoForm} latoTxt`}>
        <h4 className={styles.demoFormHeader}>REQUEST A DEMO</h4>
        <div className={styles.formRow}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <div className={styles.submitButton}>SUBMIT</div>
        </div>
        
      </div>
    </>
  );
};

export default DemoForm;
