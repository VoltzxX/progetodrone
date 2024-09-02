<template>
  <div>
    <h1>Lista de Usuários</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">

        <strong>Nome:</strong> {{ user.name }}
        <strong>Email:</strong> {{ user.email }}<br>
        <strong>Senha:</strong> {{ user.password }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [] // Inicializa a lista de usuários como um array vazio
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:8080/listausuarios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      this.users = responseData;
      console.log('Dados do formulário:', this.users); // Corrigido para `this.users`
    } catch (error) {
      console.error('Erro:', error);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-inline: 10%;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: white;
}
</style>