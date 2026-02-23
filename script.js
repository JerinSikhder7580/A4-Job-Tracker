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
    //HIDING SECTION
    activeSection.classList.remove("hidden")


    // HIDING DEFAULT CARD
    if (activeSection.id === "interview-section") {
        if (interviewPageData.length > 0) {


            activeSection.querySelector(".default").classList.add("hidden")
        }
        else {
            activeSection.querySelector('.default').classList.remove('hidden')

        }
        // INTERVIEW SECTION COUNT RE-RENDER
        const childCount = document.getElementById("interview-container").childElementCount
        document.getElementById("job-count").innerText = childCount


    }
    else if (activeSection.id === "rejected-section") {

        if (rejectedPageData.length > 0) {
            activeSection.querySelector(".default").classList.add("hidden")

        }
        else {
            activeSection.querySelector('.default').classList.remove('hidden')

        }
        // REJECT SECTION COUNT RE-RENDER

        document.getElementById("job-count").innerText = document.getElementById('rejected-container').childElementCount

    }
    else if (activeSection.id === "all-section") {
        document.getElementById('job-count').innerText = document.getElementById('cards').childElementCount
    }






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

document.getElementById('cards').addEventListener('click', (e) => {


    if (e.target.classList.contains('btn') && e.target.classList.contains('flex')) {

        e.target.parentNode.parentNode.parentNode.remove()
        document.getElementById('job-count').innerText = document.getElementById('cards').childElementCount
        document.getElementById("total-count").innerText = document.getElementById('cards').childElementCount


    }

})

document.getElementById('interview-container').addEventListener('click', (e) => {


    if (e.target.classList.contains('btn') && e.target.classList.contains('flex')) {


        e.target.parentNode.parentNode.remove()
        document.getElementById('job-count').innerText = document.getElementById('interview-container').childElementCount
        document.getElementById("interview-count").innerText = document.getElementById('interview-container').childElementCount

        if (document.getElementById("interview-container").innerHTML.trim("") === "") {
            document.getElementById('interview-default-card').classList.remove('hidden')


        }

    }

})

document.getElementById('rejected-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && e.target.classList.contains('flex')) {


        e.target.parentNode.parentNode.remove()
        document.getElementById('job-count').innerText = document.getElementById('rejected-container').childElementCount
        document.getElementById("rejected-count").innerText = document.getElementById('rejected-container').childElementCount


        if (document.getElementById("rejected-container").innerHTML.trim("") === "") {
            document.getElementById('rejected-default-card').classList.remove('hidden')


        }

    }

})