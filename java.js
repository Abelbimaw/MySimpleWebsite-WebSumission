function tambah(){
    if( document.getElementById('count').innerText < 10){
        document.getElementById('count').innerText++;
    } else{
        alert("Luar biasa, anda sangat sayang Kediri :)");
    }
}

function resik(){
    if(confirm("Apakah anda ingin menghapus penilaian :( ?")){
        document.getElementById('count').innerText=0;
    } else {
        alert("Tidak ada penghapusan");
    }
}