use("crudDb")

// Creating a new collection in a database

db.createCollection("courses")

// CREATE 
// db.courses.insertOne({
//     name: "Harry's web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })
// db.courses.insertMany([
    
//     {
//         "name": "Web Development Basics",
//         "price": 0,
//         "assignments": 8,
//         "projects": 30
//     },
//     {
//         "name": "Intro to HTML and CSS",
//         "price": 0,
//         "assignments": 5,
//         "projects": 20
//     },
//     {
//         "name": "JavaScript Fundamentals",
//         "price": 0,
//         "assignments": 10,
//         "projects": 35
//     },
//     {
//         "name": "Responsive Web Design",
//         "price": 0,
//         "assignments": 7,
//         "projects": 25
//     },
//     {
//         "name": "Frontend Frameworks",
//         "price": 0,
//         "assignments": 15,
//         "projects": 50
//     },
//     {
//         "name": "Backend Development",
//         "price": 0,
//         "assignments": 10,
//         "projects": 40
//     },
//     {
//         "name": "Database Management",
//         "price": 0,
//         "assignments": 8,
//         "projects": 30
//     },
//     {
//         "name": "API Integration",
//         "price": 0,
//         "assignments": 6,
//         "projects": 25
//     },
//     {
//         "name": "Deployment and Hosting",
//         "price": 0,
//         "assignments": 5,
//         "projects": 20
//     },
//     {
//         "name": "Version Control with Git",
//         "price": 0,
//         "assignments": 4,
//         "projects": 15
//     },
//     {
//         "name": "Testing and Debugging",
//         "price": 0,
//         "assignments": 6,
//         "projects": 22
//     },
//     {
//         "name": "Security Best Practices",
//         "price": 0,
//         "assignments": 5,
//         "projects": 18
//     },
//     {
//         "name": "Performance Optimization",
//         "price": 0,
//         "assignments": 7,
//         "projects": 28
//     },
//     {
//         "name": "User Experience Design",
//         "price": 0,
//         "assignments": 6,
//         "projects": 24
//     },
//     {
//         "name": "Project Management",
//         "price": 0,
//         "assignments": 8,
//         "projects": 32
//     },
//     {
//         "name": "Career Development",
//         "price": 0,
//         "assignments": 3,
//         "projects": 12
//     },
//     {
//         "name": "Portfolio Building",
//         "price": 0,
//         "assignments": 4,
//         "projects": 16
//     },
//     {
//         "name": "Freelancing Tips",
//         "price": 0,
//         "assignments": 2,
//         "projects": 8
//     },
//     {
//         "name": "Continuous Learning",
//         "price": 0,
//         "assignments": 1,
//         "projects": 4
//     }
// ]
// )

// READ

let courses_free = db.courses.find({price:0})

console.log(courses_free)


// UPDATE

// db.courses.updateMany({price:100},{$set: {price:1000}})
// db.courses.updateOne({price:1000},{$set: {price:100}})

// db.courses.deleteMany({price:0})

db.courses.find({$or:[{assignments:{$lte: 12}},
    {projects:{$gte:10}}
]
})
