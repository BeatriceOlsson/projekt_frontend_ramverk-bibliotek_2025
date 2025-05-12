import { useLocation } from "react-router-dom";


export default function Orderd() {
    const location = useLocation();
    const { form } = location.state || {};

    return(
        <div>
            <h2>Tack för din bistälning</h2>
            <p>Produkten/produkterna kommer att skickas till personen på addresen:</p>
            <br />
            <p>{form.firstNamne} {form.lastNamne}</p>
            <p>{form.homeAddres}</p>
            <p>{form.cityNumber} {form.cityName}</p>
            <br />
            <p>Facktura skickas till mail: {form.userEmail}</p>
            <br />
        </div>
    )
}