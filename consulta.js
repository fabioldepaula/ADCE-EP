        var firebaseConfig = {
            apiKey: "AIzaSyDrpMrYarxw1LSVBdrb7ATIP0AY6c7bXGw",
            authDomain: "adce-ep.firebaseapp.com",
            databaseURL: "https://adce-ep-default-rtdb.firebaseio.com",
            projectId: "adce-ep",
            storageBucket: "adce-ep.appspot.com",
            messagingSenderId: "193624687904",
            appId: "1:193624687904:web:d30ad2ea44e3533edc8345",
            measurementId: "G-0VH40VDXPT"
        };

        firebase.initializeApp(firebaseConfig);

        function getInputVal(id) {
            return document.getElementById(id).value;
        }

        function submitForm() {

            var varNome = getInputVal('nome');

            //var varLista = document.getElementById("div_lista");

            var usersRef = firebase.database().ref('Alunos');
            usersRef.orderByChild('nome').equalTo(varNome).on("value", function (snapshot) {
                //console.log(usersRef.equalTo(varNome).m.ac)
                //console.log(snapshot.A.k.ba);
                //console.log(snapshot.numChildren());
                if (varNome === "") {
                    window.alert("Digite um nome para pesquisa");
                } else if (usersRef.equalTo(varNome).m.ac === varNome) {
                    //console.log(snapshot.val());
                    var li = document.getElementById('li');
                    var html = "";
                    snapshot.forEach(function (childSnapshot) {
                        //console.log(childSnapshot)
                        var usu = childSnapshot.val();
                        html += "<div>" + "<br/>";
                        html += "<b>" + "Nome: " + "</b>" + (usu.nome) + "<br/>";
                        html += "<b>" + "Telefone: " + "</b>" + (usu.telefone) + "<br/>";
                        html += "<b>" + "Dificuldade: " + "</b>" + (usu.problema) + "<br/>";
                        html += "<b>" + "Deficiência: " + "</b>" + (usu.deficiencia) + "<br/>";
                        html += "<b>" + "Escola: " + "</b>" + (usu.escola) + "<br/>";
                        html += "<b>" + "Idade: " + "</b>" + (usu.idade) + "<br/>";
                        html += "<b>" + "Série: " + "</b>" + (usu.serie) + "<br/>";
                        html += "</div>" + "<br/>";
                        li.innerHTML = html;

                    });

                } else { 
                console.log("Até aqui ok")
                //window.alert("Aluno não cadastrado");
                }

            });
        }
        function limpaPagina() {

            window.location.href = "consulta.html";

        }
