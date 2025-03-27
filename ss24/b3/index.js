let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và Tính trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let dem = +prompt("mời bạn nhập số phần tử: ");
            for (let i = 0; i < dem; i++) {
                let value = +prompt(`mời bạn nhập phần tử thứ ${i + 1}: `);
                arr.push(value);
                count = 1;
            }
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(arr);
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                arr.sort((a, b) => a - b);
                alert(` số lớn nhất: ${arr[arr.length - 1]}`);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] >= 0) {
                        sum += arr[i];
                    }
                }
                let tb = sum / 2;
                alert(` 
                    tổng các số dương trong mảng là: ${sum}
                    trung bình cộng là: ${tb}`);
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let count = 0;
                for (let i = arr.length - 1; i >= (arr.length / 2); i--) {
                    let temp = arr[i];
                    arr[i] = arr[count];
                    arr[count] = temp;
                    count++;
                }
                alert(arr);
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let count = 0,check=0;
                for (let i = arr.length - 1; i >= (arr.length / 2); i--) {
                    if(arr[i] != arr[count]){
                        check=1;
                        break;
                    }
                    count++;
                }
                if(check==0){
                    alert("mảng ko đối xứng");
                }else{
                alert("mảng đối xứng");
                }
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
