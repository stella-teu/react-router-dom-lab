import { Route, Routes } from "react-router";
import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" 
      element={<MailboxForm 
      addBox={addBox}
      mailboxes={mailboxes}
      />} />
      <Route path="mailbox/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
    </Routes>
    </>
  );
};

export default App;
