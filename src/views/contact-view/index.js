import { motion } from "framer-motion"
import { useState } from "react"
import { SForm, STextInput, SRow, SBody } from "./styles"
import * as emailjs from "emailjs-com"

const ContactView = () => {
  const [firstName, setFirst] = useState("")
  const [lastName, setLast] = useState("")
  const [phoneNumber, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  const submit = () => {
    const isValidEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(String(email).toLowerCase())
    }

    if (
      firstName &&
      lastName &&
      phoneNumber &&
      isValidEmail(email) &&
      message
    ) {
      const serviceId = "service_s5jo4qp"
      const templateId = "template_45cfdke"
      const userId = "user_0acp7eX2TwbfK1B49veRl"
      const templateParams = {
        firstName,
        lastName,
        phoneNumber,
        email,
        message,
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error))

      setFirst("")
      setLast("")
      setPhone("")
      setEmail("")
      setMessage("")
      setEmailSent(true)
    } else {
      alert("Please fill in all fields.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <SBody>
        <h1>Contact Me!</h1>
        <SForm>
          <SRow>
            <STextInput
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirst(e.target.value)}
            />
            <STextInput
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLast(e.target.value)}
            />
          </SRow>
          <SRow>
            <STextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <STextInput
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </SRow>

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={submit}>Send Message</button>
          {emailSent ? (
            <span>Thank you for your message, we will be in touch soon!</span>
          ) : null}
        </SForm>
      </SBody>
    </motion.div>
  )
}

export default ContactView
