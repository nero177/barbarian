export const fade = {
    in: {
        opacity: 0
    },
    out: {
        opacity: 1
    }
}

export const transition = {
    duration: 1
}

export const leftColumnAppear = {
    in: {
        opacity: 0,
        transform: 'translateX(-40%)'
    },
    out:{
        opacity: 1,
        transform: 'translateX(0%)'
    }
}

export const rightColumnAppear = {
    in: {
        opacity: 0,
        transform: 'translateX(40%)'
    },
    out:{
        opacity: 1,
        transform: 'translateX(0%)'
    }
}

export const linkArrowsShake = {
    translateY: ['0%', '20%', '0%']  
}
