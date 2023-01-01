import TextField from "@mui/material/TextField";
import { style } from "@mui/system";
import styles from "./css-modules/contactForm.module.css";
import { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import Fade from "@mui/material/Fade";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = ({}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [disableInputs, setDisableInputs] = useState(false);
  const [incompleteErr, setIncompleteErr] = useState(false);
  const [successFul, setSuccessFul] = useState(false);

  function setValueState(event, id) {
    if (id === "message") {
      setMessage(event.target.value);
    } else if (id === "subject") {
      setSubject(event.target.value);
    } else if (id === "fname") {
      setFName(event.target.value);
    } else if (id === "lname") {
      setLName(event.target.value);
    }
  }

  useEffect(() => {
    emailjs.init("xrS15Rz9UYNUR-bpr");
  }, []);

  function submitContactForm() {
    if (message === "" || subject === "" || fName === "" || lName === "") {
      setIncompleteErr(true);
      setSuccessFul(false);
    } else {
      setDisableInputs(true);
      let templateParams = {
        from_name: fName + " " + lName,
        subject: subject,
        message: message,
      };
      sendEmail(templateParams);
    }
  }

  function resetForm() {
    setMessage("");
    setSubject("");
    setFName("");
    setLName("");
  }

  function sendEmail(templateParams) {
    emailjs
      .send(
        "service_8c2zize",
        "template_ftl2lma",
        templateParams,
        "xrS15Rz9UYNUR-bpr"
      )
      .then(
        function (response) {
          resetForm();
          setIncompleteErr(false);
          setSuccessFul(true);
          setDisableInputs(false);
        },
        function (error) {
          setIncompleteErr(true);
          setSuccessFul(false);
          setDisableInputs(false);
        }
      );
  }

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
            "&:hover .MuiInput-underline::before": {
              borderBottomColor: "white",
            },
            "&:hover .MuiInput-underline::after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(event) => setValueState(event, "fname")}
          required
          disabled={disableInputs}
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
            "&:hover .MuiInput-underline::before": {
              borderBottomColor: "white",
            },
            "&:hover .MuiInput-underline::after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(event) => setValueState(event, "lname")}
          required
          disabled={disableInputs}
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
            "&:hover .MuiInput-underline::before": {
              borderBottomColor: "white",
            },
            "&:hover .MuiInput-underline::after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(event) => setValueState(event, "subject")}
          required
          disabled={disableInputs}
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
          onChange={(event) => setValueState(event, "message")}
          required
          disabled={disableInputs}
        />
      </div>

      <div className={styles.status_contain}>
        {incompleteErr && <Fade in={true}><p className={styles.status}>Failed to submit. Please make sure all information is provided and try again</p></Fade>}
        {successFul && <Fade in={true}><p className={styles.status}>Thankyou for reaching out to us. If you have any further inquiries feel free to reach out to us at info@haystack-dx.com</p></Fade>}
      </div>

      <div className={styles.flexed_buttons}>
        <div onClick={() => submitContactForm()} role="button" aria-pressed="false" tabindex="0" className={styles.submit_button}>
          <p>Submit</p>
        </div>

        <div className={styles.social_contain}>
          <FaInstagram className={styles.social_icon} />
          <FaFacebookF className={styles.social_icon} />
          <FaTwitter className={styles.social_icon} />
          <FaYoutube className={styles.social_icon} />
          <FaLinkedin className={styles.social_icon} />
          <MdEmail className={styles.social_icon} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
