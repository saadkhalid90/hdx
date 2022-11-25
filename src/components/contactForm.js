import TextField from "@mui/material/TextField";
import { style } from "@mui/system";
import styles from "./css-modules/contactForm.module.css";

const ContactForm = ({}) => {
  return (
    <div className={styles.formContain} style={{ marginLeft: "20px" }}>
      <div className={styles.formRow}>
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline::before": { borderBottomColor: "white" },
            "& .MuiInput-underline::after": { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::before" : { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::after" : { borderBottomColor: "white" }
          }}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline::before": { borderBottomColor: "white" },
            "& .MuiInput-underline::after": { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::before" : { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::after" : { borderBottomColor: "white" }
          }}
        />
      </div>
      <div className={styles.formRow}>
        <TextField
          id="standard-basic"
          label="Subject"
          variant="standard"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline::before": { borderBottomColor: "white" },
            "& .MuiInput-underline::after": { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::before" : { borderBottomColor: "white" },
            "&:hover .MuiInput-underline::after" : { borderBottomColor: "white" }
          }}
        />
      </div>
      <div className={`${styles.formRow} ${styles.message}`}>
        <TextField
          id="standard-basic"
          label="Message"
          variant="outlined"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "&:hover": {
              label: { color: "white" },
            },
            height: "50px",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "white",
              },
            },
            "& .Mui-focused": {
              fieldset: {
                "& .Mui-focused": {
                  color: "white",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
