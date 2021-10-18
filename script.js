var st_num ="";
var st_int = 0;
var sec_int = 0;
var symbol = "none";

function convert(arg1) {
    if (st_num == "") {
        if (arg1) st_int = 0;
        else sec_int = 0;
    } else {
        if (arg1) {
            st_int = Number(st_num);
            st_num = "";
        } else {
            sec_int = Number(st_num);
            st_num = "";
        }
    }
}

function place(arg1) {
  if (st_num.length == 16 || (st_num.length == 1 && st_num == 0 && arg1 == 0)) {
      return;
  }
  else if (st_num.length == 1 && st_num == 0) {
    st_num = arg1;
    document.getElementById("screen_inner").innerHTML = st_num;
    return;
  }
  
  let x = document.getElementById("screen_inner");
  st_num = st_num + arg1;
  x.innerHTML = st_num;   
}

function equasion(arg1) {
    convert(1);
    if (arg1 == "sqrt" && st_int >= 0) {
        document.getElementById("screen_inner").innerHTML = Math.sqrt(st_int);
        st_num = Math.sqrt(st_int).toString()
        st_int = 0;
        sec_int = 0;
        symbol = "none";
        return;
    }
    else if (arg1 == "sqrt" && st_int < 0) {
        document.getElementById("screen_inner").innerHTML = "Niedozwolona operacja!";
        st_int = 0;
        sec_int = 0;
        symbol = "none";
        return;
    }
    document.getElementById("screen_inner").innerHTML = arg1;
    symbol = arg1;
}

function equal_to() {
    switch(symbol) {
        case '+':
            convert(0);
            document.getElementById("screen_inner").innerHTML = (st_int + sec_int);
            st_num = (st_int + sec_int).toString()
            st_int = 0;
            sec_int = 0;
            symbol = "none";
            return;
        case '-':
            convert(0);
            document.getElementById("screen_inner").innerHTML = (st_int - sec_int);
            st_num = (st_int - sec_int).toString()
            st_int = 0;
            sec_int = 0;
            symbol = "none";
            return;
        case '*':
            convert(0);
            document.getElementById("screen_inner").innerHTML = (st_int * sec_int);
            st_num = (st_int * sec_int).toString()
            st_int = 0;
            sec_int = 0;
            symbol = "none";
            return;
        case '/':
            convert(0);
            if (sec_int == 0) {
                document.getElementById("screen_inner").innerHTML = "Niedozwolona operacja";
                st_int = 0;
                sec_int = 0;
                symbol = "none";
                return;
            }
            document.getElementById("screen_inner").innerHTML = (st_int / sec_int);
            st_num = (st_int / sec_int).toString()
            st_int = 0;
            sec_int = 0;
            symbol = "none";
            return;
        default:
            return;
    }
}





