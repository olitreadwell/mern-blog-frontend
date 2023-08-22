// external imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                getAuth(),
                email,
                password
            );
            const user = userCredential.user;

            console.log("user", user);
            navigate("/articles");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {error && <p className="error">{error}</p>}
            <form>
                <label>
                    Email:
                    <input
                        type="text"
                        placeholder="Your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button
                    onClick={login}
                   >
                    Login
                </button>
            </form>
            <Link to="/create-account">Create an account</Link>
        </div>
    );
};

export default LoginPage;
