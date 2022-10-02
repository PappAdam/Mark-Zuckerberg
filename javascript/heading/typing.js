const title = "Rust";
const s_title = "\"rust is fdsd sfsatre\"";
const s_title2 = "\"rust is a faster horse\"";
const start_del = Math.floor(Math.random() * 7 + 8); 
const start_retype = Math.floor(Math.random() * 6 + 3); 

function typing(i) {
    if (i == 0) {
        document.getElementById("main_title").innerHTML = "";
        document.getElementById("horse").innerHTML = "";
    }
    if (i <= title.length) {
        document.getElementById('main_title').innerHTML = `${title.substring(0, i)}<span class=\"cursor\">|</span>`
        setTimeout(typing, Math.round(Math.random() * 100 + 200), i+1);
    }

    if (i == title.length) {
        sub_title(0, false, false);
    }
}

function sub_title(i, misstype, wmt) {
    var mt = misstype;
    var w_mt = wmt;
    if (i == start_del && !w_mt) {
        mt = true;
    }

    if (i == start_retype && mt) {
        mt = false;
        w_mt = true;
    }

    if (mt && i > start_retype - 1) {
        document.getElementById('horse').innerHTML = `${s_title.substring(0, i)}`
        setTimeout(sub_title, Math.round(Math.random() * 70 + 100), i-1, mt, w_mt);
    }

    else if (i <= s_title2.length && w_mt) {
        document.getElementById('horse').innerHTML = `${s_title2.substring(0, i)}`
        setTimeout(sub_title, Math.round(Math.random() * 79 + 20), i+1, mt, w_mt);
    }

    else if (i <= s_title.length && !w_mt) {
        document.getElementById('horse').innerHTML = `${s_title.substring(0, i)}`
        setTimeout(sub_title, Math.round(Math.random() * 79 + 20), i+1, mt, w_mt);
    }
}

typing(0);