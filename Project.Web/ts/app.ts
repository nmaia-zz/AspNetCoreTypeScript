function Welcome(person: string) {

    return String.prototype.concat('Hello, ', person, '!');
}

function OnButtonClick() {

    let user = 'Floor Jansen';

    document.getElementById('divMsg').innerHTML = this.Welcome(user);
}