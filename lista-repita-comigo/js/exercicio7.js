let n1 = parseFloat(prompt("Digite nota 1"));

      for (;n1<0 || n1>10;) {
        n1 = parseFloat(prompt("Digite novamente a nota 1"));
      }

      let n2 = parseFloat(prompt("Digite nota 2"));

      for (;n2<0 || n2>10;) {
        n2 = parseFloat(prompt("Digite novamente a nota 2"));
      }

      let n3 = parseFloat(prompt("Digite nota 3"));

      for (;n3<0 || n3>10;) {
        n3 = parseFloat(prompt("Digite novamente a nota 3"));
      }

      let n4 = parseFloat(prompt("Digite nota 4"));

      for (;n4<0 || n4>10;) {
        n4 = parseFloat(prompt("Digite novamente a nota 4"));
      }

      let n5 = parseFloat(prompt("Digite nota 5"));

      for (;n5<0 || n5>10;) {
        n5 = parseFloat(prompt("Digite novamente a nota 5"));
      }

      let n6 = parseFloat(prompt("Digite nota 6"));

      for (;n6<0 || n6>10;) {
        n6 = parseFloat(prompt("Digite novamente a nota 6"));
      }

      let resul = 0
      resul = (n1+n2+n3+n4+n5+n6)/6

      document.write("Média do aluno: " +resul)