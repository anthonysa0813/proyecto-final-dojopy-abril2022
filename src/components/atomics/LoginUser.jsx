import React, { useState, useContext } from "react";
import { auth } from "../../firebase";
import { LoginContainer } from "../../styles/modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthContext } from "../../context/Auth";
import toast, { Toaster } from "react-hot-toast";

const LoginUser = ({ setActiveModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userStatus, setUserStatus } = useContext(AuthContext);

  const notify = () => toast("You're ready!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      console.log("todos los campso son obligatorios");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // guardamos un booleano en true a un estado global
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      sessionStorage.setItem("estado", true);
      console.log(Boolean(sessionStorage.getItem("estado")));

      setUserStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setActiveModal((state) => {
      return !state;
    });
  };

  return (
    <LoginContainer onSubmit={handleSubmit} autoComplete={false}>
      <div className="headerLogin">
        <h2>Crear Usuario</h2>
        <AiFillCloseCircle onClick={handleModal} />
      </div>
      <hr />
      <div className="field">
        <input
          type="email"
          placeholder="Escribe tu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Escribe tu password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="field">
        <button onClick={notify}>Registrar</button>
        <Toaster />;
      </div>
      {/* <button>Ya tengo usuario</button> */}
    </LoginContainer>
  );
};

export default LoginUser;
