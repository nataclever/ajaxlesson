$ function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/natakozova@gmail.com",
                method: 'POST',
                data: {
                    name: $('#name').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('Thank you!');
            })
            .fail(function() {
                $('form').html('Error!');
            });
    });
