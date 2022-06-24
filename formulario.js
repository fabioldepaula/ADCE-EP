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

        document.getElementById('contactForm')
            .addEventListener('submit', submitForm);

        function submitForm(e) {
            e.preventDefault();

            // Get values
            var nome = getInputVal('nome');
            var telefone = getInputVal('telefone');
            var problema = getInputVal('problema');
            var deficiencia = getInputVal('deficiencia');
            var escola = getInputVal('escola');
            var idade = getInputVal('idade');
            var serie = getInputVal('serie');

            saveMessage(nome, telefone, problema, deficiencia, escola, idade, serie);
            document.getElementById('contactForm').reset();
        }

        // Function to get get form values
        function getInputVal(id) {
            return document.getElementById(id).value;
        }

        var messagesRef = firebase.database()
            .ref('Alunos');

        // Save message to firebase
        function saveMessage(nome, telefone, problema, deficiencia, escola, idade, serie) {
            if (window.confirm("Salvar na base de dados?")) {
                var newMessageRef = messagesRef.push();
                newMessageRef.set({
                    nome: nome,
                    telefone: telefone,
                    problema: problema,
                    deficiencia: deficiencia,
                    escola: escola,
                    idade: idade,
                    serie: serie,
                });
   
            }
        }
        function paginaInicial() {

            window.location.href = "index.html";

        }