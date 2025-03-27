let check = 1, count = 0, arr = [],hang, cot;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            hang = +prompt("mời bạn nhập số hàng: ");
            cot = +prompt("mời bạn nhập số cột: ");
            for (let i = 0; i < hang; i++) {
                arr[i]=[];
                for (let j = 0; j < cot; j++) {
                    arr[i][j]= +prompt(`mời bạn nhập phần tử hàng ${i} cột ${j}}: `);
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
                let total=0;
                for (let i = 0; i < hang; i++) {
                    for (let j = 0; j < cot; j++) {
                        total+=arr[i][j];
                    }
                }
                alert("tổng phần tử trong mảng là: "+total);
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let temp=0;
                for (let i = 0; i < hang; i++) {
                    for (let j = 0; j < cot; j++) {
                        if(arr[i][j]>temp){
                            temp=arr[i][j];
                        }
                    }
                }
                alert("số lớn nhất là: "+temp)
            }
            break;
        case 5:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let total=0;
                let index=+prompt("mời bạn nhập hàng để tính tổng: ");
                if(index>hang){
                    alert("hàng không xác định");
                }else{
                    for (let j = 0; j < cot; j++) {
                        total += arr[index][j];
                    }
                    alert(`Tổng số của hàng ${index} là ${total}`);
            }
            }
            break;
        case 6:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                arr.reverse();
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
