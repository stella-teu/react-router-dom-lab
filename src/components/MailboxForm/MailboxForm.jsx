import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initalState = {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
  };
  

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initalState);
    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData(initalState);
        navigate("/mailboxes");
    }

    return(
        <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxOwner">Enter a Boxholder:</label>
            <input 
            type="text" 
            id="boxOwner" 
            name="boxOwner" 
            value={formData.boxOwner}
            onChange={handleChange}
            />
            <label htmlFor="boxSize">Select a Box Size:</label>
            <select id="boxSize" name="boxSize" onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default MailboxForm;