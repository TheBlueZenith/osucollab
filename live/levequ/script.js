// Event Listeners Main
document.addEventListener("DOMContentLoaded", ondomcontentloaded);
window.addEventListener("resize", bruhfunc);

function ondomcontentloaded() {
    loadingScreenInit()
}

function loadingScreenInit() {
    LSBar()
    setTimeout(LSBoxes, 1000)
    setTimeout(LSBarToBox, 2000)
    setTimeout(LSTransitionToContent, 3500)
    setTimeout(CIntroSequence, 3600)
}

function LSBar() {
    var lb = document.getElementById('lsloadingbar');
    lb.style.transition = 'all 1s ease-in-out';
    lb.style.width = 100 + '%';
}

function LSBoxes() {
    var bt = document.getElementById('lsboxt');
    var bb = document.getElementById('lsboxb');
    bt.style.transition = 'all 1s ease-in-out';
    bt.style.transform = 'translate(0, -100%)';
    bb.style.transition = 'all 1s ease-in-out';
    bb.style.transform = 'translate(0, 100%)';
}

function LSBarToBox() {
    var lb = document.getElementById('lsloadingbar');
    setInterval(Resize, 0)
    setInterval(Scale, 100)
    setInterval(RemoveTop, 200)
    function Resize() {
        lb.style.width = '100px';
        lb.style.height = '100px';
    }
    function Scale() {
        lb.style.transform = 'scale(50%)';
        lb.style.transform += ' translate(calc(100vw - 100px), calc(100vh - 100px)';
    }
    function RemoveTop() {
        lb.style.top = '0';
    }
}

function LSTransitionToContent() {
    var ls = document.getElementById('loading')
    ls.style.display = 'none';
    var cb = document.getElementById('lsbox')
    cb.style.display = 'flex';
    cb.style.transform = 'scale(50%) translate(calc(100vw - 100px), calc(100vh - 100px))';
}

// function LSCenterBox() {
//     var lb = document.getElementById('lsloadingbar');
//     MoveElementVert(lb, 50);
//     MoveElementHorz(lb, 50);
// }

// Content

function CIntroSequence() {
    CSpinBox();
    setTimeout(CMoveBox, 500);
    setTimeout(CTextOnBox, 1500);
    setTimeout(CShowDescBox, 1500);
    setTimeout(CChangeBoxColor, 1500);
    setTimeout(CCLSBoxT, 2000);
    setTimeout(CMoveBoxesUp, 2500);
    setTimeout(CShowLinkBoxes, 3000)
    // setTimeout(CCLSBoxT, 1500);
}

function CSpinBox() {
    var lsb = document.getElementById('lsbox');
    lsb.style.transition = 'all 1s ease-in-out';
    lsb.style.transform += ' rotate(-360deg)';
}

function CMoveBox() {
    var lsb = document.getElementById('lsbox')
    lsb.style.width = '40%';
    lsb.style.transform = 'translate(10vw, 42vh)';
}

function CTextOnBox() {
    var lsb = document.getElementById('lsboxtext');
    lsb.style.display = 'inline';
    // let bruh = 0;
    let ttext = new CTypeWriter(lsb, "Random");
    ttext.type();
}

function CChangeBoxColor(){
    var lsb = document.getElementById('lsbox');
    lsb.style.backgroundColor = 'red';
}

function CShowDescBox() {
    var td = document.getElementById('descbox');
    td.style.display = 'flex';
    td.style.transition = 'all 0.5s ease-in-out';
    setTimeout(() => {
        td.style.transform = 'translate(10vw, 58vh)';
    }, 500);
    setTimeout(() => {
        let ttext = new CTypeWriter(document.getElementById('descboxtext'), "Lorem Ipsum faze clan reference: 🗑️")
        ttext.type();
    }, 1000);
}

function CMoveBoxesUp() {
    var lsb = document.getElementById('lsbox');
    var descb = document.getElementById('descbox');

    lsb.style.transform = 'translate(10vw, 22vh)';
    descb.style.transform = 'translate(10vw, 38vh)';
    // descb.style.transform = 'translate(10vw, 50vh)';
}

