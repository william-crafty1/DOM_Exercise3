// Create circle tracker
let tracker = document.createElement('div');
tracker.style.display = "block";
tracker.style.width = "20px";
tracker.style.height = "20px";
tracker.style.backgroundColor = "blue";
tracker.style.borderRadius = "50px";
tracker.style.transition = "0.1s";
document.body.append(tracker);

// Move  and track Circle
document.onmousemove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('circle').style.marginLeft = x + "px";
    document.getElementById('circle').style.marginTop = y + "px";
    tracker.style.marginLeft = x + "px";
    tracker.style.marginTop = y + "px";
}
