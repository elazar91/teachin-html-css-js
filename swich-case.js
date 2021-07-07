let foo = 3;

switch (foo) {
  case (1, 2, 3):
    console.log("winter");
    break;
  case 1:
    console.log("one");
    foo++;
    break;

  case 2:
    console.log("two");
    foo + 2;
    break;

  case 3:
    console.log("three");
    break;

  case 4:
    console.log("four");
    break;

  default:
    console.log("default");
    break;
}

// ---------------------------------------------------------------

// let foo = 1;

// switch (foo) {
//   case 1:
//     foo++;
//     console.log("one");
//     console.log(foo);
//     break;

//   case 2:
//     foo++;
//     console.log("two");
//     console.log(foo);
//     break;

//   case 3:
//     foo++;
//     console.log("three");
//     console.log(foo);
//     break;

//   case 4:
//     foo++;
//     console.log("four");
//     console.log(foo);
//     break;

//   default:
//     console.log("default");
//     break;
// }
