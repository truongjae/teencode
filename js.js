function convertToTeenCode() {
    var inp = document.getElementById("inp").value;
    var out = "";
    for (var i = 0; i < inp.length; i++) {
        var s = inp[i];
        switch (s) {
            // chữ A
            case "a":
                out += "4";
                break;
            case "á":
                out += "4'";
                break;
            case "à":
                out += "4`";
                break;
            case "ạ":
                out += "4.";
                break;
            case "ã":
                out += "4~";
                break;
            case "ả":
                out += "4?";
                break;
                //
            case "A":
                out += "4";
                break;
            case "Á":
                out += "4'";
                break;
            case "À":
                out += "4`";
                break;
            case "Ạ":
                out += "4.";
                break;
            case "Ã":
                out += "4~";
                break;
            case "Ả":
                out += "4?";
                break;
                //
            case "â":
                out += "4^";
                break;
            case "ấ":
                out += "4^'";
                break;
            case "ầ":
                out += "4^`";
                break;
            case "ậ":
                out += "4^.";
                break;
            case "ẫ":
                out += "4^~";
                break;
            case "ẩ":
                out += "4^?";
                break;
                //
            case "Â":
                out += "4^";
                break;
            case "Ấ":
                out += "4^'";
                break;
            case "Ầ":
                out += "4^`";
                break;
            case "Ậ":
                out += "4^.";
                break;
            case "Ẫ":
                out += "4^~";
                break;
            case "Ẩ":
                out += "4^?";
                break;
                //
            case "ă":
                out += "4w";
                break;
            case "ắ":
                out += "4w'";
                break;
            case "ằ":
                out += "4w`";
                break;
            case "ặ":
                out += "4w.";
                break;
            case "ẵ":
                out += "4w~";
                break;
            case "ẳ":
                out += "4w?";
                break;
                //
            case "Ă":
                out += "4w";
                break;
            case "Ắ":
                out += "4w'";
                break;
            case "Ằ":
                out += "4w`";
                break;
            case "Ặ":
                out += "4w.";
                break;
            case "Ẵ":
                out += "4w~";
                break;
            case "Ẳ":
                out += "4w?";
                break;
                //chữ B
            case "b":
                out += "|3";
                break;
            case "B":
                out += "|3";
                break;
                // chữ C
            case "c":
                out += "(";
                break;
            case "C":
                out += "(";
                break;
                // chữ D
            case "d":
                out += "|)";
                break;
            case "D":
                out += "|)";
                break;
                //
            case "đ":
                out += "-|)";
                break;
            case "Đ":
                out += "-|)";
                break;
                // chữ E
            case "e":
                out += "3";
                break;
            case "é":
                out += "3'";
                break;
            case "è":
                out += "3`";
                break;
            case "ẹ":
                out += "3.";
                break;
            case "ẽ":
                out += "3~";
                break;
            case "ẻ":
                out += "3?";
                break;
                //
            case "E":
                out += "3";
                break;
            case "É":
                out += "3'";
                break;
            case "È":
                out += "3`";
                break;
            case "Ẹ":
                out += "3.";
                break;
            case "Ẽ":
                out += "3~";
                break;
            case "Ẻ":
                out += "3?";
                break;
                //
            case "ê":
                out += "3^";
                break;
            case "ế":
                out += "3^'";
                break;
            case "ề":
                out += "3^`";
                break;
            case "ệ":
                out += "3^.";
                break;
            case "ễ":
                out += "3^~";
                break;
            case "ể":
                out += "3^?";
                break;
                //
            case "Ê":
                out += "3^";
                break;
            case "Ế":
                out += "3^'";
                break;
            case "Ề":
                out += "3^`";
                break;
            case "Ệ":
                out += "3^.";
                break;
            case "Ễ":
                out += "3^~";
                break;
            case "Ể":
                out += "3^?";
                break;
                // chữ G
            case "g":
                out += "9";
                break;
            case "G":
                out += "9";
                break;
                // chữ H
            case "h":
                out += "|~|";
                break;
            case "H":
                out += "|~|";
                break;
                // chữ I
            case "i":
                out += "j";
                break;
            case "í":
                out += "j'";
                break;
            case "ì":
                out += "j`";
                break;
            case "ị":
                out += "j.";
                break;
            case "ĩ":
                out += "j~";
                break;
            case "ỉ":
                out += "j?";
                break;
                //
            case "I":
                out += "j";
                break;
            case "Í":
                out += "j'";
                break;
            case "Ì":
                out += "j`";
                break;
            case "Ị":
                out += "j.";
                break;
            case "Ĩ":
                out += "j~";
                break;
            case "Ỉ":
                out += "j?";
                break;
                // chữ K
            case "k":
                out += "|c";
                break;
            case "K":
                out += "|c";
                break;
                // chữ L
            case "l":
                out += "|";
                break;
            case "L":
                out += "|_";
                break;
                // chữ M
            case "m":
                out += "w";
                break;
            case "M":
                out += "W";
                break;
                // chữ N
            case "n":
                out += "|\\|";
                break;
            case "N":
                out += "|\\|";
                break;
                // chữ O
            case "o":
                out += "0";
                break;
            case "ó":
                out += "0'";
                break;
            case "ò":
                out += "0`";
                break;
            case "ọ":
                out += "0.";
                break;
            case "õ":
                out += "0~";
                break;
            case "ỏ":
                out += "0?";
                break;
                //
            case "ô":
                out += "0^";
                break;
            case "ố":
                out += "0^'";
                break;
            case "ồ":
                out += "0^`";
                break;
            case "ộ":
                out += "0^.";
                break;
            case "ỗ":
                out += "0^~";
                break;
            case "ổ":
                out += "0^?";
                break;
                //
            case "ơ":
                out += "0w";
                break;
            case "ớ":
                out += "0w'";
                break;
            case "ờ":
                out += "0w`";
                break;
            case "ợ":
                out += "0w.";
                break;
            case "ỡ":
                out += "0w~";
                break;
            case "ở":
                out += "0w?";
                break;
                //
            case "O":
                out += "0";
                break;
            case "Ó":
                out += "0'";
                break;
            case "Ò":
                out += "0`";
                break;
            case "Ọ":
                out += "0.";
                break;
            case "Õ":
                out += "0~";
                break;
            case "Ỏ":
                out += "0?";
                break;
                //
            case "Ô":
                out += "0^";
                break;
            case "Ố":
                out += "0^'";
                break;
            case "Ồ":
                out += "0^`";
                break;
            case "Ộ":
                out += "0^.";
                break;
            case "Ỗ":
                out += "0^~";
                break;
            case "Ổ":
                out += "0^?";
                break;
                //
            case "Ơ":
                out += "0w";
                break;
            case "Ớ":
                out += "0w'";
                break;
            case "Ờ":
                out += "0w`";
                break;
            case "Ợ":
                out += "0w.";
                break;
            case "Ỡ":
                out += "0w~";
                break;
            case "Ở":
                out += "0w?";
                break;
                // chữ P
            case "p":
                out += "j>";
                break;
            case "P":
                out += "J>";
                break;
                // chữ Q
            case "q":
                out += "w";
                break;
            case "Q":
                out += "W";
                break;
                // chữ R
            case "r":
                out += "|^";
                break;
            case "R":
                out += "|^";
                break;
                // chữ S
            case "s":
                out += "5";
                break;
            case "S":
                out += "5";
                //chữ T
            case "t":
                out += "T";
                break;
            case "T":
                out += "T";
                break;
                // chữ U
            case "u":
                out += "v";
                break;
            case "ú":
                out += "v'";
                break;
            case "ù":
                out += "v`";
                break;
            case "ụ":
                out += "v.";
                break;
            case "ũ":
                out += "v~";
                break;
            case "ủ":
                out += "v?";
                break;
                //
            case "U":
                out += "V";
                break;
            case "Ú":
                out += "V'";
                break;
            case "Ù":
                out += "V`";
                break;
            case "Ụ":
                out += "V.";
                break;
            case "Ũ":
                out += "V~";
                break;
            case "Ủ":
                out += "V?";
                break;
                //
            case "ư":
                out += "w";
                break;
            case "ứ":
                out += "w'";
                break;
            case "ừ":
                out += "w`";
                break;
            case "ự":
                out += "w.";
                break;
            case "ữ":
                out += "w~";
                break;
            case "ử":
                out += "w?";
                break;
                //
            case "Ư":
                out += "W";
                break;
            case "Ứ":
                out += "W'";
                break;
            case "Ừ":
                out += "W`";
                break;
            case "Ự":
                out += "W.";
                break;
            case "Ữ":
                out += "W~";
                break;
            case "Ử":
                out += "W?";
                break;
                //chữ V
            case "v":
                out += "^";
                break;
            case "V":
                out += "^";
                break;
                // chữ X
            case "x":
                out += "><";
                break;
            case "X":
                out += "><";
                break;
                // chữ Y
            case "y":
                out += "x";
                break;
            case "ý":
                out += "x'";
                break;
            case "ỳ":
                out += "x`";
                break;
            case "ỵ":
                out += "x.";
                break;
            case "ỹ":
                out += "x~";
                break;
            case "ỷ":
                out += "x?";
                break;
            case "Y":
                out += "X";
                break;
            case "Ý":
                out += "X'";
                break;
            case "Ỳ":
                out += "X`";
                break;
            case "Ỵ":
                out += "X.";
                break;
            case "Ỹ":
                out += "X~";
                break;
            case "Ỷ":
                out += "X?";
                break;
                // CHỮ W
            case "w":
                out += "ư";
                break;
            case "W":
                out += "Ư";
                break;
            default:
                out += s;
        }
    }
    document.getElementById("outp").value = out;
}


function copy() {
    document.getElementById("outp").select();
    document.execCommand("copy");
    document.getElementById("alert").style.display = "block";
}
document.getElementById("inp").addEventListener("keyup", () => {
    convertToTeenCode();
});
document.getElementById("close").onclick = function() {
    document.getElementById("alert").style.display = "none";
}