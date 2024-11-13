// Vô hiệu hóa các phím tắt và thao tác chuột
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Vô hiệu hóa right-click
}, false);

document.addEventListener("keydown", function (e) {
    // Kiểm tra các phím bị vô hiệu hóa
    if (
        e.key === "F12" ||                         // Vô hiệu hóa F12
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Vô hiệu hóa Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Vô hiệu hóa Ctrl+Shift+J
        (e.ctrlKey && e.key === "U")               // Vô hiệu hóa Ctrl+U (view source)
    ) {
        
        e.preventDefault(); 
        
    }
});
 