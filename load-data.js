$(document).ready(function () {
  $.get("data.txt", function (data) {
    const lines = data.split(/\r\n|\n/);
    const variables = {};

    lines.forEach(function (line) {
      const keyValue = line.split("|");
      variables[keyValue[0]] = keyValue[1];
    });

    $("title").text(variables["DEÐÝÞKEN1"]);
    $(".accountName b").text(variables["DEÐÝÞKEN2"]);
    $(".accountName").eq(1).text(variables["DEÐÝÞKEN3"]);
    $("p b").text(variables["DEÐÝÞKEN4"]);
    $(".button-orange").attr("href", variables["DEÐÝÞKEN5"]);
    $(".button-purple").attr("href", variables["DEÐÝÞKEN6"]);
    $(".button-green").attr("href", variables["DEÐÝÞKEN7"]);
    $(".button").eq(0).find("strong").text(variables["DEÐÝÞKEN8"]);
    $(".button").eq(1).find("strong").text(variables["DEÐÝÞKEN9"]);
    $(".button").eq(2).attr("href", "mailto:" + variables["DEÐÝÞKEN10"]);
    $(".button").eq(3).attr("href", variables["DEÐÝÞKEN11"]);
  });
});
