import React from "react"
import { useForm } from "react-hook-form"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"
import { Section } from "./home"

import sendDataToAirtable from "../utils/airtablePlus"

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: undefined,
  })
  // const [message, setMessage] = useState()

  const sendMessage = (message, event) => {
    console.log(message)

    sendDataToAirtable(message)
    event.target.reset()
  }

  return (
    <Layout
      headingText="Contact"
      buttonText="Get in Touch"
      buttonLink="#form"
      backgroundURL='url("/images/ContactImage.png")'
    >
      <Section id="form">
        <MessageForm onSubmit={handleSubmit(sendMessage)}>
          <h1>Message me!</h1>
          <input name="name" placeholder="Your name here" ref={register} />
          <input
            name="email"
            type="email"
            placeholder="Your email here"
            ref={register({ required: true })}
          />
          {errors.email &&
            "How should I inform you then..? Please fill a valid email"}
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message here"
            ref={register}
          ></textarea>
          <button type="submit">SEND</button>
        </MessageForm>
      </Section>
    </Layout>
  )
}

export default Contact
