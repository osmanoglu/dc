$(document).ready(function () {
  $.get("data.txt", function (data) {
    const lines = data.split(/\r\n|\n/);
    const variables = {};

    lines.forEach(function (line) {
      const keyValue = line.split("|");
      variables[keyValue[0]] = keyValue[1];
    });

    $("title").text(variables["DE���KEN1"]);
    $(".accountName b").text(variables["DE���KEN2"]);
    $(".accountName").eq(1).text(variables["DE���KEN3"]);
    $("p b").text(variables["DE���KEN4"]);
    $(".button-orange").attr("href", variables["DE���KEN5"]);
    $(".button-purple").attr("href", variables["DE���KEN6"]);
    $(".button-green").attr("href", variables["DE���KEN7"]);
    $(".button").eq(0).find("strong").text(variables["DE���KEN8"]);
    $(".button").eq(1).find("strong").text(variables["DE���KEN9"]);
    $(".button").eq(2).attr("href", "mailto:" + variables["DE���KEN10"]);
    $(".button").eq(3).attr("href", variables["DE���KEN11"]);
  });
});
