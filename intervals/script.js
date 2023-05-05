var logger = setInterval(function() {
    console.log("I'm running")
}, 1000)

setTimeout(function() {
    clearInterval(logger)
}, 5500)