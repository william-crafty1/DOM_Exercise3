
// Move  and track Circle
document.onmousemove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('circle').style.marginLeft = x + "px";
    document.getElementById('circle').style.marginTop = y + "px";
    tracker.style.marginLeft = x + "px";
    tracker.style.marginTop = y + "px";
}
