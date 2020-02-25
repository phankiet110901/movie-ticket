let gheDaDat = [];

let gheSaled = [
    { row: 1, number: 2 },
    { row: 2, number: 5 },
    { row: 2, number: 2 }

];

let seats = document.getElementsByClassName("seat");



for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    // lay hang ghe
    let row = Number(seat.getAttribute("data-row"));
    // lay so ghe 
    let number = Number(seat.innerHTML);

    gheSaled.forEach((seatSale) => {
        if (seatSale.row == row && seatSale.number == number) {
            seat.setAttribute("data-sale", "false");
        }
    });

    const sale = seat.getAttribute("data-sale");


    if (sale == "true") {
        seat.addEventListener("click", () => {
            let seatInfo = {
                row,
                number
            }

            if (seat.className.indexOf("seat_click") == -1) {
                gheDaDat.push(seatInfo);
                seat.className += " seat_click";
                showSeat(gheDaDat);
            } else {
                seat.className = "seat";

                // Xoa ghe
                let newArr = gheDaDat.filter((seat) => {
                    if (seat.row == seatInfo.row && seat.number == seatInfo.number) {
                        return false;
                    }
                    return true;
                });

                gheDaDat = [...newArr];
                showSeat(gheDaDat);

            }
        });
    } else {
        seat.className += " seat_saled";
    }



}

let showSeat = (gheDaDat) => {
    document.getElementById("showSeat").innerHTML  = "";
    gheDaDat.forEach(seat => {
        document.getElementById("showSeat").innerHTML += `<span>Hang: ${seat.row} , ghe: ${seat.number}</span> <br/>`;
    });
}