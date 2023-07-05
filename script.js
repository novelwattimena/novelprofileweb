//scroll navbar
$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 60) {
      $("#home").addClass("navbar");
    } else if (scrollPosition <= 60) {
      $("#home").removeClass("navbar");
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 600) {
      $("#language").css("display", "flex");
      $("#language").css("transform", "scaleY(1)");
    } else if (scrollPosition <= 600) {
      $("#language").css("display", "none");
    }
  });
});

// search navbar
$(document).ready(function () {
  $("#submit").on("click", function () {
    var value = $("#search").val();
    var baseUrl = "https://google.com/search?q=";
    if (!value) {
      value = "Novel Wattimena";
    }
    window.location.href = baseUrl + encodeURIComponent(value);
  });
});

// // link
// const myElement = document.getElementById("my-element");

// myElement.addEventListener("click", () => {
//   window.location.href = "https://question.novelthadeus.repl.co";
// });

//clock
setInterval(() => {
  let date = new Date();
  let clock = document.getElementById("clock");
  clock.innerHTML =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
});

// Language

// Indonesia
$(function () {
  $(".in").click(function () {
    //cabecalho
    //navbar language
    $(".nav-link ").eq(0).text("Rumah");
    $(".nav-link ").eq(1).text("Kontak");
    $(".nav-link ").eq(2).text("Klik");
    $(".nav-link ").eq(3).text("Trik-turun");
    $(".language-selected").removeClass("change-en");
    // $(".language-selected").removeClass("change-jr");
    $(".language-selected").addClass("change-in");

    // fill
    $(".bahasa").text("In-");
    $(".language-menu ul:nth-child(1) li:nth-child(1) a").text("Referensi");
    $(".language-menu ul:nth-child(1) li:nth-child(2) a").text("Proyek");
    $(".language-menu ul:nth-child(1) li:nth-child(3) a").text("Pesan");
    $(".language-menu ul:nth-child(1) li:nth-child(5) a").text("Sosial Media");
    $(".language-menu ul:nth-child(1) li:nth-child(6) a").text("Video");
    $(".language-menu ul:nth-child(1) li:nth-child(7) a").text("Foto");
    $("#search ").text("Mencari");
    //end language navbar
    // jumbotron
    $("#status").text("Mahasiswa");

    // artikel
    $(".article").text("Klik");
    $(".article1").text(
      "Hai Semuanya...! Perkenalkan nama saya novel berasal dari negara Indonesia lahir di Tangerang, pada tanggal 11 November 2001. Saya berasal dari keluar sedarahana yang tinggal di Kabupaten Kepulauan Sangihe, Keturunan darah Wattimena-Malambae, yang berdarah Ambon dan Sangihe. Saya berstatus sebagai Mahasiswa dari Universitas Terbuka dan semoga saya bisa selesai dan tetap berada di Universitas ini. Terutama saya selalu bersyukur Kepada Tuhan yang sampai pada saat ini masih diberikan napas dan menikmati kehidupan didunia ini. Saya berkeinginan menjadi anak yang berbakti kepada kedua OrangTua yang bisa membanggakan kedua Orangtua terlebih Kepada Tuhan. Jadi itulah saya Novel Thadeus Wattimena Demikian Terima kasih."
    );
    $(".article2").text(
      "Seorang Mahasiswa Kristen yang mengabaikan Alkitab dalam Aktivitas ilmiahnya tidak dapat dibenarkan dari sudut kesarjanaan ataupun dari sudut kepercayaan. Pertama, keserjanaannya kurang berbobot karena siapapun yang mengabaikan sebagai masukan nyata (data) tidaklah bersifat ilmiah dan objektif Kedua, ia kurang beriman, karena dalam iman kita takluk di bawah wewenang Sabda Allah dalam segala hal (Heath, 1997:8)."
    );
    $(".article3").text(
      "Alkitab memberi inspirasi bagi mahasiswa Kristen bahwa mereka perlu mengembangkan diri menjadi manusia pembelajar. Pertama, Musa adalah sosok yang tekun belajar selama 40 tahun di Mesir, dalam posisi sebagai anak angkat putri Firaun. Ia belajar ilmu pemerintahan dan hukum. Selama 40 tahun berikutnya ia menjadi orang asing di negeri Midian. Ketika berusia 80 Tahun, Allah memanggilnya menjadi pemimpin umat Israel, keluar dari Mesir menuju Kanaan. Ilmu pemerintahan dan beragam keahlian yang dipelajari selama 40 tahun di Mesir berguna ketika berhadapan dengan penguasa di Mesir. Ia juga paham strategi menghadapi padang gurun selama 40 tahun, karena sudah banyak belajar di sana. Allah mempercayakan penulisan Taurat kepada Musa. Kedua, Daniel, Sadrakh, Mesakh, dan Abednego, ketika berusia 18 tahun memanfaatkan kesempatan belajar selama tiga tahun di negeri Babel. Mereka tekun belajar dan mengandalkan Tuhan serta menjaga kekudusan hidup. Akibatnya, mereka ditemukan sangat cerdas dan spirtual. Tuhan membuka ruang bagi mereka bekerja di pemerintahan Nebukadnezar. Daniel sendiri bahakan menjadi kepala ilmuan atau orang berhikmat yang disegani di pemerintahan Nebukadnezar dan Raja Darius, penguasa Media dan Persia. Ketiga, rasul Paulus ketika muda giat belajar ilmu pengetahuan di Tarsus dan belajar Taurat di Yerusalem. Pada usia 30-an ia berjumpa dengan Yesus di jalan menuju Damsyik. sejak itu hidupnya diserahkan kepada Kristus. Paulus dipakai sebagai pengajar, pemberita dan rasul. ia juga menerangkan iman Kristen kepada banyak orang yang bertanya di zamannya. Tiga belas surat kiriman dalam perjanjian Baru merupakan buah kecerdasan rasul Paulus pada masa mudahnya. Jadi Tuhan pun punya rencana untuk Anda yang tengah belajar ilmu pengetahuan pada masa ini."
    );
    $(".title1").text("REFERENSI");
    $(".title-article").text(
      "MAHASISWA KRISTEN MENGEMBANGKAN DIRI SEBAGAI ILMUWAN."
    );

    // Proyek
    $(".title2").text("PROYEK");
    $("#project1").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project2").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project3").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project4").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project5").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project6").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project7").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );
    $("#project8").text(
      "Mari kita menjadi Seorang Pembelajar yang baik dengan belajar kita akan mendapatkan Pengalaman yang baik."
    );

    // Sosial Media
    $(".title3").text("SOSIAL MEDIA");
    $("#facebook").text("Hai yuk kita berteman facebook bersama saya novel");
    $("#instagram").text(
      "Hello aku sudah follow kamu kamunya kapan yuk bareng follow-an"
    );
    $("#youtube").text("Aku punya Channel Youtube. yuk kita saling mendukung");
    // card
    $("#click1").text("Klik Kawan");
    $("#click2").text("Klik Kawan");
    $("#click3").text("Klik Kawan");

    // Vidio
    $(".title4").text("VIDEO");

    // Message
    $(".title5").text("PESAN...!");
    $("#pesan1").text("Nama Lengkap");
    $("#pesan2").text("Imel");
    $("#pesan3").text("Nomor Ponsel");
    $("#pesan4").text("Pesan");
    $("#pesan5").text("Kirim");

    // Foto
    $(".title6").text("FOTO");
    $("#Father").text("Ayah");
    $("#Mother").text("Ibu");
    $("#Brother").text("Kakak");
    $("#I").text("Saya");
    $("#Sister").text("Adik");

    // footer
    $(".contact-me").text("Hubungi Saya");
    $(".copy").text("Hak Cipta 2023");
  });
});

