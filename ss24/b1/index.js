let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
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
                alert(` số nhỏ nhất: ${arr[0]}`);
                alert(` số lớn nhất: ${arr[arr.length - 1]}`);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                alert("tổng các phần tử trong mảng là: " + sum);
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let dem = 0;
                let num = prompt("mời bạn nhập số: ");
                for (let i = 0; i < arr.length; i++) {
                    if (num == arr[i]) {
                        dem++;
                    }
                }
                if (dem == 0) {
                    alert("không có số bạn nhập trong mảng");
                } else {
                    alert(` số bạn nhập có ${dem} phần tử`)
                }
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                arr.sort((a, b) => a - b);
                alert(arr);
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

