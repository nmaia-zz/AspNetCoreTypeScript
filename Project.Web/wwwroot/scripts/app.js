function Welcome(person) {
    return String.prototype.concat('Hello, ', person, '!');
}
function OnButtonClick() {
    var user = 'Floor Jansen';
    document.getElementById('divMsg').innerHTML = this.Welcome(user);
}
//# sourceMappingURL=app.js.map