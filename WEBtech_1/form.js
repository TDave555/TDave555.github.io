
$(function() {
    $("form[name='hirlevel']").validate({
        rules: {
            vezeteknev: {
                minlength: 2
            },

            keresztnev: {
                minlength: 2,
                required: true
            },

            szuletesi_datum: {
                required: true
            },

            nem: {
                required: true
            },

            email: {
                email: true,
                required: true
            },

            beleegyezes: {
                required: true
            }

        },

        messages: {
            vezeteknev: {
                minlength: "Írjon be minum 2 karaktert!"
            },

            keresztnev: {
                required: "Adja meg a nevét!",
                minlength: "Írjon be minum 2 karaktert!"
            },

            szuletesi_datum: "Adja meg a születési idejét!",

            nem: "Adja meg a nemét!",

            email: {
                required: "Adja meg az e-mail címét!",
                email: "Helytelen e-mail formátum!"
            },

            beleegyezes: "Nem egyezett bele az adatok tárolásába"

        },

        submitHandler: function(form) {
            event.preventDefault;
            
            const button = document.getElementById('btn');
            const area = document.getElementById('anim-area')
            button.classList.add("loading");
            area.classList.add("loading-icon");
            area.innerHTML = "&#8635;";

            setTimeout(function() {
                area.classList.remove("loading-icon");
                area.classList.add("check-icon");
                area.innerHTML = "&#10003;";
            }, 6000);
            setTimeout(function() {
                form.submit();
              }, 7000);
        }
    });
});
