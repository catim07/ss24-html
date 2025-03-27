let check = 1, count = 0, arr = [], hang, cot;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
        7. Thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            hang = +prompt("mời bạn nhập số hàng: ");
            cot = +prompt("mời bạn nhập số cột: ");
            for (let i = 0; i < hang; i++) {
                arr[i] = [];
                for (let j = 0; j < cot; j++) {
                    arr[i][j] = +prompt(`mời bạn nhập phần tử hàng ${i} cột ${j}}: `);
                }
            }
            count = 1;
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
                let total = 0;
                for (let i = 0; i < hang; i++) {
                    for (let j = 0; j < cot; j++) {
                        total += arr[i][j];
                    }
                }
                alert("tổng phần tử trong mảng là: " + total);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let total = 0;
                for (let i = 0; i < hang; i++) {
                    total += arr[i][i];
                }
                alert("tổng phần tử đường chéo chính là: " + total)
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let total = 0;
                for (let i = 0; i < hang; i++) {
                    total += arr[i][arr.length - 1 - i];
                }
                alert("tổng phần tử đường chéo phụ là: " + total)
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let bo = 0, select;
                do {
                    let select = +prompt(`
                            ======= MENU =====
                            1. hàng
                            2. cột
                            3. thoát
                            ==================
                            Lựa chọn của bạn: `);
                    switch (select) {
                        case 1:
                            {
                                let total = 0;
                                let index = prompt("mời bạn nhập vị trí hàng: ");
                                for (let i = 0; i < arr.length; i++) {
                                    total += arr[index][i];
                                }
                                let tb = total / 2;
                                alert("trung bình cộng của hàng là: " + tb);
                                break;
                            }
                        case 2:
                            {
                                let total = 0;
                                let index = prompt("mời bạn nhập vị trí cột: ");
                                for (let i = 0; i < arr.length; i++) {
                                    total += arr[i][index];
                                }
                                let tb = total / 2;
                                alert("trung bình cộng của cột là: " + tb);
                                break;
                            }
                        case 3:
                            bo = 1;
                            break;
                        default:
                            alert("số ko hợp lệ");
                            break;
                    }
                } while (bo == 0);
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
