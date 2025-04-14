import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const wantedMailbox = props.mailboxes.find( (mailbox) =>
        mailbox._id === Number(mailboxId)
    );

    return (
        <>
        <h1>Mailbox {wantedMailbox._id}</h1>
        <h2>Details</h2>
        <p>Boxholder: {wantedMailbox.boxOwner}</p>
        <p>Box Size: {wantedMailbox.boxSize}</p>
        </>
    )
}

export default MailboxDetails;