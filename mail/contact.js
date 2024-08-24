// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var subject = $("input#subject").val();
//             var message = $("textarea#message").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 url: "contact.php",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     subject: subject,
//                     message: message
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#name').focus(function () {
//     $('#success').html('');
// });

$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Jika ada error pada validasi input form
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-danger')
                .append("<strong>Oops! There was an error with your submission. Please check your input and try again.</strong>");
            $('#success > .alert-danger').append('</div>');
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            try {
                var whatsappURL = "https://api.whatsapp.com/send?phone=6281297514361&text=*Contacting%20-%20mochamaddarmawanh*%0D%0A%0D%0A"
                    + "*First%20Name*:%20" + encodeURIComponent(name) + "%0D%0A"
                    + "*Email*:%20" + encodeURIComponent(email) + "%0D%0A"
                    + "*Subject*:%20" + encodeURIComponent(subject) + "%0D%0A"
                    + "*Message*:%20" + encodeURIComponent(message) + "%0D%0A"
                    + "*App%20Time*:%20" + new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })
                    + "%0D%0A%0D%0A*Terima%20kasih,%20harap%20tunggu%20sampai%20terhubung%20📞%20yaa.*";

                window.open(whatsappURL, "_blank");

                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your message has been sent via WhatsApp. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                $('#contactForm').trigger("reset");

            } catch (error) {
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger')
                    .append("<strong>Oops! Something went wrong. Please try again later.</strong>");
                $('#success > .alert-danger').append('</div>');
            }

            setTimeout(function () {
                $this.prop("disabled", false);
            }, 1000);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
