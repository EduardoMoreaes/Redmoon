# redmoon

## iniciando instalando as dependências express e nodemon

Nodemon para ficar atualizando sempre que houver alteração no código, o express é o padrão amado por todos não é mesmo? Ele que fará o nosso Back-end.
~~~
     npm install express
     npm install nodemon --save-dev
~~~

Para o front-end vai ser utilizado o Svelt.js.
~~~
     npm install svelte
     npm install --save-dev rollup rollup-plugin-svelte
~~~

Para carregar as páginas, nós preparamos o nosso servidor para
carregar uma página estática, em html, usanto o path. As páginas
são geradas pelo Svelte e convertidas para que o node possa usá-las.
~~~
     npm install path
     npm devit sveltejs/template -nome-da-página-
~~~

Para o banco de dados e autenticação de usuário, usaremos a API do google Firebase.
~~~
     npm install firebase
~~~