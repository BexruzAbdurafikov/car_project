const basic = {
    powerReserve: 750,
    price: 89990,
    speed: 60,
    temp: 20,
    disks: 19,
    duration: 1000
};


const power = document.querySelector('#power');
const price = document.querySelector('#price');
const speed = document.querySelector('#speed');
const temp = document.querySelector('#temp');
const disks = document.querySelector('#diskSize');


const speedBtns = document.querySelectorAll('.speed__btn');
const tempBtns = document.querySelectorAll('.temp__btn');
const diskBtns = document.querySelectorAll('.disks__btn');
const disk_images = document.querySelectorAll(`.disks img`)

function reload() {
    power.innerHTML = `${basic.powerReserve} км`;
    price.innerHTML = `${basic.price.toLocaleString()}`;
    speed.innerHTML = `${basic.speed}`;
    temp.innerHTML = `${basic.temp}`;
    disks.innerHTML = `${basic.disks}`;
    disk_images.forEach((img) => {
        img.style.animationDuration = `${basic.duration}ms`
    })
}
reload();


speedBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const attr = btn.getAttribute('data-action');
        if (attr === 'inc' && basic.speed < 300) {
            basic.speed += 10;
            basic.powerReserve -= 5;
            basic.duration -= 30
        }
        if (attr === 'dec' && basic.speed > 0) {
            basic.speed -= 10;
            basic.powerReserve += 5;
            basic.duration += 30
        }
        reload();
        if (basic.speed === 0) {
            disk_images.forEach((img) => {
                img.style.animationDuration = `0ms`
            })
        }
    });
});

tempBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const attr = btn.getAttribute('data-action');
        if (attr === 'inc' && basic.temp < 40) {
            basic.temp += 5;
            basic.powerReserve -= 5;
        }
        if (attr === 'dec' && basic.temp > -10) {
            basic.temp -= 5;
            basic.powerReserve += 5;
        }
        reload();
        if (basic.speed === 0) {
            disk_images.forEach((img) => {
                img.style.animationDuration = `0ms`
            })
        }
    });
});

diskBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const attr = btn.getAttribute('data-action');
        if (attr === 'inc' && basic.disks < 21) {
            basic.disks += 1;
            basic.price += 500
            disk_images.forEach((img) => {
                img.style.width = `${img.width + 5}px`
                img.style.height = `${img.height + 5}px`
            })
        }
        if (attr === 'dec' && basic.disks > 18) {
            basic.disks -= 1;
            basic.price -= 500
            disk_images.forEach((img) => {
                img.style.width = `${img.width - 5}px`
                img.style.height = `${img.height - 5}px`
            })
        }
        reload();
        if (basic.speed === 0) {
            disk_images.forEach((img) => {
                img.style.animationDuration = `0ms`
            })
        }
    });
});
const airCond = document.querySelector('.switch input');
let interval = 0;

airCond.addEventListener('click', () => {
    clearInterval(interval);
    if (airCond.checked) {
        let timer = 0
        interval = setInterval(() => {
            if (timer < 10) {
                basic.powerReserve -= 1;
                timer++
                reload();
            }
        }, 1000);
    } else {
        clearInterval(interval);
        let timer = 0
        interval = setInterval(() => {
            if (timer < 10) {
                basic.powerReserve += 1;
                timer++
                reload();
            }
        }, 1000);
    }
});

reload();
