var card = document.getElementById('card')

const setProp = function (value, prop , element){
    return element.style.setProperty(prop , value)
}

function mouseUpdate(e){
    const leftOfset = card.offsetLeft;
    const TopOfset = card.offsetTop;
    const offsetWidth = card.offsetWidth;

    const xR = e.pageX - leftOfset;
    const yR = e.pageY - TopOfset;
    
	var XAngle =  (0.35- yR / offsetWidth) *40 ;
    var YAngle = -(0.35- xR / offsetWidth) * 40 ;

    setProp(XAngle +'deg' , '--x' , card)
    setProp(YAngle +'deg' , '--y' , card)
}

card.addEventListener("mousemove" , mouseUpdate)
card.addEventListener("mouseleave" , ()=>{
setProp(0+'deg' , '--x' , card)
setProp(0+'deg' , '--y' , card)
})
card.addEventListener('click' , ()=>{
    setProp('red' , 'background-color' , card)
})


/**
pageX : it is the distance from your mouse to the left of your broweser page;
offsetLeft: it is the distance between the div's left border edge to its parent left edge's padding;
offsetWidth: it is the distance between the divs left and right border;
--x : this is a css variable given to the rotateX attribute;
 */