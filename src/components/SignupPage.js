import { useState } from "react";

function SignupPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [nationality, setNationality] = useState("");
   const [newUser, setNewUser] = useState(null);

   let greeting = "";
   if (nationality === "en") {
     greeting = "Hello";
   } else if (nationality === "de") {
     greeting = "Hallo";
   } else if (nationality === "fr") {
     greeting = "Bonjour";
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLogin = {email, password, greeting }
        setNewUser(newLogin);
        setEmail("");
        setPassword("");
        setNationality("");
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ines@ironhack.com"/>
            <br />
            <br />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="********"/>
            <br />
            <br />
            <label>Nationality:</label>
            <select name='nationality' onChange={(e)=>setNationality(e.target.value)}>
                <option value="" disabled selected>Select your country</option>
                <option value="en">en</option>
                <option value="de">de</option>
                <option value="fr">fr</option>
            </select>
            <br />
            <br />
            <button>Sign up</button>
        </form>

            { newUser && <div>
            <p>{newUser.greeting}</p>
            <p>Your email is {newUser.email}</p> 
            </div>
            }
            
        </div>

    )
}

export default SignupPage;