document.addEventListener('DOMContentLoaded', function( ) {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    let currentDate = new Date();
    let today = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`;

        daysContainer.innerHTML = '';

        // Previus Month's dates
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        // Current month's dates
        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            
        }
            daysContainer.appendChild(dayDiv);
        }

        // Next month's date
        const totalDisplayed = firstDay + lastDay;
        const nextDays = (7 - (totalDisplayed % 7)) % 7;

        for (let i = 1; i <= nextDays; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener('click', function(){
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    })

    nextButton.addEventListener('click', function(){
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    })

    renderCalendar(currentDate);
});
