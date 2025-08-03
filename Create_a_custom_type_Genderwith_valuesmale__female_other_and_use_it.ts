type Gender = "male" | "female" | "other"

const userGender: Gender = "male"


function gender(ug:Gender): void {
    console.log("user gender: ", ug)
}

gender("female")