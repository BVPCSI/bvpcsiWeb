function addRole(rolememberList, role){
    const section = document.createElement("section");
    section.classList.add("sect");
    const heading = document.createElement("h1");
    heading.classList.add("h");
    heading.innerHTML = role;
    section.appendChild(heading);
    const container = document.createElement("div")
    container.classList.add("cont");
    for(let i = 0; i < rolememberList.length; i++){
        var member = rolememberList[i];
        var temp = document.getElementsByTagName("template")[0];
        var clon = temp.content.cloneNode(true);
        clon.getElementById("image").src = member.imgsrc;
        clon.getElementById("image").alt = member.name;
        clon.getElementById("name").innerHTML = member.name;
        clon.getElementById("SBT").innerHTML = member.designation;
        container.appendChild(clon);
    }
    section.appendChild(container);
    document.getElementById("cont").appendChild(section);
}

(()=>{
    const members = [
        {
            name: "Vishal Sharma",
            role: "Student Branch Co-ordinator",
            designation: "Student Branch Co-ordinator",
            imgsrc: "images/AboutUsImages/csipeople/StudentCoordinator/VishalSharma.jpg"
        },
        {
            name: "Gurjot",
            role: "The Core",
            designation: "President",
            imgsrc: "/images/AboutUsImages/csipeople/core/gurjot.jpeg" 
        },
        {
            name: "Bhavey Malik",
            role: "The Core",
            designation: "Vice-President",
            imgsrc: "/images/AboutUsImages/csipeople/core/bhavey.jpg"
        },
        {
            name: "Nitya Mathur",
            role: "The Core",
            designation: "Vice-President",
            imgsrc: "/images/AboutUsImages/csipeople/core/nitya.jpeg"
        },
        {
            name: "Nirbhay Jain",
            role: "The Core",
            designation: "General Secretary",
            imgsrc: "/images/AboutUsImages/csipeople/core/nirbhay.jpeg"
        },
        {
            name: "Arohi",
            role: "The Core",
            designation: "General Secretary",
            imgsrc: "/images/AboutUsImages/csipeople/core/arohi.png"
        },
        {
            name: "Jahanvi Singh",
            role: "The Core",
            designation: "Joint Secreatary",
            imgsrc: "/images/AboutUsImages/csipeople/core/jahanvi.jpg"
        },
        {
            name: "Saniya Kapur",
            role: "The Core",
            designation: "Treasurer",
            imgsrc: "/images/AboutUsImages/csipeople/core/saniya.jpg"
        },
        {
            name: "Lakshay Manchanda",
            role: "Web Development Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/Web/lakshay.jpg"
        },
        {
            name: "Laksh Gambhir",
            role: "Event Management Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/EventManagement/laksh.png"
        },
        {
            name: "Vishakha Bothra",
            role: "Publicity Team",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/Publicity/vishakha.jpeg"
        },
        {
            name: "Rishabh Bhatnagar",
            role: "Publicity Team",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/Publicity/rishabh.jpg"
        },
        {
            name: "Sonam Kumari",
            role: "Human Resources Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/HumanResource/sonam.jpg"
        },
        {
            name: "Dhruv Rastogi",
            role: "Public Relations Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/PR/dhruv.jpg"
        },
        {
            name: "Yuvika Gautum",
            role: "Public Relations Team",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/PR/yuvika.jpg"
        },
        {
            name: "Yuvika Gautam",
            role: "Design and Creativity Team",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/DesignAndCreavity/yuvika.jpg"
        },
        {
            name: "Tripti Chugh",
            role: "Design and Creativity Team",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/DesignAndCreavity/tripti.jfif"
        },
        {
            name: "Charvi",
            role: "Technical Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/Technical/charvi.jpg"
        },
        {
            name: "Tanuj Kumar",
            role: "Technical Team",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/Technical/tanuj.jpg"
        },
        {
            name: "Avikal Darolia",
            role: "Technical Team",
            designation: "Mentor",
            imgsrc: "/images/AboutUsImages/csipeople/Technical/avikal.jpg"
        },
        {
            name: "Amisha Malik",
            role: "Society for Social Services",
            designation: "President",
            imgsrc: "/images/AboutUsImages/csipeople/SSS/amisha.jpg" 
        },
        {
            name: "Sakshi Saxena",
            role: "Society for Social Services",
            designation: "Member",
            imgsrc: "/images/AboutUsImages/csipeople/SSS/sakshi.png"
        },
        {
            name: "Kshitiz Garg",
            role: "Glitch",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/Glitch/kshitiz.jpg"
        },
        {
            name: "Dhruv Rastogi",
            role: "Glitch",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/Glitch/dhruv.jpg"
        },
        {
            name: "Krishna Deekshit",
            role: "Glitch",
            designation: "Executive",
            imgsrc: "/images/AboutUsImages/csipeople/Glitch/krishna.jpeg"
        },
        {
            name: "Aditya Kashyap",
            role: "Content",
            designation: "Head",
            imgsrc: "/images/AboutUsImages/csipeople/Content/aditya.jpeg"
        },
    ];
    let roles = [];
    members.forEach((member)=>roles.push(member.role))
    roles = [...new Set(roles)]
    for(let i=0; i<roles.length; i++){
        let rolemembers = []
        members.forEach((member)=>{
            if(member.role == roles[i])
                rolemembers.push(member);
        });
        addRole(rolemembers, roles[i]);
    }
})()