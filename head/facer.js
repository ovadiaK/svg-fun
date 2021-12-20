let relativeSize = 4
const width = 600;
const height =  600;
const viewx = relativeSize * 200;
const viewy = relativeSize * 200;
let size = (x) => x * relativeSize;



let params = {
    head : {
        size: 50,
        color: '#b07438',
    },
    ears : {
        size: 15,
        color_outside: '#8a5117',
        color_inside:'#b07438'
    },
    eyes : {
        size: 5,
        color: 'green',
    },
    eyeBrow : {
        size: 5,
        color: 'black',
    },
    nose : {
        size: 5,
        color: '#b07438',
    },
    mouth : {
        size: 5,
        color: '#8f3a18',
    },
    hair:{
        color:"black"
    }
}

let params2 = {
    head : {
        size: 40,
        color: '#e89c38',
    },
    ears : {
        size: 15,
        color_outside: '#c98428',
        color_inside:'#e89c38'
    },
    eyes : {
        size: 5,
        color: 'blue',
    },
    eyeBrow : {
        size: 15,
        color: '#7d6410',
    },
    nose : {
        size: 5,
        color: '#e89c38',
    },
    mouth : {
        size: 5,
        color: '#ed7f6b',
    },
    hair:{
        color:"#7d6410"
    }
}

makeHead = (d,input) => {
    let head = `
    <path id="head" 
    d=" M ${d(1)} ${d(0)} A ${d(1)} ${d(1)} 0 0 0 ${d(-1)} ${d(0)} V ${d(1)} Q ${d(0)} ${d(3)} ${d(1)} ${d(1)} Z"
    fill="${input.color}" stroke="black" stroke-width="1"/>`;

    
    return head;
}
makeEars = (d, input) => {
    let ears = 
    `<path id="ear_left" 
    d=" M ${d(0.9)} ${d(0.5)} Q ${d(1.5)} ${d(0.8)} ${d(0.8)} ${d(1.2)}" 
    fill="${input.color_inside}" stroke="${input.color_outside}" stroke-width="${input.size}"/>
    <path id="ear_right" 
    d=" M ${d(-0.9)} ${d(0.5)} Q ${d(-1.5)} ${d(0.8)} ${d(-0.8)} ${d(1.2)}" 

    fill="${input.color_inside}" stroke="${input.color_outside}" stroke-width="${input.size}"/>
    `;

    return ears;
}
makeEyes = (d,input) => {
    let eyes = `
    <ellipse cx="${d(0.4)}" cy="${d(0.5)}" rx="${size(2*input.size)}" ry="${size(input.size)}" stroke="black" fill="white"/>
    <ellipse cx="${d(-0.4)}" cy="${d(0.5)}" rx="${size(2*input.size)}" ry="${size(input.size)}" stroke="black" fill="white"/>
    
    <circle cx="${d(0.4)}" cy="${d(0.5)}" r="${size(input.size)}" fill="${input.color}"/>
    <circle cx="${d(-0.4)}" cy="${d(0.5)}" r="${size(input.size)}" fill="${input.color}"/>

    <circle cx="${d(0.4)}" cy="${d(0.5)}" r="${size(input.size)/2}" fill="black"/>
    <circle cx="${d(-0.4)}" cy="${d(0.5)}" r="${size(input.size)/2}" fill="black"/>
    
    `;
    return eyes;
}
makeEyeBrow = (d,input) => {
    let eyeBrow = `
    <path id="eyebrow_left"
    d="M ${d(0.6)} ${d(0.3)} Q ${d(0.5)} ${d(0.1)} ${d(0.2)} ${d(0.3)}"
    fill="transparent" stroke="${(input.color)}" stroke-width="${input.size}"/>

    <path id="${input.color}"
    d="M ${d(-0.6)} ${d(0.3)} Q ${d(-0.5)} ${d(0.1)} ${d(-.2)} ${d(.3)}"
    fill="transparent" stroke="${(input.color)} " stroke-width="${input.size}"/>
    `;
    return eyeBrow
}

makeNose = (d,input) => {
    
    let nose = `
    <ellipse cx="${d(0)}" cy="${d(0.98)}" rx="${d(0.2)}" ry="${d(0.1)}" stroke="black" fill="${input.color}"/>
    <ellipse cx="${d(0)}" cy="${d(0.8)}" rx="${size(input.size)}" ry="${d(0.3)}" stroke="black" fill="${input.color}"/>`;
    return nose;
}
makeMouth = (d,input) => {
    let mouth = `
    <ellipse cx="${d(0)}" cy="${d(1.3)}" rx="${d(0.4)}" ry="${d(0.1)}" stroke="black" fill="${input.color}"/>
    <rect x="${d(-0.4)}" y="${d(1.3)}" width="${d(0.8)}" height="${d(0.01)}"  fill=""black""/>`;
    return mouth;
}
makeHair = (d,input) => {
    let hair = `
    <path id="hair" 
    d = "M ${d(1)} ${d(0)} A ${d(0.1)} ${d(0.1)} 0 0 0 ${d(-1)} ${d(0)} V ${d(0.4)} C ${d(-0.5)} ${d(-0.5)} ${d(0.5)} ${d(-0.5)} ${d(1)} ${d(0.4)} Z"
    fill="${input.color}" stroke="black" stroke-width="1"/>`;

    return hair;
}

function makeSVG(params){
    console.log(params);
    d = (x) => size(x * params.head.size);
    text = `<svg width="${width}" height="${height}" viewBox="-${viewx/2} -${viewy/2} ${viewx} ${viewy}">
    ${makeEars(d,params.ears)}
    ${makeHead(d,params.head)}
    ${makeEyes(d,params.eyes)}
    ${makeEyeBrow(d,params.eyeBrow)}
    ${makeMouth(d,params.mouth)}
    ${makeNose(d,params.nose)}
    ${makeHair(d,params.hair)}
    </svg>`
      console.log(text);
        return text;
    }
function start(){
    let main = document.querySelector('main');
    main.innerHTML = makeSVG(params);
    main.innerHTML+=makeSVG(params2);


    console.log('hello');
    }


    document.onload = start();
   
