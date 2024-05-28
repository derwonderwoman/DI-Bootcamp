import jwt from "jsonwebtoken";

// sign({id: userid, email:useremail}, secret-code, {expire})

const token = jwt.sign(
    {id:12, email: "jjj@mail.com", name: "John"},
    "123456",
    {
        expiresIn: 60 * 1000 
    }
)

console.log(token);

 const mytoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiampqQG1haWwuY29tIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE3MTY3OTM1ODQsImV4cCI6MTcxNjg1MzU4NH0._yvDMxDfeRat9J55nD-j3G53PNRjOFB09siJsARGG7s";

//  verify(token, secret, (err, decode) => {})

jwt.verify(mytoken, "123456", (err, decode) => {
    if(err) return console.log(err.message);

    console.log(decode);
})