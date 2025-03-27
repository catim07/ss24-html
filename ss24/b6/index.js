let check = 1, count = 0, str = "";
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            str = prompt("mời bạn nhập chuỗi: ");
            count = 1;
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(str);
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(` độ dài chuỗi là: ${str.length}`);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let count=0;
                let char=prompt("mời bạn nhập một kí tự: ");
                for(let i=0;i<str.length;i++){
                    if(char===str[i]){
                        count++;
                    }
                }
                alert(` kí tự ${char} xuất hiện ${count} lần`)
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let strcheck=str.split("").reverse().join("");
                if(str===strcheck){
                    alert("chuỗi đối xứng");
                }else{
                    alert("chuỗi ko đối xứng");
                }
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let result="";
                let hoa= 1;
                for (let i = 0; i < str.length; i++) {
                    if (hoa) {
                        result += str[i].toUpperCase();
                        hoa = 0;
                    } else {
                        result += str[i];
                    }
            
                    if (str[i] === " ") {
                        hoa = 1;
                    }
                }
                alert(result)
            }
            break;
        case 7:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
