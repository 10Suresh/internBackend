import Contact from "../models/contact.js";

export const SendMessage = async (req, res) => {
 
  try {
    console.log(req.body,"request")
    // const { name, email, message } = req.body;
    // console.log(" name, email, message", name, email, message) 
    // const newMessage = new Contact({ name, email, message });
    // await newMessage.save();
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "An error occurred while sending the message" });
  }
};

