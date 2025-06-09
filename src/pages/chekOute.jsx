import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";


export default function ChekOute(){
    const [ form ,setForm ] = useState({firstNamne:"", lastNamne:"", userEmail:"", homeAddres:"", cityName:"", cityNumber:"",});
    const { clearCart } = useCart();

    const navigate = useNavigate();

    const handelForm = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value}));
    }

    //Hanterar datan och skickar den vidare till /orderd. useNavigate hook används för att förhinda behöva ha data i URL:en
    const handelSubmit = (event) => {
        event.preventDefault();
        clearCart();
        navigate("/orderd", {state: {form}});
    }
    return(
        <div className="max-w-xl mx-auto p-4">
            <h2 className="text-2xl mb-4">Bestälar information</h2>
            <form onSubmit={handelSubmit} className="space-y-4 ">
                <label htmlFor="firstNamne"  className="block mb-1">Förnamn</label>
                <input type="text" name="firstNamne" id="firstNamne" value={form.firstNamne} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <br />
                <label htmlFor="lastNamne" className="block mb-1">Efternamn</label>
                <input type="text" name="lastNamne" id="lastNamne" value={form.lastNamne} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <br />
                <label htmlFor="userEmail" className="block mb-1">Email</label>
                <input type="email" name="userEmail" id="userEmail" value={form.userEmail} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <br />
                <label htmlFor="homeAddres" className="block mb-1">Addres</label>
                <input type="text" name="homeAddres" id="homeAddres" value={form.homeAddres} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <br />
                <label htmlFor="cityName" className="block mb-1">Stad</label>
                <input type="text" name="cityName" id="cityName" value={form.cityName} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <label htmlFor="cityNumber" className="block mb-1">Post numer</label>
                <input type="text" name="cityNumber" id="cityNumber" value={form.cityNumber} onChange={handelForm} className="w-full border rounded px-3 py-2"/>
                <br />
                <button type="submit" className="text-2xl bg-blue-500 px-4 py-2 rounded shadow hover:bg-gray-100" >Bestäl</button>
            </form>
        </div>
    )
}