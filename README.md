# Trybers and Dragons!

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web full-stack Trybe.

Projeto utilizado para aplicar os príncípios da arquitetura SOLID e os princípios de POO em uma estrutrua de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).

Foram desenvolvidas cada classe e interface utilizando o contexto abaixo, respeitando o que cada raça e personagem tem de atributo e a lógica o que cada um pode fazer no campo de batalha utilizando seus métodos.

# Contexto 📜

No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma raça definida.

As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados monstros que não possuem uma raça específica, mas podem lutar.

Alguns seres também possuem uma energia e, ao treinarem o uso da energia, passam a possuir um arquétipo. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversos, bem como entre personagens e monstros.

# Como executar a aplicação ⚙️ 

  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >  

---

## Sem Docker

> Instale as dependências [**Caso existam**] com `npm install`
