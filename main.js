var link = document.querySelector('.link');
var result2 = document.querySelector('.result2');
var thumbnail = document.querySelector('thumbnail');

// download button accordion
const accordion =document.getElementsByClassName("contentbox");

for(i=0; i<accordion.length;i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
  });
}

// download button function 
function preview() {
if (link.value!=""){
     if(link.value.indexOf("https://youtu.be/") != -1)
     {
       result2.classList.add("active");
         var url1 = link.value.replace('https://youtu.be/','/');
         var url2 = `https://img.youtube.com/vi${url1}/maxresdefault.jpg`;
       document.querySelector('.result2').innerHTML = `<img src="${url2}" class="thumbnail"/>`;
      }
      else if(link.value.indexOf("https://www.youtube.com/watch?v=") != -1)
      {
        result2.classList.add("active");
        var url = link.value.replace("https://www.youtube.com/watch?v=","/");
        var url2 = `https://img.youtube.com/vi${url}/maxresdefault.jpg`;
       document.querySelector('.result2').innerHTML = `<img src="${url2}" class="thumbnail"/>`;
      }
}
}
