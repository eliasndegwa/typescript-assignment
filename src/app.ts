interface forHabits{
    id: number
    habitName:string
    dateStarted:number
    daysPassed:number
    
}

class Habits{
    async showHabits(){
        const response=await fetch(" http://localhost:3000/habits")
        const habits=await response.json() as forHabits[]
        // console.log(habits);
        let html=''
        habits.forEach(habit=>{
            html+=`
            <div class="card">
                <i class="fa-solid fa-ban-smoking"></i>
                <p>${habit.habitName}</p>
                <p>${habit.dateStarted}</p>
                <p>${habit.daysPassed}</p>
            </div>
            `
        })
        // console.log(html)
        const cardContainer=document.querySelector(".card-container")! as HTMLDivElement
        cardContainer.innerHTML=html
    }
}
new Habits().showHabits()