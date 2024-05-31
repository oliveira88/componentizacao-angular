# Atividade 3 - Componentização

## Iniciando a atividade

O projeto inteiro estava em um único componente chamado app.component.html. Como primeira tarefa da atividade, organizei cada parte do projeto por nomes e criei novos componentes por meio do comando npx ng g c nome-do-arquivo. Com cada componente criado, chamei os respectivos seletores de cada componente separados por comentários dentro do arquivo app.component.html.

## Limpando o código

Um dos componentes criados guarda a seção de produtos. Antes de iniciar os exercícios propostos, achei interessante a ideia de criar uma interface com as propriedades específicas dos produtos e limpar o código html que continha repetição desnecessária.

1 - Primeiro criei uma interface chamada Products com as propriedades básicas apresentadas no html. Logo depois criei um array de objetos guardando a informação de cada propriedade. Feito isso, precisei criar mais um componente chamado products-cards.

2 - No componente ts de products-cards, adicionei o decorador @Input para chamar a propriedade products que criei no array de objetos. Já no html desse componente, criei a lógica por trás da exibição dos produtos.

2.1 - Iniciando pela imagem, fiz um property binding para chamar o valor product.image, que nos trará a imagem esperada. Logo em seguida fiz uma interpolação do título. Em seguida, utilizei a diretiva do Angular 'ngFor', usada para iterar sob um array de dados. Antes o código que estava retornando a classe iconfont-opencart era repetido cinco vezes, porém utilizando o ngFor, podemos criar uma lógica para que o angular itere sobre um array de números de 1 a 5, atribuindo cada número à variável 'star'. Apesar de ser uma prática de código limpo, essa ação não está sendo utilizada.

2.2 - Por último, temos os preços e o desconto. Iniciando pelos preços, apenas criei uma interpolação simples chamando as duas propriedades.
Já para o desconto, possuímos as propriedades 'discount' e 'hasDiscount'. Um
dos exercícios propostos foi alterar entre produtos com e sem desconto. Aqui eu apenas atribui um valor boolean para 'hasDiscount', e quando chamado nos itens da minha escolha, pude alterar entre 'false' e 'true'. Por último, adicionei uma diretiva 'ngIf', utilizada para mostrar ou ocultar elementos com base nas interações do usuário.

3 - Utilizando a base do código antigo para mostrar as duas grids de produtos, criei uma div que chama os produtos por meio do ngFor, e logo abaixo, chamo o seletor do products-card com um property binding de product. Um código que possuia 1600 linhas agora posusi apenas 46.

## Implementando funcionalidade de curtir o produto

1 - No arquivo ts do products-cards criei uma função chamada toogleLike com uma lógica simples; No arquivo html, adicionei o property binding ngClass que é usada para aplicar classes css com base em um conjunto de condições. No caso, será aplicado a classe css 'liked' apenas se isLiked for true, senão, ela não será aplicada.
