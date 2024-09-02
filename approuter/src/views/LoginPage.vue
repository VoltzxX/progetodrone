<template>
  <div class="LoginPage">
    <div class="left-login">
      <h1>Faça login<br> E entre para o nosso time</h1>
      <img src="../assets/drone/drone.svg" class="left-login-img" alt=" drone animação">
    </div>
    <div class="right-login">
      <form class="card-login" @submit.prevent="handleSubmit">
        <h1>LOGIN</h1>
        <div class="text-fild">
          <input type="text" name="email" placeholder="Usuário" v-model="email">
        </div>
        <div class="text-fild">
          <input type="password" name="password" placeholder="Senha" v-model="password">
        </div>
        <button class="btn-login" type="submit">Login</button>
        <RouterLink to="/signup" class="RouterLogin">Criar uma conta</RouterLink>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleSubmit() {
      // Cria o objeto de dados
      const data = {
        email: this.email,
        password: this.password
      };

      // Imprime os dados no console
      console.log('Dados do formulário:', data);

      // Envia os dados no corpo da requisição
      fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(responseData => {
          if (responseData.erro === false) {
            this.$router.push('/listausuarios');
          } else {
            this.message = 'Erro: ' + responseData.mensagem;
          }
        })
        .catch(error => console.error('Erro:', error));



    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&display=swap');

body {
  font-family: 'noto Sans', sans-serif;
}

.link {
  color: #00ff88;
  text-decoration: none;
}

.LoginPage {
  margin: center;
  width: 100vw;
  height: 100vh;
  background-color: #201b2c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-login {

  width: 50vw;
  height: 100vh;
  background-color: #201b2c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.left-login>h1 {
  font-size: 3vw;
  color: #77ffc0;
}

.left-login-img {
  width: 35vw;
}

.right-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-login {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background-color: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
}

.card-login>h1 {
  color: #00ff88;
  font-weight: 800;
  margin: 0;
}

.RouterLogin {
  color: #00ff88;
}

.text-fild {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
}

.text-fild>input {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background: #514369;
  color: #f0ffffde;
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;
}

.text-fild>label {
  color: #f0ffffde;
  margin-bottom: 10px;
}

.text-fild>input::placeholder {
  color: #f0ffff94;
}

.btn-login {
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #2b134b;
  background-color: #00ff88;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00ff8852;
}

@media only screen and (max-width: 950px) {
  .card-login {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  .main-login {
    flex-direction: column;
  }

  .left-login>h1 {
    display: none;
  }

  .left-login {
    width: 100%;
    height: auto;
  }

  .right-login {
    width: 100%;
    height: auto;
  }

  .left-login-img {
    width: 50vw;
  }

  .card-login {
    width: 90%;
  }
}
</style>