function NhanVien(taiKhoan,hoTenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLamTrongThang) {
    // thuộc tính 
    this.taiKhoan = taiKhoan;
    this.hoTenNV = hoTenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLamTrongThang;
    this.tongLuong = 0;
    this.loaiNhanVien = "";



    // phương thức
    this.tinhTL = function() {
        if(chucVu == "Sếp") {
            this.tongLuong = this.luongCoBan * 3;
        }else if (chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2;
        }else if(chucVu == "Nhân viên"){
            this.tongLuong = this.luongCoBan * 1;
        }else {
            alert("Cần nhập chức vụ của bạn");
        }
    }

    this.NhanVien = function() {
        if(this.gioLamTrongThang >= 192) {
            this.loaiNhanVien += "Nhân viên xuất sắc";
        }else if (this.gioLamTrongThang >= 176){
            this.loaiNhanVien = "Nhân viên giỏi";
        }else if (this.gioLamTrongThang >= 160){
            this.loaiNhanVien = "Nhân viên khá";
        }else{
            this.loaiNhanVien = "Nhân viên trung bình";
        }
    }
    
}