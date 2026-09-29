const button = document.getElementById("btn");
const box = document.getElementById("emptyresume");

button.addEventListener("click", function() {

  box.innerHTML = ""; 

  const myName = document.createElement("h2");
  myName.textContent = "Shashank Kumar";
  box.appendChild(myName);

  const myEdu = document.createElement("p");
  myEdu.textContent = "Education: B.Tech";
  box.appendChild(myEdu);

  const myCgpa = document.createElement("p");
  myCgpa.textContent = "CGPA: 7.0";
  box.appendChild(myCgpa);
  
  const myHobbies = document.createElement("p");
  myHobbies.textContent = "Hobbies: Coding, Sports";
  box.appendChild(myHobbies);

  const image = document.createElement("img");
  image.src ="C:\Users\LENOVO\Downloads\Shashank Photo.jpg";
  box.appendChild(image);

});