// Inggris
$(function () {
  $(".en").click(function () {
    //cabecalho
    //navbar language
    $(".nav-link ").eq(0).text("Home");
    $(".nav-link ").eq(1).text("Contact");
    $(".nav-link ").eq(2).text("Click");
    $(".nav-link ").eq(3).text("Dropdown");
    $(".language-selected").removeClass("change-in");
    // $(".language-selected").removeClass("change-jr");
    $(".language-selected").addClass("change-en");

    // fill
    $(".bahasa").text("En-");
    $(".language-menu ul:nth-child(1) li:nth-child(1) a").text("Reference");
    $(".language-menu ul:nth-child(1) li:nth-child(2) a").text("Project");
    $(".language-menu ul:nth-child(1) li:nth-child(3) a").text("Message");
    $(".language-menu ul:nth-child(1) li:nth-child(5) a").text("Social Media");
    $(".language-menu ul:nth-child(1) li:nth-child(6) a").text("Videos");
    $(".language-menu ul:nth-child(1) li:nth-child(7) a").text("Photo");
    $("#search ").text("Search");
    //end navbar language

    // jumbotron
    $("#status").text("Student");

    // artikel
    $(".article").text("Click");
    $(".title1").text("REFERENCE");
    $(".title-article").text(
      "CHRISTIAN STUDENTS DEVELOP THEMSELVES AS SCIENTISTS."
    );
    $(".article1").text(
      "Hi all...! Introducing my name Novel is from the Indonesian state born in Tangerang, on November 11 2001. I come from a family who lives in Sangihe Archipelago Regency, Descendants of Wattimena-Malambae blood, who have Ambon and Sangihe blood. I have status as a Student from the Open University and hopefully I can finish and stay at this University. Especially I am always grateful to God who until now is still given breath and enjoys life in this world. I want to be a child who is devoted to both parents who can make both parents proud, especially to God. So that's me Novel Thadeus Wattimena So Thank you."
    );
    $(".article2").text(
      "A Christian student who ignores the Bible in his scientific activities cannot be justified from a scholarly or belief point of view. First, its simplicity lacks weight because anyone who ignores it as real input (data) is not scientific and objective. Second, it lacks faith, because in faith we submit to the authority of the Word of God in all matters (Heath, 1997:8)."
    );
    $(".article3").text(
      "The Bible gives inspiration to Christian students that they need to develop themselves to become human learners. First, Moses was a figure who diligently studied for 40 years in Egypt, in a position as the adopted son of Pharaoh's daughter. He studied government and law. For the next 40 years he became a stranger in the land of Midian. When he was 80 years old, God called him to be the leader of the Israelites, leaving Egypt for Canaan. Government knowledge and various skills learned during 40 years in Egypt are useful when dealing with rulers in Egypt. He also understands strategies for dealing with the desert for 40 years, because he has learned a lot there. God entrusted the writing of the Torah to Moses. Second, Daniel, Shadrach, Meshach, and Abednego, when they were 18 years old, took the opportunity to study for three years in the land of Babylon. They diligently study and rely on God and maintain the holiness of life. As a result, they are found to be highly intelligent and spiritual. God opened a space for them to work in Nebuchadnezzar's government. Daniel himself even became a respected chief scientist or wise man in the reign of Nebuchadnezzar and King Darius, the ruler of Media and Persia. Third, when the apostle Paul was young, he studied science in Tarsus and studied Torah in Jerusalem. In his 30s he met Jesus on the road to Damascus. since then his life was surrendered to Christ. Paul is used as a teacher, herald and apostle. he also explained the Christian faith to many who asked in his day. The thirteen epistles in the New Testament are the fruit of the intelligence of the apostle Paul in his youth. So God also has a plan for you who are studying science at this time."
    );

    // Proyek
    $(".title2").text("PROJECT");
    $("#project1").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project2").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project3").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project4").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project5").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project6").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project7").text(
      "Let's be a good learner by learning we will get a good experience."
    );
    $("#project8").text(
      "Let's be a good learner by learning we will get a good experience."
    );

    // Sosial Media
    $(".title3").text("SOCIAL MEDIA");
    $("#facebook").text("Hi, let's be Facebook friends with me Novel");
    $("#instagram").text(
      "Hello, I've followed you. When will we follow you together?"
    );
    $("#youtube").text("I have a Youtube Channel. let's support each other");
    // card
    $("#click1").text("Click Friends");
    $("#click2").text("Click Friends");
    $("#click3").text("Click Friends");

    // Vidio
    $(".title4").text("VIDEOS");

    // Message
    $(".title5").text("MESSAGE...!");
    $("#pesan1").text("Full Name");
    $("#pesan2").text("Email");
    $("#pesan3").text("Mobile Number");
    $("#pesan4").text("Message");
    $("#pesan5").text("Send");

    // Foto
    $(".title6").text("PHOTO");
    $("#Father").text("Father");
    $("#Mother").text("Mother");
    $("#Brother").text("Older brother");
    $("#I").text("I");
    $("#Sister").text("Younger brother");

    // footer
    $(".contact-me").text("Contact Me");
    $(".copy").text("Copyright 2023");
  });
});

// Login Code
const webnovel = document.querySelector("#welcome-message");

let nama = localStorage.getItem("nama");
const usernameRegex = /^[aA-zZ ]{9,}$/; // regex untuk username dengan minimal 10 karakter

while (!nama || nama.trim() === "" || !usernameRegex.test(nama.trim())) {
  const confirmed = confirm("Do you want to enter your name? 😁");

  if (!confirmed) {
    window.location.href = "about:blank"; // keluar dari halaman
    break;
  }

  nama = prompt("Hello, what is your username? ✋");

  if (nama === null || nama.trim() === "" || !usernameRegex.test(nama.trim())) {
    alert(
      "You need to provide a valid username to use this site. Please make sure your username contains at least 10 characters and consists of only letters, and underscores. 🙏"
    );
  } else {
    localStorage.setItem("nama", nama);
    webnovel.innerHTML = alert(`Hello ${nama}, welcome to my web! 😍`);
    window.location.href = "index.html"; // masuk ke dalam halaman
  }
}

if (nama && nama.trim() !== "") {
  webnovel.innerHTML = alert(`Hi ${nama}, welcome back to my web! 😊`);
}
// akhir kode
