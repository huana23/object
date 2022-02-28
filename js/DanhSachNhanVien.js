function DanhSachNhanVien() {
    // thuộc tính
    this.mangNV = [];

    // phương thức
    this.themNV = function(nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function(ma) {
        var viTri = -1;
        this.mangNV.map(function(nv,index){
            if(nv.taiKhoan == ma) {
                // tìm thấy
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function(ma) {
        var viTriNV = this.timViTri(ma);
        if(viTriNV > -1) {
            this.mangNV.splice(viTriNV,1)
        }else{
            console.log("không tìm thấy chức năng xóa");
        }
    }

    this.capNhatNV = function(nv) {
        var viTriNV = this.timViTri(nv.taiKhoan);
        if(viTriNV > -1) {
            dsnv.mangNV[viTriNV] = nv;
        }else{
            console.log("không tìm thấy chức năng xóa");
        }
    }
}