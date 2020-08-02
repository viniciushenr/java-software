var image = null;
var image_reset = null;
var canvas;

function loadImage(){
  var file = document.getElementById("buttonLoadImg");
  image = new SimpleImage(file);
  image_reset = new SimpleImage(file);
  canvas = document.getElementById("canvas_fig");
  image.drawTo(canvas);
}

function reset(){
  image_reset.drawTo(canvas);
}

function filterGrayscale(){
  if(image == null || ! image.complete()){
    alert("Image not loaded!");
  }
  else{
    
    reset();
    
    for(var pixel of image.values()){
      avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    image.drawTo(canvas);
  }
}

function filterRed(){
  if(image == null || ! image.complete()){
    alert("Image not loaded!")
  }
  else{
    
    reset();
    
    for (var pixel of image.values()){
      
      avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    image.drawTo(canvas);
  }
}

function filterRainbow(){
  if(image == null || ! image.complete()){
    alert("Image not loaded!")
  }
  else{
    
    reset();
    var height = image.getHeight()/7;
    for (var pixel of image.values()){
      
      avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      
      if(pixel.getY() >=0 &&
        pixel.getY()< height){
        if(avg<128){
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        }
        else{
          pixel.setRed(0.4*avg+153);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg+153);
        }
        
      }
      
      if(pixel.getY() >=height &&
        pixel.getY()< 2*height){
        if(avg<128){
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else{
          pixel.setRed(1.2*avg-51);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }
      }
      
      if(pixel.getY() >=2*height &&
        pixel.getY()< 3*height){
        if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }
      }
      
      if(pixel.getY() >=3*height &&
        pixel.getY()< 4*height){
        if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }
      }
      
      if(pixel.getY() >=4*height &&
        pixel.getY()< 5*height){
        if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }
      }
      
      if(pixel.getY() >=5*height &&
        pixel.getY()< 6*height){
        if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2*avg-255);
        }
      }
      
      if(pixel.getY() >=6*height &&
        pixel.getY()<= 7*height){
        if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }
      }
    }
    image.drawTo(canvas);
  }
}