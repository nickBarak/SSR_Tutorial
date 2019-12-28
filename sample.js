// function findTime(shched1, sched2) {
//     let availability = [];
//     let t = 0;
//     let c = "0";
//     for (i = 0; i < 96; i++) {
//         while (c < 10) {
//             if (t < 45) {
//                 if (t === 0) {
//                     availability.push([0 + c + "00", 0 + c + (t + 15)]);
//                     t += 15;
//                 } else {
//                     availability.push([0 + c + t, 0 + c + (t + 15)]);
//                     t += 15;
//                 }
//             } else if (c === "9" && t === 45) {
//                 let d = c;
//                 c++;
//                 c = String(c);
//                 availability.push([0 + d + 45, c + "00"]);
//                 t = 0;
//             } else {
//                 let d = c;
//                 c++;
//                 c = String(c);
//                 availability.push([0 + d + 45, 0 + c + "00"]);
//                 t = 0;
//             }
//         }
//         if (t < 45) {
//             if (t === 0) {
//                 availability.push([c + "00", c + (t + 15)]);
//                 t += 15;
//             } else {
//                 availability.push([c + t, c + (t + 15)]);
//                 t += 15;
//             }
//         } else if (c === "19" && t === 45) {
//             let d = c;
//             c++;
//             c = String(c);
//             availability.push([d + 45, c + "00"]);
//             t = 0;
//         } else {
//             let d = c;
//             c++;
//             c = String(c);
//             availability.push([d + 45, c + "00"]);
//             t = 0;
//         }
//     }
//     console.log(availability);
// }

// findTime();

function findAvail(sched1, bound1, sched2, bound2, dur) {
    let availability1 = [];
    let availability2 = [];
    let availability3 = [];
    let comp1;
    let comp2;
    let dur2;
    if (dur <= 60) {
        dur2 = dur;
    } else {
        if (dur % 60 > 9) {
            dur2 = Number(`${Math.floor(dur / 60)}${dur % 60}`);
        } else {
            dur2 = Number(`${Math.floor(dur / 60)}0${dur % 60}`);
        }
    }

    if (bound1[0] !== sched1[0][0]) {
        availability1.push([bound1[0], sched1[0][0]]);
    }
    if (bound2[0] !== sched2[0][0]) {
        availability2.push([bound2[0], sched2[0][0]]);
    }
    for (let i = 1; i < sched1.length; i++) {
        if (sched1[i][0] !== sched1[i - 1][1]) {
            availability1.push([sched1[i - 1][1], sched1[i][0]]);
        }
    }
    for (let i = 1; i < sched2.length; i++) {
        if (sched2[i][0] !== sched2[i - 1][1]) {
            availability2.push([sched2[i - 1][1], sched2[i][0]]);
        }
    }
    if (bound1[1] !== sched1[sched1.length - 1][1]) {
        availability1.push([sched1[sched1.length - 1][1], bound1[1]]);
    }
    if (bound2[1] !== sched2[sched2.length - 1][1]) {
        availability2.push([sched2[sched2.length - 1][1], bound2[1]]);
    }

    comp1 = availability1.map(i =>
        i.map(j => Number(String(j).replace(/:/, "")))
    );
    comp2 = availability2.map(i =>
        i.map(j => Number(String(j).replace(/:/, "")))
    );

    comp1.forEach(i => {
        comp2.forEach(j => {
            if (j[0] > i[0]) {
                if (j[1] < i[1]) {
                    availability3.push([j[0], j[1]]);
                } else if (j[1] >= i[1] && j[0] < i[1]) {
                    availability3.push([j[0], i[1]]);
                }
            } else if (j[0] < i[0]) {
                if (j[1] > i[1]) {
                    avability3.push([i[0], i[1]]);
                } else if (j[1] <= i[1] && j[1] > i[0]) {
                    availability3.push([i[0], j[1]]);
                }
            } else {
                if (j[1] < i[1]) {
                    availability3.push([j[0], j[1]]);
                } else if (j[1] >= i[1]) {
                    availability3.push([i[0], i[1]]);
                }
            }
        });
    });

    for (let i = 0; i < availability3.length; i++) {
        if (availability3[i][1] - availability3[i][0] <= 60) {
            if (String(availability3[i][1]).length === 3) {
                if (
                    String(availability3[i][1]).slice(1) !== "00" &&
                    availability3[i][1] - availability3[i][0] < dur2
                ) {
                    delete availability3[i];
                } else if (
                    String(availability3[i][1]).slice(1) === "00" &&
                    availability3[i][1] - 40 - availability3[i][0] < dur2
                ) {
                    delete availability3[i];
                }
            } else {
                if (
                    String(availability3[i][1]).slice(2) !== "00" &&
                    availability3[i][1] - availability3[i][0] < dur2
                ) {
                    delete availability3[i];
                } else if (
                    String(availability3[i][1]).slice(2) === "00" &&
                    availability3[i][1] - 40 - availability3[i][0] < dur2
                ) {
                    delete availability3[i];
                }
            }
        } else {
            if (availability3[i][1] - 40 - availability3[i][0] < dur2) {
                delete availability3[i];
            }
        }
    }

    availability3 = availability3.filter(i => i !== undefined);
    availability3 = availability3.map(i =>
        i.map(j => {
            if (String(j).length === 4) {
                return `${String(j).slice(0, 2)}:${String(j).slice(2)}`;
            } else {
                return `${String(j).slice(0, 1)}:${String(j).slice(1)}`;
            }
        })
    );

    return availability3;
}

const schedu1 = [
    ["9:30", "10:45"],
    ["11:00", "12:15"],
    ["15:30", "16:45"]
];
const schedu2 = [
    ["9:00", "9:50"],
    ["11:00", "11:50"],
    ["13:00", "13:50"]
];
const bounds1 = ["9:00", "23:30"];
const bounds2 = ["8:00", "23:00"];

console.log(findAvail(schedu1, bounds1, schedu2, bounds2, 60));
