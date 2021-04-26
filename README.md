## Detalhes do projeto

<p align="left">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Passo a passo para rodar

1 - Clonar o projeto para uma pasta dentro do seu computador. <br/>
    Comando: `git clone https://github.com/JulioCGomes/LaravelDockerSocket.git`<br/>
    
1.1 - Após a clonagem, rodar o comando `composer install`, serve para instalar todas as depências do projeto.

2 - Instalar o laradock dentro do projeto clonagem o projeto do **[GitHub Laradock](https://github.com/laradock/laradock)** ou acessando o site **[Laradock](https://laradock.io/)** para ter mais informações de como usar.

3 - Após estar com o docker rodando, configurar o .env com dados do banco de dados, rodar o comando `php artisan migrate` para criar as tabelas.

4 - Acesssar o banco de dados e verificar se foi criado todas as tabelas.

5 - Abrir uma janela do servidor rodar o `npm install`, para instalar as dependencias do projeto (Esse processo pode demorar um pouco)

6 - Agora é abrir três janelas do terminal para colocar tudo para rodar.
- Primeira janela: `laravel-echo-server start`
- Segunda Janela: `npm run watch`
- Terceira janela: `php artisan queue:work` (Esse comando precisa ser rodado dentro do container do workspace)

7 - Acessar a página principal do seu site, não vai carregar nada pois não temos dados. Acessar a rota /create-post

8 - Atualizar a página, tem que aparecer esse primeiro item com um novo post, acessar a rota acima novamente, tem que atualizar a lista novamente.

## Contribuição para o desenvolvimento do projeto.

Laravel - https://laravel.com/docs/8.x/

Especializa TI - https://academy.especializati.com.br/

Tailwindcss - https://tailwindcss.com/docs/guides/laravel
