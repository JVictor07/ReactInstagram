import React, { useState } from 'react';

/* import SuccessMessage from '../../components/SuccessMessage'; */

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")

  /* const [sucess, setSucess] = useState(false) */

  function RegisterUser() {
    /* const data = {
      name: name,
      username: username,
      email: email,
      avatar: image,
    };

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        setSucess(true)
      })
      .catch((error) => {
        console.error("Error:", error)
    }) */

    window.alert('Desculpe, mas nossas rotas estão com problemas 😢. Por favor, tente novamente mais tarde')
  }

  return (
    <React.Fragment data-testid="user-form">
      <section className="profile">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {image ? (
                  <img src={image} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form" data-testid="user-form">
        <div className="post__form__wrapper">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="">Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">
            Url da imagem de perfil (use a url da imagem do Linkedin)
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button onClick={() => RegisterUser()}>Cadastrar</button>
        </div>
        {/* {sucess && <SuccessMessage />} */}
      </section>
    </React.Fragment>
  );
  
};

export default UserForm;
