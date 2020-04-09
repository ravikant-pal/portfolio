// $('#contactForm').submit(function (e) {
//     var first_name = document.getElementById('name'),
//         last_name = document.getElementById('L_name'),
//         emial = document.getElementById('emial'),
//         msg = document.getElementById('message');
//     if (first_name.value == "" || last_name.value == "" || emial.value == "" || msg.value == "") {
//         alertfy.error("please check your entries!");
//     } else {
//         $.ajax({
//             url: "//formspree.io/acgy1029@gmail.com",
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         })
//         e.preventDefault();
//         $(this).get(0).reset()
//         alertfy.success('Message sent.')
//     }
// });