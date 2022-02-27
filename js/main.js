//global 
var dsnv = new DanhSachNhanVien();

function getELE(id) {
    return document.getElementById(id);
}

function themNhanVien() {
    var taiKhoan = getELE("tknv").value;
    var hoTenNV = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = getELE("gioLam").value;
    // var tongLuong = getELE("name").value;
    // var loaiNhanVien = getELE("name").value;


    // tạo thể hiện của lớp nhân viên
    var nv = new NhanVien(taiKhoan,hoTenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLamTrongThang)


    console.log(nv);
    dsnv.themNV(nv)
    console.log(dsnv.mangNV);
    hienThiTable(dsnv.mangNV)

}

function hienThiTable(mangNV) {
    // content chứa các thẻ tr , mỗi tr chứa thông tin của 1 sinh viên
    var content = "";
    // map() : hàm tạo sẵn của js giúp duyệt mảng
    mangNV.map(function(nv,index){
        content += `<tr>
            <td>${sv.taiKhoan}</td>
            <td>${sv.hoTenNV}</td>
            <td>${sv.email}</td>
            <td>${sv.matKhau}</td>
            <td>${sv.ngayLam}</td>
            <td>${sv.luongCoBan}</td>
            <td>${sv.chucVu}</td>
            <td>${sv.gioLamTrongThang}</td>
            
        </tr>`
    })

    getELE("tableDanhSach").innerHTML = content;
}