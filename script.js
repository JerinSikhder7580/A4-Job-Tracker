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



}

// document.getElementById('card1').addEventListener('click', function (e) {

//     if (e.target.classList.contains('btn') && !e.target.classList.contains('bg-primary-content') && !e.target.classList.contains('flex')) {

//         if(e.target.innerText === 'INTERVIEW'){

//             console.log(e.target.parentNode.parentNode.parentNode.innerHTML)
//         }

//     }

// })

function showOnly(btn) {

    const all = document.getElementById("all-section")
    const interview = document.getElementById("interview-section")
    const rejected = document.getElementById("rejected-section")

    all.classList.add('hidden')
    interview.classList.add('hidden')
    rejected.classList.add('hidden')


    document.getElementById(`${btn.id}-section`).classList.remove("hidden")
    // console.log()




}