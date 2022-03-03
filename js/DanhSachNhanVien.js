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

// từ khóa tìm kiếm
// => cách sử dụng của user : gõ tên của sv => không tìm thấy thì gõ đầy đủ họ tên
// tran hai
// hiển thị danh sách các sinh viên chứa từ khóa tìm kiếm
// Hai == "Nguyen Be Hai" => false
//"Nguyen Be Hai" == "Nguyen Be Hai" => true
//"Nguyen Be Hai".indexOf(từ khóa tìm kiếm "Hai") => return vị trí của từ khóa tìm kiếm trong chuỗi tên => 10

//"Nguyen Be Hai".indexOf(từ khóa tìm kiếm "hai") => return -1

// chuyển chữ hoa thành thường toLowerCase 
///"Nguyen Be Hai".toLowerCase() => " nguyen be hai"
// hAi =>"hAi".toLowerCase() "hai"
// Nguyễn => " Nguyễn"
// mảng tìm kiếm chứa danh sách các sv theo từ khóa tìm kiếm 

/**
 * prototype => thêm thuộc tính và phương thức cho lớp đối tượng mà không cần sửa trực tiếp trong clss
 * => đảm bảo không gây ảnh hưởng cho các phương thức đã hoàn thiện
 */

DanhSachNhanVien.prototype.timKiemTen = function(tk) {
    // các bước sử lí tìm kiếm
    var mangTK = [];
    var tkLowerCase = tk.toLowerCase();
    this.mangNV.map(function(nv){
        var loaiLowerCase = nv.chucVu.toLowerCase();
        var indexTK = loaiLowerCase.indexOf(tkLowerCase);
        if(indexTK > -1) {
            // tìm thấy
            //lưu nhân viên vào mảng tìm kiếm
            mangTK.push(nv);
        }
    })

    return mangTK;
 }
