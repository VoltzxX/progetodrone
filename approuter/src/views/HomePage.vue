<template>
    <div class="home">
        <section id="sobre">
            <img src="../assets/drone/drone.svg" alt="drone verse">
            <h1 class="title">Olá, seja bem-vindo ao <samp class="receba">droneverse</samp></h1>
                <p>
                    Na nossa loja, estamos empolgados em apresentar a você um mundo de possibilidades nos céus. Se você é um piloto experiente em busca do drone dos seus sonhos ou um iniciante curioso, temos a tecnologia perfeita para elevar sua experiência aérea a um novo patamar.
                </p>
                
            <h2>Por que escolher a Nossa Loja:</h2>
                
            <h3>Variedade Incrível:</h3>
                <p>
                    Oferecemos uma ampla gama de drones, desde quadricópteros divertidos para iniciantes até drones profissionais com recursos avançados de câmera.
                </p>
                
            <h3>Qualidade Premium:</h3>
            
                <p>
                Trabalhamos com as principais marcas e fabricantes do setor para garantir que você receba produtos de alta qualidade e desempenho.
                </p>
            
            <h3>Atendimento ao Cliente de Excelência:</h3>
                <p>
                Nossa equipe está pronta para ajudar a encontrar o drone perfeito para atender às suas necessidades. Tem perguntas? Estamos aqui para responder.
                </p>
            
            <h3>Preços Competitivos:</h3>
                <p>
                    Oferecemos produtos excepcionais a preços acessíveis. Encontre os melhores negócios em nossa loja.
                </p>
            
            <h3>Envio Rápido e Seguro:</h3>
                <p>
                    Queremos que você comece a voar o mais rápido possível. Oferecemos opções de envio seguro e rápido para que você receba seu drone no conforto da sua casa.
                                    
                    Sinta-se à vontade para explorar nosso catálogo e descubra o mundo emocionante dos drones. A aventura está prestes a começar!
                                    
                    Obrigado por escolher a Nossa Loja de Drones. Estamos ansiosos para servi-lo e ajudá-lo a decolar rumo aos céus.
                                    
                    Comece a Explorar Agora
                                    
                    Esta mensagem de boas-vindas combina entusiasmo com informações sobre o que torna sua loja de drones única. Ela destaca sua variedade de produtos, qualidade, atendimento ao cliente, preços competitivos e oferece uma chamada à ação para os visitantes começarem a explorar os produtos da loja.
                </p>
            <a href="" class="link">saiba mais</a>
        </section>
         
        <section id="cursos">
        <h1>cursos</h1>
        <p>nossa empresa tambêm conta com cursos preparatorios para pilotos de drones. para conferir clique no linque a baixo e veja nossas opções de proficionalização na ária dos ceus. drone verse te ajudando a chegar em lugares cada evez mais autos</p>
        <a href="" class="link">saiba mais</a>
        </section>

        <section id="novidades">
            <h1>Novidades</h1>
            <h2>Explore as Últimas Novidades em Drones</h2>
            <p>
                Na nossa busca contínua pela inovação, estamos empolgados em apresentar a você as últimas novidades em tecnologia de drones. Descubra as tendências mais quentes, recursos inovadores e produtos emocionantes que estão transformando o mundo dos drones.
            </p>
            <a href="" class="link">saiba mais</a>
        </section>

        <section id="#produtos">

            <a href="" class="link">saiba mais</a>
        </section>

    </div>
</template>
 
<script>
    export default{
      name: "HomePage"
    };
</script>

<style>
#mask1{
  border-radius: 50%;
  overflow: hidden;
}
section {
  margin-top: 7.5rem;
}

img {
  display: block;
  max-width: 70%;
  margin: 11.25rem auto 0 auto;
}

h1 {
  color: #a1a1a6;
  margin-top: 1.25rem;
  max-width: 600px;
  padding-left: 1.75rem;
}

h2 {
  color: #a1a1a6;
  margin-top: 1.25rem;
  max-width: 600px;
  padding-left: 1.75rem;
}

h3{
  color: #a1a1a6;
  margin-top: 1.25rem;
  max-width: 600px;
  padding-left: 1.75rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.33333333333;
  color: #a1a1a6;
  margin-top: 1.25rem;
  max-width: 600px;
  padding-left: 1.75rem;
}

.home{

  font-family: "Roboto", sans-serif;
  display: grid;
  place-items: center;
}

.menu ul {
  display: flex;

  list-style: none;
}

.menu li + li {
  margin-left: 5rem;
}

.menu a {
  display: inline-block;
  font-size: 1.125rem;
  line-height: 1.33333333333;
  color: #fff;
  text-decoration: none;
  padding: 1.125rem 0;
}

.menu a:hover {
  color: #4dc8ff;
}

.perfil_foto{
  max-width: 100%;
}

.content {
  padding-right: 1rem;
  padding-left: 1rem;
}

.title {
  font-size: 4rem;
  line-height: 1.125;
  color: #f5f5f7;
}

.title span {
  color: #4dc8ff;
}

.title:first-child {
  padding-left: 1.25rem;
  border-left: 0.5rem solid #4dc8ff;
}

.receba{
  color: #4dc8ff;
}

.link {
  font-size: 1.125rem;
  display: inline-block;
  text-decoration: none;
  color: #4dc8ff;
  margin-top: 1rem;
  margin-left: 1.75rem;
}

.link:hover {
  text-decoration: underline;
}

small {
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: #a1a1a6;
  margin-top: 80vh;
  margin-bottom: 5rem;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 450px) {
  .menu li + li {
    margin-left: 2rem;
  }
}
</style>