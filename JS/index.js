
/*----kiểm tra password form đăng kí*/
$(document).ready(function () {
  var i = 1;
  $("#thongbao").hide();
  function KTDN() {
    let mauKT = /^[A-Za-z0-9]{6,16}$/;
    if ($("#txtDN").val() == "") {
      $("#tbDN").html("Không để trống");
      return false;
    }
    if (!mauKT.test($("#txtDN").val())) {
      $("#tbDN").html("* Chỉ được chữ và số, từ 6-16 kí tự");
      return false;
    }
    $("#tbDN").html("*");
    return true;
  }
  $("#txtDN").blur(KTDN);
  function KTMK() {
    let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if ($("#txtMK").val() == "") {
      $("#tbMK").html("Không để trống");
      return false;
    }
    if (!mauKT.test($("#txtMK").val())) {
      $("#tbMK").html("* Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
      return false;
    }
    $("#tbMK").html("*");
    return true;
  }
  /*---mật khẩu*/
  $("#txtMK").blur(KTMK);
  function KTXNMK() {
    if ($("#txtKTMK").val() != $("#txtMK").val()) {
      $("#tbKTMK").html("* phải giống ô mật khẩu");
      return false;
    } else {
      $("#tbKTMK").html("*");
      return true;
    }
  }
  $("#txtKTMK").blur(KTXNMK);

  function kiemTraTen() {

    let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#txtTen").val() == "") {
      $("#tbTen").html("Không để trống");
      return false;
    }
    if (!mauKT.test($("#txtTen").val())) {
      $("#tbTen").html("* Tên không dấu, mỗi ký tự đầu viết hoa không sử dụng số");
      return false;
    }
    $("#tbTen").html("*");
    return true;
  }
  $("#txtTen").blur(kiemTraTen);
  function KTNgay() {
    if ($("#txtNgay").val() == "") {
      $("#tbNgay").html("*Bắt buộc nhập !");
      return false;
    }
    var day = new Date($("#txtNgay").val());
    var today = new Date;
    if (day >= today) {
      $("#tbNgay").html("*Phải nhỏ hơn ngày hiện tại");
      return false;
    }
    $("#tbNgay").html("*");
    return true;
  };
  $("#txtNgay").blur(KTNgay);
  function kiemTraDiachi() {
    if ($("#txtDc").val() == "") {
      $("#tbDc").html("Không để trống");
      return false;
    }
    $("#tbDc").html("*");
    return true;
  }
  $("#txtDc").blur(kiemTraDiachi);
  function kiemTraSDT() {
    var mauKT = /^0\d{9}$/;
    if ($("#txtSDT").val() == "") {
      $("#tbSDT").html("Không để trống");
      return false;
    }
    if (!mauKT.test($("#txtSDT").val())) {
      $("#tbSDT").html("Theo dạng 0xxxxxxxxx trong đó x là số");
      return false;
    }
    $("#tbSDT").html("*");
    return true;
  }
  $("#txtSDT").blur(kiemTraSDT);
  function KTMail() {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
    if ($("#txtMail").val() == "") {
      $("#tbMail").html("* Bắt buộc nhập !");
      return false;
    }
    if (!mail.test($("#txtMail").val())) {
      $("#tbMail").html("* Nhập đúng định dạng mail");
      return false;
    }
    $("#tbMail").html("*");
    return true;
  }
  $("#txtMail").blur(KTMail);

  $("#btndk").click(function () {
    if (
      KTDN() == true &&
      KTMK() == true &&
      KTXNMK() == true &&
      kiemTraTen() == true &&
      KTNgay() == true &&
      kiemTraDiachi() == true &&
      kiemTraSDT() == true &&
      KTMail() == true &&
      kiemTraSDT() == true
    ) {
      $("#formdangki").hide();
      $("#thongbao").show();
    }
  });

})