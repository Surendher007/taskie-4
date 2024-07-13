// resume data in json

const resume = {
    "name": "surendher babu",
    "contact": {
        "email": "surendherbabu13@gmail.com",
        "phone": "6383451520",
        "address": "775/6,main road, kandaangalam"
    },
    "education": [
        {
            "degree": "Bachelor of Computer Application",
            "institution": "Bharathidasan university",
            "location": "Trichy",
            "graduationYear": 2020
        }
    ],
    "skills": [
        "JavaScript",
        "Node.js",
        "React",
        "Angular",
        "HTML",
        "CSS"
    ],
    "interests": [
        "Coding",
        "Open-source contributions",
        "Traveling",
        "Reading"
    ]
};

// for loop

for (let i = 0; i < resume.interests.length; i++) {
    console.log(resume.interests[i]);
}

// for in loop

for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(`${key}:`, resume[key]);
    }
}

// for of loop

for (let skills of resume.skills) {
    console.log(skills);
}

// forEach

resume.interests.forEach(interests => {
    console.log(interests);
});


