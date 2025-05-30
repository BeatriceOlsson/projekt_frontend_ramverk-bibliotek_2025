import { useLocation } from "react-router-dom";

//Hemmtar datan som sumitades i /chekOute för att visa för köpparen
export default function Orderd() {
    const location = useLocation();
    const { form } = location.state || {};

    return(
        <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Tack för din bistälning</h2>
            <p className="font-senibold mb-4">Produkten/produkterna kommer att skickas till personen på addresen:</p>
            <br />
            <div className="mb-6 text-lg">
                <p>{form.firstNamne} {form.lastNamne}</p>
                <p>{form.homeAddres}</p>
                <p>{form.cityNumber} {form.cityName}</p>
            </div>

            <p className="text-mb">Facktura skickas till mail:
                <br />
                <span className="text-xl">{form.userEmail}</span></p>
            <br />
        </div>
    )
}