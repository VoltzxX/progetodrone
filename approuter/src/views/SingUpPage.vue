<template>
        <div class="main-login">
        <div class="left-login">
            <h1>Faça login<br> E entre para o nosso time</h1>
            <img src="../assets/drone/drone.svg" class="left-login-img" alt=" drone animação">
        </div>
        <div class="right-login">
            <form class= "card-login" @submit.prevent="handleSubmit">
                <h1>CADASTRO</h1>
                <div class="text-fild">
                    <input type="text" name="name" placeholder="nome" v-model="name">
                </div>
                <div class="text-fild">
                    <input type="text" name="email" placeholder="E-mail" v-model="email">
                </div>
                <div class="text-fild">
                    <input type="password" name="password" placeholder="Senha" v-model="password">
                </div>
                <button class="btn-login" type="submit">Criar conta</button>
                <RouterLink to="/login" class="link">Já possuo uma conta</RouterLink>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Cria o objeto de dados
        const data = {
          name: this.name,
          email: this.email,
          password: this.password
        };
  
        // Imprime os dados no console
        console.log('Dados do formulário:', data);
  
        // Envia os dados no corpo da requisição
        fetch('http://localhost:8080/cadastrar', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(responseData =>{
            if (responseData.erro === false) {
              this.$router.push('/login');
          }
        })
          .catch(error => console.error('Erro:', error));
      }
    }
  };
</script>
<style>
 .main-login{
    display: flex;
 }
</style>