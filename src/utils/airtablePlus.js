import AirtablePlus from "airtable-plus"

const airtableContactedMe = new AirtablePlus({
  baseID: process.env.REACT_APP_AIRTABLE_BASEID,
  apiKey: process.env.REACT_APP_AIRTABLE_APIKEY,
  tableName: "Messages",
  camelCase: false,
  complex: false,
})

const sendDataToAirtable = async (message) => {
  const name = message.name || message.email
  try {
    await airtableContactedMe.create(message)
    console.log(
      `Thank you ${name} for contacting me. I can't wait to read your message.
      ${message.name}`
    )
  } catch (error) {
    console.error(error)
  }
}

export default sendDataToAirtable
