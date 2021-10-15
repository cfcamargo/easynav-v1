const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:700,
    reset: true
})

scrollReveal.reveal(`
                    #home .image, #home .text-content,
                    #home .text, #home a,
                    footer .logos, footer .text
                    `, {interval:100});