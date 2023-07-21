import { ContactForm } from "components/ContactForm/ContactForm";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    
    return (
        <>
            <Helmet>
                <title> Your contacts</title>
            </Helmet>
                <ContactForm />
           
            
        </>
    )
}