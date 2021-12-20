let relativeSize = 4
const width = 600;
const height =  600;
const viewx = relativeSize * 300;
const viewy = relativeSize * 300;
let size = (x) => x * relativeSize;



let params = {
    head : {
        size: 50,
        color: 'grey',
        color2:'grey',
        marker:'red',
    },
    ears : {
        size: 15,
        color: 'red',
    },
    eyes : {
        size: 5,
        color: 'green',
    },
    nose : {
        size: 5,
        color: 'blue',
    },
    mouth : {
        size: 5,
        color: 'yellow',
    }
}

makeHead = (d,input) => {
    let head = `
    <path id="head" 
    d=" M ${d(1)} ${d(0)} A ${d(1)} ${d(1)} 0 0 0 ${d(-1)} ${d(0)} V ${d(1)} Q ${d(0)} ${d(3)} ${d(1)} ${d(1)} Z"
    fill="${input.color}" stroke="red" stroke-width="1"/>`;

    
    return head;
}
makeEars = (d, input) => {
    let ears = 
    `<path id="ear_left" 
    d=" M ${d(1)} ${d(0.5)} Q ${d(1.4)} ${d(0.8)} ${d(1)} ${d(1.2)}" 
    fill="green" stroke="${input.color}" stroke-width="${input.size}"/>
    <path id="ear_right" 
    d=" M ${d(-1)} ${d(0.5)} Q ${d(-1.4)} ${d(0.8)} ${d(-1)} ${d(1.2)}" 

    fill="green" stroke="${input.color}" stroke-width="${input.size}"/>`;

    return ears;
}
makeEyes = (d,input) => {
    let eyes = `
    <circle cx="${d(0.4)}" cy="${d(0.5)}" r="${size(input.size)}" fill="${input.color}"/>
    <circle cx="${d(-0.4)}" cy="${d(0.5)}" r="${size(input.size)}" fill="${input.color}"/>`;
    return eyes;
}
makeNose = (d,input) => {
    let nose = `<circle cx="${d(0)}" cy="${d(1)}" r="${size(input.size)}" fill="${input.color}"/>`;
    return nose;
}
makeMouth = (d,input) => {
    let mouth = `<ellipse cx="${d(0)}" cy="${d(1.25)}" rx="${d(0.5)}" ry="${d(0.1)}" fill="${input.color}"/>`;
    return mouth;
}

function makeSVG(params){
    console.log(params);
    d = (x) => size(x * params.head.size);
    text = `<svg width="${width}" height="${height}" viewBox="-${viewx/2} -${viewy/2} ${viewx} ${viewy}">
    ${makeHead(d,params.head)}
    ${makeEars(d,params.ears)}
    ${makeEyes(d,params.eyes)}
    ${makeMouth(d,params.mouth)}
    ${makeNose(d,params.nose)}
    </svg>`
      console.log(text);
        return text;
    }
function start(){
    let main = document.querySelector('main');
    main.innerHTML = makeSVG(params);

    console.log('hello');
    }


    document.onload = start();
   
