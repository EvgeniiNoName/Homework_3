// let revealElements = document.getElementsByClassName('reveal');
// let revealElementsArr = Array.from(revealElements);

// window.addEventListener('scroll', function() {
//     revealElementsArr.forEach((element) => {
//         let rect = element.getBoundingClientRect();
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//             element.classList.add('reveal_active');
//         } else {
//             element.classList.remove('reveal_active');
//         }
//     });
//   });

let revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach((element) => {
        let rect = element.getBoundingClientRect();
        element.classList.toggle('reveal_active', rect.top >= 0 && rect.bottom <= window.innerHeight);
    });
  });
