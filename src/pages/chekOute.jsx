import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ChekOute({ cart, clearCart }){
    const [ form ,setForm ] = useState({firstNamne:"", lastNamne:"", userEmail:"", homeAddres:"", cityName:"", cityNumber:"",});

    const navigate = useNavigate();

    const handelForm = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value}));
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(form, cart);
        clearCart();
        navigate("/orderd", {state: {form}});
    }
    return(
        <div>
            <h2>Bestälar information</h2>
            <form onSubmit={handelSubmit}>
                <label htmlFor="firstNamne">Förnamn</label>
                <input type="text" name="firstNamne" id="firstNamne" value={form.firstNamne} onChange={handelForm}/>
                <br />
                <label htmlFor="lastNamne">Efternamn</label>
                <input type="text" name="lastNamne" id="lastNamne" value={form.lastNamne} onChange={handelForm}/>
                <br />
                <label htmlFor="userEmail">Email</label>
                <input type="email" name="userEmail" id="userEmail" value={form.userEmail} onChange={handelForm}/>
                <br />
                <label htmlFor="homeAddres">Addres</label>
                <input type="text" name="homeAddres" id="homeAddres" value={form.homeAddres} onChange={handelForm}/>
                <br />
                <label htmlFor="cityName">Stad</label>
                <input type="text" name="cityName" id="cityName" value={form.cityName} onChange={handelForm}/>
                <label htmlFor="cityNumber">Post numer</label>
                <input type="text" name="cityNumber" id="cityNumber" value={form.cityNumber} onChange={handelForm}/>
                <br />
                <button type="submit">Bestäl</button>
            </form>
        </div>
    )
}