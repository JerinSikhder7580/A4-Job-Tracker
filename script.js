const allButton = [
    document.getElementById("all"),
    document.getElementById("interview"),
    document.getElementById("rejected")
]

function colorBtn(id) {
    // FILTERING INACTIVE BUTTON
    const inactiveBtn = allButton.filter((btn) => btn.id !== id) //true / false


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
        //  BUTTON COLORING FOR INTERVIEW PAGE


        // interviewPageData = document.getElementById("interview-container").innerHTML



    }
    // active section 
    else if (activeSection.id === "rejected-section") {

        if (rejectedPageData.length > 0) {
            activeSection.querySelector(".default").classList.add("hidden")

        }
        else {
            activeSection.querySelector('.default').classList.remove('hidden')

        }
        // REJECT SECTION COUNT RE-RENDER

        document.getElementById("job-count").innerText = document.getElementById('rejected-container').childElementCount
        //BUTTON COLORING FOR REJECTED PAGE 
        // const allData = document.getElementById("rejected-container").querySelectorAll(".statusBtn")
        // for (let single of allData) {
        //     single.className = ""
        //     single.classList.add("btn", "text-red-500", "border", "border-red-500", "statusBtn")
        //     single.innerText = "REJECTED"

        // }

    }
    else if (activeSection.id === "all-section") {
        document.getElementById('job-count').innerText = document.getElementById('cards').childElementCount
    }






}
let interviewPageData = []
const renderInterviewPage = () => {
    document.getElementById("interview-container").innerHTML = interviewPageData.join("")

}


let rejectedPageData = []
const renderRejectedPage = () => {
    document.getElementById("rejected-container").innerHTML = rejectedPageData.join("")

}

document.getElementById('cards').addEventListener('click', function (e) {


    if (e.target.classList.contains('btn') && !e.target.classList.contains('bg-primary-content') && !e.target.classList.contains('flex')) {

        if (e.target.innerText === 'INTERVIEW') {
            const card = e.target.parentNode.parentNode.parentNode.innerHTML

            const duplicate = interviewPageData.filter((c) => c == card)

            let arr = []
            for (let single of document.getElementById("interview-container").querySelectorAll("h1")) {
                arr.push(single.innerText)
            }

            const cardMother = e.target.parentNode.parentNode.parentNode.querySelector("h1").innerText

            const duplicate2 = arr.filter((c) => c == cardMother)


            if (duplicate.length > 0 || duplicate2.length > 0) {
                return alert("Already Applied")
            }

            interviewPageData.push(card)
            document.getElementById("interview-container").innerHTML = interviewPageData.join("")
            document.getElementById("interview-count").innerText = interviewPageData.length
            // SET STATUS
            const status = e.target.parentNode.parentNode.parentNode.querySelector(".statusBtn")
            status.className = ""
            status.innerText = e.target.innerText
            status.classList.add("btn", "text-green-500", "border", "border-green-500", "statusBtn")






        }
        else if (e.target.innerText === "REJECTED") {
            const card = e.target.parentNode.parentNode.parentNode.innerHTML
            const duplicate = rejectedPageData.filter((c) => c == card)

            let arr2 = []
            for (let single of document.getElementById("rejected-container").querySelectorAll("h1")) {
                arr2.push(single.innerText)
            }

            const cardMother = e.target.parentNode.parentNode.parentNode.querySelector("h1").innerText

            const duplicate2 = arr2.filter((c) => c == cardMother)


            if (duplicate.length > 0 || duplicate2.length > 0) {
                return alert("Already Rejected")
            }

            rejectedPageData.push(e.target.parentNode.parentNode.parentNode.innerHTML)
            document.getElementById("rejected-count").innerText = rejectedPageData.length

            document.getElementById("rejected-container").innerHTML = rejectedPageData.join("")


            const status = e.target.parentNode.parentNode.parentNode.querySelector(".statusBtn")
            status.className = ""
            status.innerText = e.target.innerText
            status.classList.add("btn", "text-red-500", "border", "border-red-500", "statusBtn")





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

    //DELETE BUTTON
    if (e.target.classList.contains('btn') && e.target.classList.contains('flex')) {


        const card = e.target.parentNode.parentNode

        interviewPageData = interviewPageData.filter((data) => data.trim("") != card.outerHTML.trim(""))
        renderInterviewPage()





        document.getElementById('job-count').innerText = document.getElementById('interview-container').childElementCount
        document.getElementById("interview-count").innerText = document.getElementById('interview-container').childElementCount

        if (document.getElementById("interview-container").innerHTML.trim("") === "") {
            document.getElementById('interview-default-card').classList.remove('hidden')


        }

    }
    // REJECTED BUTTON
    if (e.target.classList.contains('btn') && e.target.innerText === "REJECTED") {
        const card = e.target.parentNode.parentNode

        interviewPageData = interviewPageData.filter((data) => data.trim('') != card.outerHTML.trim(''))
        renderInterviewPage()
        rejectedPageData.push(card.outerHTML)
        renderRejectedPage()
        document.getElementById("rejected-count").innerText = rejectedPageData.length
        document.getElementById('job-count').innerText = interviewPageData.length
        document.getElementById('interview-count').innerText = interviewPageData.length
    }




})

document.getElementById('rejected-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && e.target.classList.contains('flex')) {


        // e.target.parentNode.parentNode.remove()
        const card = e.target.parentNode.parentNode
        rejectedPageData = rejectedPageData.filter((data) => data.trim("") != card.outerHTML.trim(""))
        // console.log(rejectedPageData)
        renderRejectedPage()



        document.getElementById('job-count').innerText = document.getElementById('rejected-container').childElementCount
        document.getElementById("rejected-count").innerText = document.getElementById('rejected-container').childElementCount


        if (document.getElementById("rejected-container").innerHTML.trim("") === "") {
            document.getElementById('rejected-default-card').classList.remove('hidden')


        }

    }

})