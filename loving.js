
(function(){
    let cnt = 0;
    let hearts = [];
    function mouse({pageX, pageY}){
        if(cnt++ % 10 == 0){
            let heart = document.createElement("div");
            heart.innerText = "❤️";
            heart.style.position = 'absolute';
            heart.style.left = pageX + 'px';
            heart.style.top = pageY + 'px';
            heart.style.opacity = 0.8;
            document.body.appendChild(heart);
            hearts.push(heart);
        }
    }

    function update(){
        hearts.forEach((heart, index)=>{
            const newX = parseInt(heart.style.left, 10) + 2;
            const newY = parseInt(heart.style.top, 10) + 2;
            var newOpacity = parseFloat(heart.style.opacity, 10) || 1;
            newOpacity -= 0.1;
            heart.style.opacity = newOpacity;
            heart.style.top = `${newY}px`;
            heart.style.left = `${newX}px`;
            if(newOpacity <= 0){
                document.body.removeChild(heart);
                hearts.splice(index, 1)
            }
        })
    }

    document.addEventListener("mousemove", mouse);
    setInterval(update, 100);
})();