$(document).ready(function () {

    $(".check-rd").on("click", function () {
        $(".irayes").show();
        $('.irano').hide();
    });

    $(".check-rd2").on("click", function () {
        $(".irayes").hide();
        $('.irano').show();
    });
    

//     $(document).ready(function () {
//     $(".check-rd, .check-rd2").on("click", function () {
//         var id = $(this).attr("data-id");
//         if ($(this).is(":checked")) {
//             $("." + id).css("display", "block");
//         } else {
//             $("." + id).css("display", "none");
//         }
//     });
// });



//       $(".check-rd, .check-rd2").on("click", function () {
//     var id = $(this).attr("data-id");
  
//     // Hide all elements associated with the class
//     $("." + id).hide();
  
//     // Check which checkbox is clicked and show its associated elements
//     if ($(this).hasClass("check-rd")) {
//         // If the checkbox belongs to class check-rd
//         if ($(this).is(":checked")) {
//             $("." + id).show();
//         }
//     } else if ($(this).hasClass("check-rd2")) {
//         // If the checkbox belongs to class check-rd2
//         if ($(this).is(":checked")) {
//             $("." + id).show();
//         }
//     }
// });
    // $('input[type=radio][name=inlineRadioOptions]').change(function () {
    //   var selectedValue = $(this).val();
    //   $('.sdoh11yesx, .sdoh12yesx, .sdoh15yesx, .irayes, .irano, .aycno, .aycyes, .aymnyes, .ypn18, .aymyes, .aomn1, .aomn2, .aomn3, .aydyes, .ayd3, .ayd4, .ayd6, .ayd7').hide();

    //   switch (selectedValue) {
    //     case 'sdoh11yes':
    //       if (1){
    //         $('.sdoh11yesx').show();
    //       }
    //       break;
    //     case 'sdoh12yes':
    //       $('.sdoh12yesx').show();
    //       break;
    //     case 'sdoh15yes':
    //       $('.sdoh15yesx').show();
    //       break;
    //     case 'irayes':
    //       $('.irayes').show();
    //       break;
    //     case 'irano':
    //       $('.irano').show();
    //       break;
    //     case 'aycno':
    //       $('.aycno').show();
    //       break;
    //     case 'aycyes':
    //       $('.aycyes').show();
    //       break;
    //       case 'aymnyes':
    //       $('.aymnyes').show();
          
    //       break;
    //       case 'ypn18':
    //       $('.ypn18').show();
    //       break;
    //       case 'aymyes':
    //       $('.aymyes').show();
    //       break;
    //       case 'aomn1':
    //       $('.aomn1').show();
    //       break;
    //       case 'aomn2':
    //       $('.aomn2').show();
    //       break;
    //       case 'aomn3':
    //       $('.aomn3').show();
    //       break;
    //       case 'aydyes':
    //       $('.aydyes').show();
    //       break;
    //       case 'ayd3':
    //       $('.ayd3').show();
    //       break;
    //       case 'ayd4':
    //       $('.ayd4').show();
    //       break;
    //       case 'ayd6':
    //       $('.ayd6').show();
    //       break;
    //       case 'ayd7':
    //       $('.ayd7').show();
    //       break;



    //     default:
    //       break;
    //   }
    // // });
  });