
# 🎲 Sorteador de Números (Sem Repetição)

Projeto desenvolvido a partir de um curso da **Alura**, com foco em lógica e manipulação de arrays no **JavaScript**.  
O site solicita:

- **Quantidade** de números a sortear
- **Valor mínimo**
- **Valor máximo**

Em seguida, retorna os números **sorteados sem repetição**, respeitando o intervalo informado.

> 📌 **Observação**: Eu, **Lucas Leite Carlos**, fui responsável **apenas pela parte de JavaScript** do projeto.

---

## ✨ Funcionalidades

- Sorteio deRepeticao(qtd, min, max) {- Sorteio de **N números únicos** dentro de um intervalo `[mínimo, máximo]`
  const totalPossiveis = max - min + 1;
  if (min > max) throw new Error('O mínimo não pode ser maior que o máximo.');
``
- **Validações**:
  - `mínimo` ≤ `máximo`
  - `quantidade` ≤ `(máximo - mínimo + 1)`
- **Resultados sem repetição**
- Mensagens de erro claras para entradas inválidas

---

## 🧠 Como funciona (resumo do algoritmo)

1. Valida os campos (quantidade, mínimo e máximo)
2. Gera números aleatórios inteiros dentro do intervalo
3. Não permite que a quantidade de números seja maior do que o intervalo entre o número máximo e o mínimo


