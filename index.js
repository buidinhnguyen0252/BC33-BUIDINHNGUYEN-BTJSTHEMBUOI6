function kiemTraSoNguyenTo(n) {
  if (n == 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function BT1() {
  var soNhap = document.getElementById("txtNum").value;
  var a = " ";
  for (var i = 1; i <= soNhap; i++) {
    var result = kiemTraSoNguyenTo(i);
    if (result === true) {
      a += " " + i;
    }
  }
  var resultBT1 = (document.getElementById("resultBT1").innerHTML = a);
}
BT1();
