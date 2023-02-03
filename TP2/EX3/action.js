
const input=document.querySelector('.myImage');
const canvas=document.querySelector('#canvas');
const add =canvas.getContext('2d');
input.addEventListener('change',(e)=>{
    console.log('change');

    const img = new Image();
    img.onload=uplode;
    img.src=URL.createObjectURL(input.files[0]);
});

function uplode(){
    console.log(this.width);
    canvas.width = this.width
    canvas.height = this.height;
    add.drawImage(this,0,0 ,canvas.width, canvas.height);
}
