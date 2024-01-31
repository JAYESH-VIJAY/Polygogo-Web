// Dashboard.js
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function LocationHeading() {
  const location = useLocation();
  const { listId, userId } = useParams(); // Get the dynamic part of the route

  // Define your header based on the route using the useState hook
  const [header, setHeader] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeader("Dashboard");
        break;
      case "/notification":
        setHeader("Notifications");
        break;
      case "/contacts":
        setHeader("All Contacts");
        break;
      case "/contacts/create":
        setHeader("Contact");
        break;
      case "/contacts/lists":
        setHeader("Lists");
        break;
      case `/contacts/${userId}`:
        // Set a dynamic header based on the contactId
        setHeader(`Contact`);
        break;
      case `/contacts/lists/${listId}`:
        // Set a dynamic header based on the contactId
        setHeader(`Lists`);
        break;
      case `/contacts/lists/create`:
        // Set a dynamic header based on the contactId
        setHeader(`Lists`);
        break;
      case `/reviews`:
        setHeader("Reviews");
        break;
      case `/templates`:
        setHeader("Templates");
        break;
      case `/location`:
        setHeader("Location");
        break;
      case `/company/terms`:
        setHeader("Terms and Conditions");
        break;
      case `/company/privacy`:
        setHeader("Privacy Policy");
        break;
      case `/company/agreement`:
        setHeader("User Agreement");
        break;
      case `/payments/activity`:
      case `/payments/activity/${userId}`:
      case `/payments/estimate`:
        setHeader("Payments");
        break;

      default:
        setHeader("Unknown Page");
    }
  }, [location.pathname, listId, userId]); // Listen for changes in location.pathname

  return <h4 className="hidden text-xl font-semibold md:block">{header}</h4>;
}

export default LocationHeading;
