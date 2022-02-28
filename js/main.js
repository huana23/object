//global 
var dsnv = new DanhSachNhanVien();

// lấy danh sách ngay khi load trang
getLocalStorage();

function getELE(id) {
    return document.getElementById(id);
}

function themNhanVien() {
    var taiKhoan = getELE("tknv").value;
    var hoTenNV = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan =Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = getELE("gioLam").value;

    // tạo thể hiện của lớp nhân viên
    var nv = new NhanVien(taiKhoan,hoTenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLamTrongThang);
    nv.tinhTL();
    nv.NhanVien();


    dsnv.themNV(nv)
    hienThiTable(dsnv.mangNV)
    //khi mảng bị thay đổi => lưu xuống localStorage
    setLocalStorage(dsnv.mangNV)

}

function hienThiTable(mangNV) {
    // content chứa các thẻ tr , mỗi tr chứa thông tin của 1 sinh viên
    var content = "";
    // map() : hàm tạo sẵn của js giúp duyệt mảng
    mangNV.map(function(nv,index){
        content += `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>                
            <td>
                <button class = "btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')"> xóa </button>
                <button class = "btn btn-info" onclick="xemChiTiet('${nv.taiKhoan}')"> xem </button>
            </td> 
        </tr>`
    })

    getELE("tableDanhSach").innerHTML = content;
}

function setLocalStorage(mangNV) {
    //JSON : là đối tượng của js dùng để chứa các method xử lí dữ liệu json
    localStorage.setItem("DSNV",JSON.stringify(mangNV));
}

function getLocalStorage() {
    // chuyền từ json về mảng
    // kiểm tra thử có localstorage không
    if(localStorage.getItem("DSNV") != null) {

        dsnv.mangNV =  JSON.parse(localStorage.getItem("DSNV")); 
        hienThiTable(dsnv.mangNV);
    }
}

/**
 * xóa sinh viên
 */
function xoaNhanVien(ma) {
    console.log(ma);
    dsnv.xoaNV(ma);
    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
}

/**
 * cập nhật
 */
function xemChiTiet(ma){
    console.log(ma);
    var viTri = dsnv.timViTri(ma);
    if(viTri > -1) {
        var sv = dsnv.mangNV[viTri];
        getELE("tknv").value = sv.taiKhoan;
        getELE("tknv").disabled = true;
        getELE("name").value = sv.hoTenNV;
        getELE("email").value = sv.email;
        getELE("password").value = sv.matKhau;
        getELE("datepicker").value = sv.ngayLam;
        getELE("luongCB").value = sv.luongCoBan;
        getELE("chucvu").value = sv.chucVu;
        getELE("gioLam").value = sv.gioLamTrongThang;

    }else{
        console.log("chức năng xem không tìm thấy sinh viên");
    }
}

function capNhat(){
    var taiKhoan = getELE("tknv").value;
    var hoTenNV = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan =Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = getELE("gioLam").value;

    // tạo thể hiện của lớp nhân viên
    var nv = new NhanVien(taiKhoan,hoTenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLamTrongThang);
    nv.tinhTL();
    nv.NhanVien();

    dsnv.capNhatNV(nv);
    setLocalStorage(dsnv.mangNV);
    getLocalStorage();

}