function Age(){
    var namHT=new Date().getFullYear();
    var NamSinh=document.getElementById('year').value;
    var ten=document.getElementById('name').value;
    if(isNaN(Number(NamSinh)))
    {
        alert("Năm sinh phải là số");
        return false;
    }
    if(ten=="")
    {
        alert("Năm sinh phải là số");
        return false;
    }
    var age=namHT-Number(NamSinh);
    var hi="Xin chao ban "+ten;
    var realage="Tuoi cua ban "+age;
    document.getElementById('hi').innerHTML=hi;
    document.getElementById('age').innerHTML=realage;
}