// KEYS
const c = document.getElementById("c")
const cs = document.getElementById("cs")
const d = document.getElementById("d")
const ds = document.getElementById("ds")
const e = document.getElementById("e")
const f = document.getElementById("f")
const fs = document.getElementById("fs")
const g = document.getElementById("g")
const gs = document.getElementById("gs")
const a = document.getElementById("a")
const as = document.getElementById("as")
const b = document.getElementById("b")

// NOTES

const cn = new Audio('./notes/c4.mp3')
const csn = new Audio('./notes/c-4.mp3')
const dn = new Audio('./notes/d4.mp3')
const dsn = new Audio('./notes/d-4.mp3')
const en = new Audio('./notes/e4.mp3')
const fn = new Audio('./notes/f4.mp3')
const fsn = new Audio('./notes/f-4.mp3')
const gn = new Audio('./notes/g4.mp3')
const gsn = new Audio('./notes/g-4.mp3')
const an = new Audio('./notes/a5.mp3')
const asn = new Audio('./notes/a-5.mp3')
const bn = new Audio('./notes/b5.mp3')


window.addEventListener('keydown', (event) => {

    // Whitvent Keys
    if (event.key === '1') {
        c.style.backgroundColor = 'yellow'
        cn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '1') {
                c.style.backgroundColor = 'white'
            }
        });
    }
    
    if (event.key === '3') {
        d.style.backgroundColor = 'yellow'
        dn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '3') {
                d.style.backgroundColor = 'white'
            }
        });
    }
    if (event.key === '5') {
        e.style.backgroundColor = 'yellow'
        en.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '5') {
                e.style.backgroundColor = 'white'
            }
        });
    }
    if (event.key === '6') {
        f.style.backgroundColor = 'yellow'
        fn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '6') {
                f.style.backgroundColor = 'white'
            }
        });
    }
    if (event.key === '8') {
        g.style.backgroundColor = 'yellow'
        gn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '8') {
                g.style.backgroundColor = 'white'
            }
        });
    }
    if (event.key === '0') {
        a.style.backgroundColor = 'yellow'
        an.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '0') {
                a.style.backgroundColor = 'white'
            }
        });
    }
    if (event.key === '=') {
        b.style.backgroundColor = 'yellow'
        bn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '=') {
                b.style.backgroundColor = 'white'
            }
        });
    }


    // Black Keys
    if (event.key === '2') {
        cs.style.backgroundColor = '#bd0000'
        csn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '2') {
                cs.style.backgroundColor = 'black'
            }
        });
    }
    if (event.key === '4') {
        ds.style.backgroundColor = '#bd0000'
        dsn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '4') {
                ds.style.backgroundColor = 'black'
            }
        });
    }
    if (event.key === '7') {
        fs.style.backgroundColor = '#bd0000'
        fsn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '7') {
                fs.style.backgroundColor = 'black'
            }
        });
    }
    if (event.key === '9') {
        gs.style.backgroundColor = '#bd0000'
        gsn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '9') {
                gs.style.backgroundColor = 'black'
            }
        });
    }
    if (event.key === '-') {
        as.style.backgroundColor = '#bd0000'
        asn.play();
        window.addEventListener('keyup', (event) => {
            if (event.key === '-') {
                as.style.backgroundColor = 'black'
            }
        });
    }
})