const speeed = document.querySelector(`#speeed`)
const h2 = document.querySelector(`h2`)
const increaseSpeed = document.querySelector(`#increaseSpeed`)
const decreaseSpeed = document.querySelector(`#decreaseSpeed`)
const increaseTemp = document.querySelector(`#increaseTemp`)
const decreaseTemp = document.querySelector(`#decreaseTemp`)
const increaseDiskSize = document.querySelector(`#increaseDiskSize`)
const decreaseDiskSize = document.querySelector(`#decreaseDiskSize`)
const temp = document.querySelector(`#temp`)
const disk_images = document.querySelectorAll(".disks img");
const price = document.querySelector(`#price`)
const disk_size = document.querySelector(`#diskSize`)

let current_speed = 60;
let current_km = 750;
let current_temp = 20
let current_disk_size = 113
let current_price = 89990

const update_speed = () => {
    const disk_speed = current_speed > 0 ? 300 / current_speed : 0;
    disk_images.forEach((img) => {
        img.style.animationDuration = `${disk_speed}s`;
    })
}

increaseSpeed.onclick = () => {
    current_speed = current_speed + 5;
    if (speeed.innerHTML < 300) {
        speeed.innerHTML = current_speed;
    }
    if (current_km > 0 && current_speed <= 300) {
        current_km = current_km - 5;
        h2.innerHTML = `${current_km} км`;
    }else {
        current_speed = 300
        speeed.innerHTML = current_speed
    }
    update_speed()
}

decreaseSpeed.onclick = () => {
    current_speed = current_speed - 5
    if (speeed.innerHTML > 0) {
        speeed.innerHTML = current_speed
    }
    if (current_km > 0 && current_speed >= 0) {
        current_km = current_km + 5;
        h2.innerHTML = `${current_km}км`;
    } else {
        current_speed = 0
        speeed.innerHTML = current_speed
    }
    update_speed()
}

increaseTemp.onclick = () => {
    if (current_temp < 40) {
        current_temp = current_temp + 5;
        temp.innerHTML = current_temp;

        if (current_km > 0) {
            current_km = current_km - 5;
            h2.innerHTML = `${current_km} км`;
        }
    }
};

decreaseTemp.onclick = () => {
    if (current_temp > -10) {
        current_temp = current_temp - 5;
        temp.innerHTML = current_temp;

        if (current_km > 0) {
            current_km = current_km + 5;
            h2.innerHTML = `${current_km} км`;
        }
    }
};


const update_size = () => {
    disk_images.forEach((img) => {
        img.style.width = `${current_disk_size}px`;
        img.style.height = `${(current_disk_size * 0.8)}px`;
    });
};

increaseDiskSize.onclick = () => {
    if (current_disk_size < 120) {
        current_disk_size = current_disk_size + 2;

        current_price = current_price + 200
        price.innerHTML = current_price
        update_size();
    }
};

decreaseDiskSize.onclick = () => {
    if (current_disk_size > 107) { 
        current_disk_size = current_disk_size - 2;

        current_price = current_price - 200
        price.innerHTML = current_price
        update_size();
    }
};