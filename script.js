document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen dengan kelas 'fa-chevron-right'
    var chevronRight = document.querySelector(".fa-chevron-right");
    
    // Mengambil elemen dengan kelas 'fa-chevron-left'
    var chevronLeft = document.querySelector(".fa-chevron-left");
    
    // Menambahkan event listener untuk elemen 'chevronRight'
    chevronRight.addEventListener("click", function() {
      // Logika atau tindakan yang ingin Anda lakukan ketika elemen 'chevronRight' diklik
      console.log("Chevron Right clicked!");
    });
    
    // Menambahkan event listener untuk elemen 'chevronLeft'
    chevronLeft.addEventListener("click", function() {
      // Logika atau tindakan yang ingin Anda lakukan ketika elemen 'chevronLeft' diklik
      console.log("Chevron Left clicked!");
    });
  });
  