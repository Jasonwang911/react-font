(function (win, doc) {
    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 7.5 + 'px';
    }
    change();
    win.addEventListener('resize', change, false);
})(window, document);

console.log(`目前的环境是 ${process.env.REACT_APP_SECRET_API} 环境`)