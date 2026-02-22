const allButton = [
    document.getElementById("all"),
    document.getElementById("interview"),
    document.getElementById("rejected")
]

function colorBtn(id) {
    // FILTERING INACTIVE BUTTON
    const inactiveBtn = allButton.filter((btn) => btn.id !== id)


    //REMOVING CLASSES
    for (let btn of inactiveBtn) {
        btn.classList.remove("btn-primary", "text-white")
    }

    //ACTIVATING THE BUTTON
    const btn = document.getElementById(id)
    btn.classList.add('btn-primary')

    showOnly(btn)
    // showDefault(btn)



}



function showOnly(btn) {

    const all = document.getElementById("all-section")
    const interview = document.getElementById("interview-section")
    const rejected = document.getElementById("rejected-section")

    all.classList.add('hidden')
    interview.classList.add('hidden')
    rejected.classList.add('hidden')




    const activeSection = document.getElementById(`${btn.id}-section`)

    activeSection.classList.remove("hidden")

    // HIDING DEFAULT CARD
    activeSection.querySelector(".default").classList.add("hidden")




}
let interviewPageData = []


let rejectedPageData = []

document.getElementById('cards').addEventListener('click', function (e) {


    if (e.target.classList.contains('btn') && !e.target.classList.contains('bg-primary-content') && !e.target.classList.contains('flex')) {

        if (e.target.innerText === 'INTERVIEW') {
            const card = e.target.parentNode.parentNode.parentNode.innerHTML

            const duplicate = interviewPageData.filter((c) => c == card)


            if (duplicate.length > 0) {
                return alert("Already Applied")
            }

            interviewPageData.push(card)
            document.getElementById("interview-container").innerHTML = interviewPageData.join("")
            document.getElementById("interview-count").innerText = interviewPageData.length
            // PREVENT DUPLICATE DATA






        }
        else if (e.target.innerText === "REJECTED") {
            const card = e.target.parentNode.parentNode.parentNode.innerHTML
            const duplicate = rejectedPageData.filter((c) => c == card)


            if (duplicate.length > 0) {
                return alert("Already Rejected")
            }

            rejectedPageData.push(e.target.parentNode.parentNode.parentNode.innerHTML)
            document.getElementById("rejected-count").innerText = rejectedPageData.length



            document.getElementById("rejected-container").innerHTML = rejectedPageData.join("")
        }

    }

})

