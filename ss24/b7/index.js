let check = 1, count = 0, str = "";
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế các ký tự
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
                str = str.trim();
                alert(str);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                str = str.split("").reverse().join("");
                alert(` sau khi đảo ngược là: ${str}`)
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                str = str.trim();
                let soTu = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === " " && str[i + 1] && str[i + 1] !== " ") {
                        soTu++;
                    }
                }
                if (soTu > 0) {
                    soTu += 1;
                }
                alert(`Số lượng từ trong chuỗi là: ${soTu}`);
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let newstr="";
                let char=prompt("mời bạn nhập kí tự thay thế: ");
                let change=prompt("mời bạn nhập kí tự để thay thế: ");
                for (let i = 0; i < str.length; i++) {
                    if(str[i]===char){
                        newstr+=change;
                    }else{
                        newstr+=str[i];
                    }
                }
                alert(newstr)
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
