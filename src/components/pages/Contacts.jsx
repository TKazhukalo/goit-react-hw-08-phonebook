import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
//import { selectIsLoggedIn } from "redux/contacts/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
   // const isLoading = useSelector(selectIsLoggedIn);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    
    return (
        <>
            <Helmet>
                <title> Your contacts</title>
            </Helmet>
            
        </>
    )
}