// ================== AJAX ===================
const xhttp = new XMLHttpRequest();
let data = "";
// ================== PADA SAAT HALAMAN SUDAH SIAP ===================
xhttp.onreadystatechange = function () {
  // ================== JIKA HALAMAN BISA DIBUKA ===================
  if (this.readyState == 4 && this.status == 200) {
    // ================== UBAH DATA JSON JADI TEXT ===================
    data = JSON.parse(xhttp.responseText);
    // ================== TAMPILKAN ===================
    console.log(data);

    // ============== VARIABLE =============
    const lists = document.querySelectorAll(".list__items");
    const title = document.querySelectorAll(".type");
    const hours = document.querySelectorAll(".hours");
    const description = document.querySelectorAll(".deskription");
    lists.forEach(function (list, index) {
      list.addEventListener("click", function (e) {
        if (index == 0) {
          for (let i = 0; i < data.length; i++) {
            title[i].innerHTML = data[i].title;
            hours[i].innerHTML = data[i].timeframes.daily.current + "Hrs";
            description[i].innerHTML = "Last Week - " + data[i].timeframes.daily.previous + "Hrs";
          }
        } else if (index == 1) {
          for (let i = 0; i < data.length; i++) {
            title[i].innerHTML = data[i].title;
            hours[i].innerHTML = data[i].timeframes.weekly.current + "Hrs";
            description[i].innerHTML = "Last Week - " + data[i].timeframes.weekly.previous + "Hrs";
          }
        } else if (index == 2) {
          for (let i = 0; i < data.length; i++) {
            title[i].innerHTML = data[i].title;
            hours[i].innerHTML = data[i].timeframes.monthly.current + "Hrs";
            description[i].innerHTML = "Last Week - " + data[i].timeframes.monthly.previous + "Hrs";
          }
        }
      });
    });
  }
};

// ================== REQUEST DENGAN METHOD GET KE data.json ===================
xhttp.open("GET", "data.json", true);
xhttp.send();
