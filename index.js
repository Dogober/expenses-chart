const fetchGainData = async () => {
    const response = await fetch('https://run.mocky.io/v3/771cb58b-f123-441a-b8fb-10e5a04993a0')
    const data = await response.json()

    return data
}

fetchGainData().then(gainData => {
        const maxDayAmount = Math.max(...gainData.map(day => day.amount))
        const heightFactor = 100/Math.max(...gainData.map(day => day.amount))
        gainData.map(day => {
                document.querySelector(".expenses-chart__chart").insertAdjacentHTML('beforeend', `
                    <div class=day-amount-container>
                        <div class=day-amount-title>
                            $${day.amount}
                        </div>
                        <div
                            class=day-amount
                            style=height:${heightFactor*day.amount}px;background-color:${day.amount === maxDayAmount ?'#76B5BC' :'#EC775F'}
                        >
                        </div>
                        <div class=expenses-chart__title>
                            ${day.day}
                        </div>
                    </div>
                `)
            }
        )
    }
)
