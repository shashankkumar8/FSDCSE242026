//generating resume on click on button  

const resumeBtn = document.getElementById("resumeBtn");
const container = document.getElementById("container");
resumeBtn.addEventListener("click", () => {
    // Code to generate resume
    const loader=document.createElement("h2");
    loader.innerText = "Generating Resume...";
    container.appendChild(loader);
});

function generateResume(){
    try{
        // Code to generate resume
        const resumeContent = `
            <h1>John Doe</h1>
            <p>Email: john.doe@example.com</p>
            <p>Phone: 123-456-7890</p>
        <h2>Experience</h2>
        <p>Software Engineer at XYZ Corp</p>
    `;
    container.innerHTML = resumeContent;
    loader.innerHTML = "Resume Generated Successfully!";
} catch (error) {
    loader.innerHTML = "<h2 style='color: red;'>Error generating resume.</h2>";
}
finally {
    loader.innerHTML = " ";}

}
console.log(generateResume());