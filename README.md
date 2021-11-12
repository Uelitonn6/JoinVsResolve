<h2>Join vs Resolve</h2>

</br>

<h5>Chamando os métodos sem argumentos temos saídas diferentes.</h5>
<h5>ex: path.join(). Sua saída será uma string de um . (ponto).</h5>
<h5>ex: path.resolve(). Sua saída será a raiz do seu projeto espelhado na aréa de trabalho.</h5>
<h5>/home/ueliton/Dev/JoinVsResolve</h5>

</br>

<h5>Chamando o método JOIN com argumento</h5>
<h5>Sua real funcionaliade é concatenar seu argumento e corrigir as barras.</h5>
<h5>Dessa forma não importa se você usa a plataforma (Windows, Linux ou Mac)</h5>
<h5>As barras sempre seram as mesma, por isso é necessário normalizar nossos arquivos.</h5>
<h5>ex: path.join('/a', 'e', '/p')</h5>
<h5>Saída /a/e/p</h5>

</br>

<h5>Chamando o método RESOLVE com argumento</h5>
<h5>O path resolve sempre vai procurar o caminho absoluto da direita para a esquerda</h5>
<h5>Se você passar vários caminhos raiz dentro do resolve, será apenas reconhecido o primeiro da direita</h5>
<h5>ex: path.resolve('/a', 'e', '/p')</h5>
<h5>Saída /p</h5>
<h5>ex: path.resolve('/a', 'e', 'p')</h5>
<h5>Saída /a/e/p</h5>
<h5>ex: path.resolve('a', '/e', 'p')</h5>
<h5>Saída /e/p</h5>





