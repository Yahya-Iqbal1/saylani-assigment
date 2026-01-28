//  var dob = prompt("Enter your Date of Birth (DD/MM/YYYY)");

//     // Date ko split karna
//     var d = dob.split("/");

//     var birthDate = new Date(d[2], d[1]-1, d[0]);
//     var currentDate = new Date();

//     // Time difference
//     var diff = currentDate - birthDate;

//     // Simple calculations
//     var hours = Math.floor(diff / (1000 * 60 * 60));
//     var days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     var months = Math.floor(days / 30);
//     var years = Math.floor(days / 365);

//     // Output
//     alert(
//         "Age since birth:\n\n" +
//         "Years: " + years + "\n" +
//         "Months: " + months + "\n" +
//         "Days: " + days + "\n" +
//         "Hours: " + hours
//     );
 var year = prompt("Enter your birth year (YYYY):");
    var month = prompt("Enter your birth month (1-12):");
    var day = prompt("Enter your birth day (1-31):");

    // Current date
    var today = new Date();

    // Birth date
    var dob = new Date(year, month - 1, day);

    // Difference in milliseconds
    var diff = today - dob;

    // Calculations
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    // Alert output
    alert(
        "Your Age is:\n\n" +
        "Years: " + years + "\n" +
        "Months: " + months + "\n" +
        "Days: " + days + "\n" +
        "Hours: " + hours + "\n" +
        "Seconds: " + seconds
    );