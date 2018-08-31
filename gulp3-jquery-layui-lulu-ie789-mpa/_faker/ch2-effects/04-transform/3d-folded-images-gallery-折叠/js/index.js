window.onload = function(){
  function img2fold(img){
    var container = document.createElement("DIV");
    container.className = "container";
    /*container.onclick = function(){
    if(this.className.indexOf("active") === -1)
      this.className = this.className + " active";
    else
      this.className = this.className.replace(" active","");
    }*/
    var sub_container = document.createElement("DIV");
    sub_container.className = "sub_container";
    var front_face = document.createElement("DIV");
    front_face.className = "front face";
    var back_face = document.createElement("DIV");
    back_face.className = "back face";
    var label = document.createElement("DIV");
    label.className = "label";
    var title = document.createTextNode(img.getAttribute("alt"));
    label.appendChild(title);
    front_face.appendChild(img);
    var front_face_top = front_face.cloneNode(true);
    var front_face_middle = front_face.cloneNode(true);
    var front_face_bottom = front_face.cloneNode(true);
    front_face_top.className = front_face_top.className + " top";
    front_face_middle.className = front_face_middle.className + " middle";
    front_face_bottom.className = front_face_bottom.className + " bottom";
    var back_face_top = back_face.cloneNode(true);
    var back_face_middle = back_face.cloneNode(true);
    var back_face_bottom = back_face.cloneNode(true);
    back_face_top.className = back_face_top.className + " top";
    back_face_middle.className = back_face_middle.className + " middle";
    back_face_middle.appendChild(label);
    back_face_bottom.className = back_face_bottom.className + " bottom";
    sub_container.appendChild(front_face_top);
    sub_container.appendChild(back_face_top);
    sub_container.appendChild(front_face_middle);
    sub_container.appendChild(back_face_middle);
    sub_container.appendChild(front_face_bottom);
    sub_container.appendChild(back_face_bottom);
    container.appendChild(sub_container);
    document.getElementById('gallery').appendChild(container);
  }
  var imgs = document.getElementById('gallery').getElementsByTagName('img');
  var imgs_number = imgs.length;
  for(i=0;i<imgs_number;i++){
    img2fold(imgs[0]);
  }
}