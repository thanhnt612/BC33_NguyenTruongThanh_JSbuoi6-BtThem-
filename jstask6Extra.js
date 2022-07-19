function bt1(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function baitap1() {
  var N = document.getElementById("txtN").value * 1;
  var contentHtml = " ";
  for (var i = 0; i < N; i++) {
    if (bt1(i) == true ) {
      console.log(i);
      contentHtml += i + " ";
    }
  }
  document.getElementById("resultBt1").innerHTML = contentHtml;
}