function CShowLinkBox() {

}

function CShowLinkBoxes() {
    var linksdiv = document.getElementById('linksdiv');
    var linksdivc = linksdiv.children;
    var curchild = 0;
    function ShowE() {
        linksdivc[curchild].style.transform = 'none';
        curchild++
        if(curchild<linksdivc.length){
            setTimeout(ShowE,250)
        }
        else{
            curchild = 0;
        }
    }
    ShowE();
}

function CCLSBoxT() {
    var lsb = document.getElementById('lsbox');
    lsb.style.transition = 'all 0.5s ease-in-out';
}

class CTypeWriter {
    constructor(elem, text, speed = 100) {
        this.elem = elem;
        this.text = text;
        this.speed = speed;
        this.twc = 0;
    }

    type() {
        if (this.twc < this.text.length) {
            this.elem.innerHTML += this.text.charAt(this.twc);
            this.twc++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

function TypeWriter(elem, text, speed = 100) {
    twc = 0;
    // Type();
    function Type() {
        if (twc < text.length) {
            elem.innerHTML += text.charAt(twc);
            twc++;
            setTimeout(Type, speed);
        }
    }

    return Type;
}

function TypeWriterCartridge() {
    this.i = 0;
}

function bruhfunc() {
    console.log("window resized");
    // MoveElementVert(document.getElementById('box'), 50)
    // MoveElementHorz(document.getElementById('box'), 50)
    // MoveElementHorz(document.getElementById('linksdiv', 50));
}

function MoveElementT(elem, val) {
    elem.style.transform = 'translate(' + val + ')';
}

function MoveElementVert(elem, val, anchor = 'middle', speed = '1') {
    console.log('MEV Fired');
    var cstyle = window.getComputedStyle(elem);
    var elemHeight = cstyle.getPropertyValue('height').slice(0, -2);
    var elemHeightInt = parseFloat(elemHeight);
    // WHY DID THIS TAKE SO LONG TO FIGURE OUT
    var elemMidOffset = (window.innerHeight - elemHeightInt / 2) / window.innerHeight * 100;
    function MoveUp() {
        elem.style.top = (elemMidOffset - val) + '%';
    }
    requestAnimationFrame(MoveUp);
}

function MoveElementHorz(elem, val, anchor = 'middle', speed = '1') {
    console.log('MEH Fired');
    var cstyle = window.getComputedStyle(elem);
    var elemWidth = cstyle.getPropertyValue('width').slice(0, -2);
    var elemWidthInt = parseFloat(elemWidth);
    // WHY DID THIS TAKE SO LONG TO FIGURE OUT
    var elemMidOffset = (window.innerWidth - elemWidthInt / 2) / window.innerWidth * 100;
    function MoveRight() {
        elem.style.left = (elemMidOffset - val) + '%';
    }
    requestAnimationFrame(MoveRight);
}

function MoveElementVertFT(elem, val, anchor = 'middle', speed = '1') {
    console.log('MEV Fired');
    var cstyle = window.getComputedStyle(elem);
    var elemHeight = cstyle.getPropertyValue('height').slice(0, -2);
    var elemHeightInt = parseFloat(elemHeight);
    // WHY DID THIS TAKE SO LONG TO FIGURE OUT
    var elemMidOffset = (window.innerHeight - elemHeightInt / 2) / window.innerHeight * 100;
    function MoveUp() {
        elem.style.top = (elemMidOffset - val) + '%';
    }
    requestAnimationFrame(MoveUp);
}

function MoveElementHorzFL(elem, val, anchor = 'middle', speed = '1') {
    console.log('MEH Fired');
    var cstyle = window.getComputedStyle(elem);
    var elemWidth = cstyle.getPropertyValue('width').slice(0, -2);
    var elemWidthInt = parseFloat(elemWidth);
    // WHY DID THIS TAKE SO LONG TO FIGURE OUT
    var elemMidOffset = (window.innerWidth - elemWidthInt / 2) / window.innerWidth * 100;
    function MoveRight() {
        elem.style.left = (elemMidOffset - val) + '%';
    }
    requestAnimationFrame(MoveRight);
}